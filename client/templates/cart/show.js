Template.showCart.helpers({
    cart: function(){
        currentCart = Carts.getCart(userKey);
        return currentCart;
    }
});

Template.showCart.events({
    "click .remove-from-cart" : function(ev) {
        ev.preventDefault();
        removeFromCart(this.sku, function(err, res){
            if(err){
                console.log(err);
            } else {
                if(cart.items.length === 0) {
                    Router.go("homeIndex");
                }
            }
        })
    },
    //TODO : Fix item-qty, value of total not changing when multiples of item added/removed from cart
    
    "change .item-qty" : function(ev){
        var rawValue = $(ev.currentTarget).val();
        
        if(!isNaN(rawValue)){
            var newQty = parseInt(rawValue);
            var name = this.name;
            if(newQty === 0){
                removeFromCart(this.sku);
            } else {
                this.quantity = parseInt(newQty);
                updateCart(this.sku,this.quantity, function(err, res){
                    if(err){
                        sAlert.error(err);
                    } else {
                        sAlert.success(name + " updated");
                    }
                });00
            }
            $(ev.currentTarget).val(newQty);
        } else {
            sAlert.error("That's not a number...");
        }
    }
});
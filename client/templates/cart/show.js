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
    "change .item-qty" : function(ev){
        var newQty = parseInt($(ev.currentTarget).val());
        console.log(this.sku);
        var name = this.name;
        if(newQty === 0){
            removeFromCart(this.sku);
        } else{
            this.quantity = parseInt(newQty);
            saveCart(currentCart, function(err, res){
                if(err){
                    console.log(err);
                } else {
                    alert(name + " updated");
                }
            });
            //just to be sure
            $(ev.currentTarget).val(newQty);
        }
    }
});
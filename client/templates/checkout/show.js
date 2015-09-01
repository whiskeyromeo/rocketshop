Template.checkoutShow.helpers({
    cart: function(){
        currentCart = Carts.findOne({userKey: userKey});
        return currentCart;
    }
});

Template.checkoutShow.onRendered(function(){
    //wire up KO and test data
    checkoutModel = new CheckoutViewModel({
        name : "Senor Test",
        email : "test@test.com",
        address : {
            street: "123 Tester ln",
            city : "Beverly Hills",
            state: "CA",
            zip : "90210",
            country : "US"
        }
    });
    
    var panel = document.getElementById("checkout-panel");
    ko.cleanNode(panel);
    ko.applyBindings(checkoutModel, panel);
    
});
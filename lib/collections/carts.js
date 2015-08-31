Carts = new Mongo.Collection("carts");

Carts.getCart = function(userKey){
    var cart = Carts.findOne({userKey : userKey});
    if(!cart){
        cart = {
            userKey : userKey,
            created_at : new Date(),
            itemCount : 0,
            total : 0,
            items : [],
            notes : [{
                note: "Cart created",
                created_at : new Date()
            }],
            status: "open"
            
        };
        Carts.insert(cart);
    }
    return cart;
}
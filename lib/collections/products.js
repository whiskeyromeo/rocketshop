Products = new Mongo.Collection("products");


Products.featured = function(){
    var featuredSkus = ["honeymoon-mars", "johnny-liftoff", "one-way-reentry"];
    return Products.find({sku: {$in : featuredSkus}});
};

Products.allow({
    update: function(userid, product){
        return isAdmin();
    },
    insert: function(userid, product){
        return isAdmin();
    },
    remove: function(userid, product){
        return isAdmin();
    }
})
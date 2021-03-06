Router.configure({
   layoutTemplate : 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
})

Router.route("/", {
    name : "homeIndex",
    data : function() {
        return {
            message : "Welcome To The Rocket Shop!"
        }
    }
});

Router.route("/about", {
    name : "homeAbout"
});

Router.route("/contact", {
    name : "homeContact"
});

Router.route("/products/:sku", {
    name : "productShow",
    data : function(){
        return Products.findOne({sku : this.params.sku});
    }
});

Router.route("/vendors/:slug", {
    name : "vendorsShow",
    data : function(){
        return Vendors.findOne({slug: this.params.slug});
    }
});

Router.route("/cart", {
    name: "showCart"
});

Router.route("/checkout", {
    name: "checkoutShow"
});
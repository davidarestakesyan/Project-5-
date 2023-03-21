function cart_route(app){
    const cart_controller = require('../controllers/cart_controller')
    
    app.get('/cartUser/:id', cart_controller.userCart)
    app.post('/cart', cart_controller.cart);
}

module.exports = {
    cart_route
}
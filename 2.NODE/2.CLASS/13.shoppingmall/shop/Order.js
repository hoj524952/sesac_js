const Product = require('./Product');
const Clothing = require('./Product');
const Electronics = require('./Product');
const User = require('./User');

class Order {
    constructor(user) {
        this.user = user;
        this.items = [];
        this.totalBill = 0;
    } 

    addProduct(product, quantity) {
        if(product.checkAvailability(quantity)){
            this.items.push({product, quantity});
            this.totalBill += product.price * quantity;
        }
        else{
            console.log(`상품 재고 부족. ${product.name} 주문 불가.`)
        }
    }

    getOrderSummary() {
        return {
            user: this.user.name,
            totalBill: this.totalBill
        }
    }
    
}

module.exports = Order;
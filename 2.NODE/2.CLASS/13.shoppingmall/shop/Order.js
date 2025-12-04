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
    // getOrderSummaryOLDJS() {
    //     const items = [];

    //     for(let i=0; i<this.products.length; i++){
    //         const{product, quantity} = this.products[i];

    //         items.push({
    //             name: product.name,
    //             quantity: quantity,
    //             price: product.price
    //         })
    //     }

    //     return {
    //         user: this.user.name,
    //         quantity: quantity,
    //         price: product.price
    //     }
    // }


    getOrderSummary() {
        // 고차함수를 사용한 반환하는.. Modern JS 스타일
        return {
            user: this.user.name,
            totalBill: this.totalBill,
            items: this.product.map(({ product, quantity }) => ({
                name: product.name,
                quantity: quantity,
                price: product.price
            }))
        }
    }
    
}

module.exports = Order;
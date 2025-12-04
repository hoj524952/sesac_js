const Order = require('./Order');

class User {
    constructor(name, email, address) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.orderHistory = [];
    }

    addOrder(order) {
        this.orderHistory.push(order);
    }

    // 나중에 주문내역을 가져오는 함수도 만들어야겠다...

    getOrderHistory() {
        // this.items.map(item => {
        //     console.log(item.product);
        //     console.log(item.quantity);
    return this.orderHistory.map(order => order.getOrderSummary());
    }
}


module.exports = User;
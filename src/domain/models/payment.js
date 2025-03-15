class Payment {
    constructor(amount, method, currency, product_id) {
        this.amount = amount;
        this.method = method;
        this.currency = currency;
        this.product_id = product_id;
    }
}

module.exports = {
    Payment
};
module.exports = [
  {
    id: "get-payment-status", 
    url: "/list-payment/:paymentId",
    method: "GET", 
    variants: [
      {
        id: "default",
        type: "json",
        options: {
          status: 200,
          body: {
            tx_id: "b018b23b-9931-4438-b55f-782ed0b5b4c2",
            status: "processed"
          }
        }
      }
    ]
  }
];
module.exports = [
  {
    id: "init-payment",
    url: "/init-payment",
    method: "POST",
    variants: [
      {
        id: "default",
        type: "json",
        options: {
          status: 200,
          body: {
            tx_id: "b01b823b-9931-4438-b55f-782ed0b5b4c2",
            status: "processed"
          }
        }
      }
    ]
  }
];
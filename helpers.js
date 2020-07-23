// Datos pagador
// player: {
//   name: "Lalo",
//   surname: "Landa",
//   email: "test_user_63274575@testuser.com",
//   phone: { area_code: "11", number: "22223333" },
//   address: { street_name: "False", street_number: "123", zip_code: "1111" },
// }

// notification_url: "localhost:3000/notification",

const setPreference = ({ title, price, unit, img }) => {
  return {
    items: [
      {
        id: "1234",
        description: "“Dispositivo móvil de Tienda e-commerce​",
        picture_url: img,
        title: title,
        category_id: "electronics",
        currency_id: "ARG",
        unit_price: parseInt(price),
        quantity: parseInt(unit),
      },
    ],
    back_urls: {
      success: "localhost:3000/success",
      failure: "localhost:3000/failure",
      pending: "localhost:3000/pending",
    },
    auto_return: "approved",
    payment_methods: {
      excluded_payment_methods: [
        {
          id: "amex",
        },
      ],
      excluded_payment_types: [
        {
          id: "atm",
        },
      ],
      installments: 6,
    },
    external_reference: "alejobianchi@gmail.com",
    notification_url: "localhost:3000/notification?source_news=webhooks",
  };
};

module.exports = { setPreference };
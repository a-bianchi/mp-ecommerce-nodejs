// Datos pagador
// payer: {
//   name: "Lalo",
//   surname: "Landa",
//   email: "test_user_63274575@testuser.com",
//   phone: { area_code: "11", number: "22223333" },
//   address: { street_name: "False", street_number: "123", zip_code: "1111" },
// }

// notification_url: "localhost:3000/notification",

// {
//   id: 6189925691,
//   live_mode: true,
//   type: 'payment',
//   date_created: '2020-07-23T16:12:54Z',
//   user_id: '469485398'
//   api_version: 'v1',
//   action: 'payment.created',
//   data: { id: '7721357945' },
// }

//?source_news=webhooks

const setPreference = ({ title, price, unit, img }) => {
  console.log(img);
  return {
    items: [
      {
        id: "1234",
        description: "​Dispositivo móvil de Tienda e-commerce​",
        picture_url:
          "https://a-bianchi-mp-commerce-nodejs.herokuapp.com/assets/003.jpg",
        title: title,
        category_id: "electronics",
        currency_id: "ARG",
        unit_price: parseInt(price),
        quantity: parseInt(unit),
      },
    ],
    payer: {
      name: "Lalo",
      surname: "Landa",
      email: "test_user_63274575@testuser.com",
      phone: { area_code: "11", number: 22223333 },
      address: {
        street_name: "False",
        street_number: 123,
        zip_code: "1111",
      },
    },
    back_urls: {
      success: `https://a-bianchi-mp-commerce-nodejs.herokuapp.com/success`,
      failure: "https://a-bianchi-mp-commerce-nodejs.herokuapp.com/failure",
      pending: "https://a-bianchi-mp-commerce-nodejs.herokuapp.com/pending",
    },
    auto_return: "approved",
    notification_url:
      "https://a-bianchi-mp-commerce-nodejs.herokuapp.com/notifications",
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
  };
};

module.exports = { setPreference };

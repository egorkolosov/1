Ecwid.OnAPILoaded.add(function() {
// Initialize extra fields
console.log(ec);  
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

// A text input that asks customer’s name
ec.order.extraFields.new_name = {
  'title': 'В подарок?',
  'textPlaceholder': 'да',
  'type': 'text',
  'orderDetailsDisplaySection': 'customer_info',
  'checkoutDisplaySection': 'payment_details',
  'required': false
};

// A text input that asks customer’s phone number
ec.order.extraFields.new_phone = {
  'title': 'Ваш телефон',
  'textPlaceholder': '79999999999',
  'type': 'text',
  'required': false
};

// A text input that shows additional info
ec.order.extraFields.balance = {
  'title': 'Спасибо',
  'value': "за ваш заказ',
  'type': 'label',
  'required': false,
  'checkoutDisplaySection': 'payment_details'
};

Ecwid.refreshConfig();
});

const {
  getAllOrdersHandler,
  getOrderByIdHandler,
} = require('../handlers/orderHandlers');

const orderRoutes = [
  {
    method: 'GET',
    path: '/orders',
    handler: getAllOrdersHandler,
  },

  {
    method: 'GET',
    path: '/orders/{orderID}',
    handler: getOrderByIdHandler,
  },

];

module.exports = orderRoutes;





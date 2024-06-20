## Description

This repository contains the implementation of an Order Management System (OMS). The project utilizes NestJS for the backend framework, Prisma as the ORM, and PostgreSQL for the database. The system includes essential functionalities such as user management, product management, cart operations, and order processing.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# watch mode
$ npm run start:dev
```

## Routes

### Users

- Add User
  - `POST /api/users`
    - Add new user.
  
- Get Users
  - `GET /api/users`
    - Get all users.

- Get Order History
  - `PUT /api/users/{userId}/orders`
    - Retrieve order history for specific user.

### Products

- Add Product
  - `POST /api/products`
    - Add new product.
  
- Get Products
  - `GET /api/products`
    - Retrieve all products.

- Get Product
  - `GET /api/products/{productId}`
    - Get specific product by id.
  
- Update Product
  - `PUT /api/products/update/{productId}`
    - Update product.

- Delete Product
  - `DELETE /api/products/delete/{productId}`
    - Delete product.
   

- Get Order History
  - `PUT /api/users/{userId}/orders`
    - Retrieve order history for specific user.

### Orders

- Place Order
  - `POST /api/orders/{userId}`
    - Create a new order for the specific user with the products in their cart.
  
- Get Order By Id
  - `GET /api/orders/{orderId}`
    - Retrieve the order details by order ID.

- Update Order Status 
  - `PUT /api/orders/{orderId}/status`
    - Update order status by order ID.
   
- Apply Coupon
  - `PUT /api/orders/{orderId}/apply-coupon`
    - Apply discounts and coupons to orders.

### Cart

- Add Product to Cart
  - `POST /api/cart/add`
    - Add product to the cart or updates the quantity if the product is already in cart.
  
- View Cart
  - `GET /api/cart/{userId}`
    - Retrieve the user's cart.

- Update Cart 
  - `PUT /api/cart/update`
    - Update the quantity of product in cart.
   
- Remove From Cart 
  - `PUT /api/cart/remove`
    - Remove a product from the cart.

## License

Nest is [MIT licensed](LICENSE).

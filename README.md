### Introduction
An API for an E-commerce store. E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. These business transactions occur either as business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer or consumer-to-business.

### Installation Guide
* Clone this repository [here](https://github.com/Thabiso-Timzo/express-store-web.git).
* The develop branch is the most stable branch at any given time, ensure you're working from it.
* Run npm install to install all dependencies
* You can either work with the default mLab database or use your locally installed MongoDB. Do configure to your choice in the application entry file.
* Create an .env file in your project root folder and add your variables. See .env.sample for assistance.

### .env

`` the object { key: value } can be found in config/env/index.js file. NB: Create your values `` 

* PORT 
* MONGO_URI
* JWT_SECRET 
* EMAIL_ADDRESS 
* EMAIL_PASSWORD  
* CLOUD_NAME
* CLOUD_API_KEY 
* CLOUD_API_SECRET 

### Usage
* Run npm install to install all the dependencies
* Run npm start to the application inside the server folder or npm run server outside the server folder.
* Connect to the API using Postman on port 8080.

### API Endpoints

* User APIs

``
|HTTP Verbs|            Endpoints            |                   Action                        |
| ---------| ------------------------------- | ----------------------------------------------- |
|  POST    | /api/user/register              | To sign up a new user account                   |
|  POST    | /api/user/login                 | To login an existing user account               |
|  POST    | /api/user/admin-login           | To login an existing admin                      |
|  POST    | /api/user/cart                  | To creat a cart                                 |
|  POST    | /api/user/forgot-password-token | To creat a forgotten password                   |     
|  POST    | /api/user/cart/apply-coupon     | To apply a coupon in a certain cart             |
|  POST    | /api/user/cart/cash-order       | To creat an order                               |
|  GET     | /api/user/refresh               | Fetches a refreshed token                       |
|  GET     | /api/user/logout                | logs out a user                                 |
|  GET     | /api/user/cart                  | Fetches  carts                                  |
|  GET     | /api/user/wishlist              | Fetches wish list                               |
|  GET     | /api/user/get-orders            | Fetches orders                                  |
|  GET     | /api/user/:id                   | Fetches a single user                           |
|  PUT     | /api/user/order/update-order/:id| Updates order status    * ADMIN *               |
|  PUT     | /api/user/reset-password/:token | Updates a password                              |
|  PUT     | /api/user/save-address          | Saves address                                   |
|  PUT     | /api/user/update-password       | Updates a user password                         |
|  PUT     | /api/user/update-user           | Update user information                         |
|  PUT     | /api/user/blocked-user/:id      | Blocks a user    * ADMIN *                      |
|  PUT     | /api/user/unblocked-user/:id    | Unblocks a user  * ADMIN *                      |
|  DELETE  | /api/user/empty-cart            | Delete cart (Empty cart)                        |
|  DELETE  | /api/user/:id                   | Delete single user                              |

``

* Product APIs

``
|HTTP Verbs|            Endpoints            |                   Action                        |
| ---------| ------------------------------- | ----------------------------------------------- |
|  POST    | /api/product/create             | Creates a product * ADMIN *                     |
|  GET     | /api/product/:id                | Fetches a single product    * ADMIN *           |
|  GET     | /api/product/                   | Fetches all product                             |
|  PUT     | /api/product/wishlist           | Update a wish list                              |
|  PUT     | /api/product/rating             | Product rating                                  |
|  PUT     | /api/product/:id                | Update product    * ADMIN *                     |     
|  PUT     | /api/product/uploads/:id        | Upload multiple product images                  |
|  DELETE  | /api/product/:id'               | Delete a product                                |

``

* Coupon APIs

``
|HTTP Verbs|            Endpoints            |                   Action                        |
| ---------| ------------------------------- | ----------------------------------------------- |
|  POST    | /api/product/create             | Creates a coupon * ADMIN *                      |
|  GET     | /api/product/                   | Fetches all coupons    * ADMIN *                |
|  PUT     | /api/product/:id                | Updates a coupon    * ADMIN *                   |
|  DELETE  | /api/product/:id                | Deletes a coupon    * ADMIN                     |

``

* Category APIs

``
|HTTP Verbs|            Endpoints            |                   Action                        |
| ---------| ------------------------------- | ----------------------------------------------- |
|  POST    | /api/category/create            | Creates a category * ADMIN *                    |
|  GET     | /api/category/all               | Fetches all categories                          |
|  GET     | /api/category/:id               | Fetches a signle categories                     |
|  PUT     | /api/category/:id               | Updates a category    * ADMIN *                 |
|  DELETE  | /api/category/:id               | Deletes a category    * ADMIN                   |

``

* Brand APIs

``
|HTTP Verbs|            Endpoints            |                   Action                        |
| ---------| ------------------------------- | ----------------------------------------------- |
|  POST    | /api/brand/create               | Creates a brand * ADMIN *                       |
|  GET     | /api/brand/all                  | Fetches all brands                              |
|  GET     | /api/brand/:id                  | Fetches a signle brand                          | 
|  PUT     | /api/brand/:id                  | Updates a brand    * ADMIN *                    |
|  DELETE  | /api/brand/:id                  | Deletes a brand    * ADMIN                      |

``

* Blog APIs

``
|HTTP Verbs|            Endpoints            |                   Action                        |
| ---------| ------------------------------- | ----------------------------------------------- |
|  POST    | /api/blog/create                | Creates a blog * ADMIN *                        |
|  GET     | /api/blog/                      | Fetches all blogs                               |
|  GET     | /api/blog/:id                   | Fetches a signle blog                           | 
|  PUT     | /api/blog/likes                 | Likes a blog    * ADMIN *                       |
|  PUT     | /api/blog/dislikes              | Dislikes a blog    * ADMIN                      |
|  PUT     | /api/blog/uploads/:id           | Uploads blog images    * ADMIN                  |
|  PUT     | /api/blog/:id                   | Update a blog    * ADMIN                        |
|  DELETE  | /api/blog/:id                   | Deletes a blog   * ADMIN                        |

``

* Blog Category APIs

``
|HTTP Verbs|            Endpoints            |                   Action                        |
| ---------| ------------------------------- | ----------------------------------------------- |
|  POST    | /api/blog/category/create       | Creates a blog category * ADMIN *               |
|  GET     | /api/blog/category/             | Fetches all blog categories                     |
|  GET     | /api/blog/category/:id          | Fetches a signle blog category                  | 
|  PUT     | /api/blog/category/likes        | Likes a blog category    * ADMIN *              |
|  DELETE  | /api/blog/category/:id          | Deletes a blog category  * ADMIN                |

``

### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
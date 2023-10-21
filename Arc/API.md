## Auth Microservice
1. Auth Model
-> AuthId
-> Ref : UniqueId
-> Email (String)
-> password (Encrypted String)
-> Role (Enum - String)

## User Microservice
1. User Model
-> Ref : AuthId
-> Name (Object)
-> Addresses (Object)
-> DOB
-> Contact (Object)

## Restaurant Model
1. Restaurant Model
-> Ref : AuthId
-> Name (Object)
-> Addresses (Object)
-> Times-Opening-Closing 
-> Photo - (url)
-> Cuisine Type - Array
-> Contact (Object)

1. Menu Model
-> RestaurantId
-> Name (String)
-> Array [Items]
-> Veg or NonVeg (options)
-> Descrption - String
-> Photo (url)

1. Items
-> MenuId
-> Name (String)
-> Ingredients - (Array)
-> Veg or NonVeg (options)
-> Descrption - String
-> Photo - (Url)
-> Price

## Delivery Microservice
1. DeliveryBoy Model
-> Ref : AuthId
-> Name (Object)
-> Addresses (Object)
-> Contact (Object)
-> Available (Status)

## Order Microservice
1. Orders Model
-> UserId
-> RestaurantId
-> DeliveryId
-> DeliveryAddress
-> Order Details
    -> ItemId
    -> Quantity
    -> Price
-> Status
-> Delivery Instructions


## Payment Microservice
1. Payment
-> OrderId
-> Payment option
-> Gateway Reference






# API Design

### Auth: REST - NestJS
1. Register User - POST /api/v1/register
2. login User - POST /api/v1/login
3. OTP Verifictaion
4. Reset password
5. Forget password

### User:
1. Create User - POST /api/v1/users  => AuthId
2. Get User - GET /api/v1/users/:userId
3. Update User Details - PATCH /api/v1/users/:userId
4. List Users - GET /api/v1/users

### Restaurant:
1. Create Restaurant - POST /api/v1/restaurants  => AuthId
2. Get Restaurant - GET /api/v1/restaurants/:restaurantId
3. Update Restaurant Details - PATCH /api/v1/restaurants/:restaurantId
   -- Menu:
   1. Create Menu - POST /api/v1/restaurants/:restaurantId/menu
   2. Create Item - POST /api/v1/restaurants/:restaurantId/menu/:menuId/item
   3. Get Menu - GET /api/v1/restaurants/:restaurantId/menu/:menuId
   4. Get Item - GET /api/v1/restaurants/:restaurantId/menu/:menuId/item/:itemId
   5. Update Menu - PATCH /api/v1/restaurants/:restaurantId/menu/:menuId
   6. Update Item - PATCH /api/v1/restaurants/:restaurantId/menu/:menuId/item/:itemId

   -- Features Related:
   1. Get All Items - GET /api/v1/restaurants/items
   2. Get All Menus - GET /api/v1/restaurants/menus

### Delivery:
1. Create Delivery Boy - POST /api/v1/delivery  => AuthId
2. Get Delivery Boy - GET /api/v1/delivery/:deliveryId
3. Update Delivery Boy Details - PATCH /api/v1/delivery/:deliveryId
4. Check Driver Availability - GET /api/v1/delivery/:deliveryId/status

### Order:
1. Create Order - POST /api/v1/orders => RestaurantId, UserId
2. Get Order Status - GET /api/v1/orders/:orderId
3. Update Order - PATCH /api/v1/orders/:orderId
4. User Order History - GET /api/v1/users/:userId/orders
5. Restaurant Order History - GET /api/v1/restaurants/:restaurantId/orders













### Auth:
1. Verify OTP - POST /api/v1/verify-otp
2. Update Password - PATCH /api/v1/update-password
3. Logout - POST /api/v1/logout

### User:
1. Delete User - DELETE /api/v1/users/:userId
2. List Users - GET /api/v1/users

### Restaurant:
1. Delete Restaurant - DELETE /api/v1/restaurants/:restaurantId
2. Search Restaurants - GET /api/v1/restaurants/search?q=:query

### Menu:
1. Delete Menu - DELETE /api/v1/restaurants/:restaurantId/menu/:menuId
2. Search Menu Items - GET /api/v1/restaurants/:restaurantId/menu/search?q=:query

### Delivery:
1. Delete Delivery Boy - DELETE /api/v1/delivery/:deliveryId
2. Search Delivery Boys - GET /api/v1/delivery/search?q=:query

### Order:
1. Cancel Order - DELETE /api/v1/orders/:orderId
2. User Order History - GET /api/v1/users/:userId/orders
3. Restaurant Order History - GET /api/v1/restaurants/:restaurantId/orders

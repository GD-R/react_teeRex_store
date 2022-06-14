# This app is Deployed here - https://react-teerex-store.netlify.app/

#How to run this app

1. Download the zip or Clone this repository

2. Install dependencies - npm install

3. Run the app - npm start

4. To Build the app for production to the build folder - npm build

# This app was build based on a Geektrust Challenge - https://www.geektrust.com/coding/detailed/teerex-store

# Background
 King Shan wants to start a t-shirt business, where he sells t-shirts online.
 To run his business, he needs a simple webapp where customers can browse through the catalog of t-shirts, add t-shirts to the shopping cart and checkout the items in     the cart. 
 
 # Task
 Your job is to build a simple UI, which allows a customer to do the following: 
1. Browse the catalog on a product listing page
2. Each card should have the image, name and price.
3. Search using free text which is a combination of one or more of the below attributes
 Name 
 Colour 
 Type 
 Eg. green polo 
4. Filter for t-shirts using specific attributes
 Gender 
 Colour 
 Price range 
 Type
5. Add one or more t-shirts to the shopping cart
6. View the shopping cart by clicking the shopping cart icon
7. Increase quantity or delete items from the shopping cart
8. Display the total amount in the shopping cart.


# Rules
 1. Every t-shirt type has a limited quantity. If the customer tries to order more than the available quantity, an error message should appear. 
 2. Filter can be applied by itself or on top of the search results. 
 3. Filters and Search need not be retained on navigation between pages, But the items in the cart should be retained. 
 4. All features (search, filter, add to cart etc) should be handled on the client side. 
 5. There are no API's provided for these features. 
 6. There is no need to handle pagination. 
 7. There is no need to implement user registration / login. 
 
 
 # APIs Provided
 We provide you an Catalogue API to list all the products and their properties. 
 
#Request Type :
 GET
 
#Endpoint :
 https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json 

### Crealytics Search App

This app is intended to parse a CSV file and show the results in a table view.

## Highlights:

- Currently, we have two views "Table view" for desktop devices and "Card view" for mobile devices
- You can search any product from the list of 20k produts that you have in the products.csv of assets folder.
- You see the auto complete suggestions under the search bar.
- All images are cached and served using service worker to provide offline mode experience.
- Also, we are using Lazy load image component to serve the user better UI experience.
- UI is designed also to provide a mobile first experience while viewing product details.
- Test cases are added and comments are provided at required places.

## Features:

- You can filter the data in the table view. Available filters are listed below:
  1. You can filter products based on "on Discount" and "No Discount" or both
  2. You can filter products based on Gender
  3. You can sort the products based on Price and Sale price.
- If you want to see more details about a product, click on the product link on either table view or product view.
- You can see more details about the product and percentage of discount on product along with images.
- You can preview images to full screen by clicking on the image.
- You can return to table or mobile view by pressing "Esc" button or clicking on "X" icon on the screen

### Note for Developers:

- This app is bootstapped using "create-react-app" and you can always take a pull and install the dependencies using "npm install" command and start the app using "npm start"
- It will automatically open a browser window or you can manually open "http://localhost:3001" to see the app.
- Offline first experience is provided using default service worker and could always be enhanced or customized.

# hilton-reservations
Web page application that contains room reservation functionality. User can select from four rooms, and select a certain number of adults and children per room. Technologies used are: node.js, react, styled-components, webpack, babel, ES6 javascript, CSS3, and HTML5.

## Run App
`npm start`

**This starts a webpack dev server and executes all webpack processes.

## Additional Notes

For the UI, the application is layed out via "pages" and "components", using react and style-components. The client.js file is the entry point for the react functionality. This also contains the react routing. The reservation page contains multiple form elements (dropdowns and checkboxes). These elements are all created dynamically with it's data coming from stub data. 

The component Reservations.js contains this stub data along with acting as the parent for the other react components. The other react components are PeoplePicker.js and RoomPicker.js. All html components/elements within the reservation page are styled-components.

Because of the basic requirements and no other additional specs for the UI, I chose not to style much of the page and it's elements. I didn't use a CSS preprocessor as well. I also didn't include a header, footer, or nav. Webpack is used to minify the javascript and act as the web application server.

If I had more time and requirements for the application, I would of used the following:

- GraphQL for the API
- Apollo for the graphQL binding of the UI to the backend
- MongoDB / Mongoose for the noSQL database
- SASS or LESS for the CSS preprocessing
- Bootstrap for the UI styling framework and components (modal, tooltip, etc), and responsive development
- Jasmin or Mocha for the javascript unit testing
- Docker for the deployment container








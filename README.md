# hotel-reservations
Web page application that contains room reservation functionality. User can select from four rooms, and select a certain number of adults and children per room. Technologies used are: node.js, react, styled-components, webpack, babel, ES6 javascript, CSS3, and HTML5.

## Run app
`npm start`

**This starts a webpack dev server and executes all webpack processes.

## Additional notes

For the UI, the application is layed out via "pages" and "components", using react and style-components. The client.js file is the entry point for the react functionality. The reservation page contains multiple form elements (dropdowns and checkboxes). These elements are all created dynamically with it's data coming from stub data.

The component Reservations.js contains this stub data along with acting as the parent for the other react components. The other react components are PeoplePicker.js and RoomPicker.js. All html components/elements within the reservation page are styled-components.

Because of the basic requirements and no other additional specs for the UI, I chose not to style much of the page and it's elements. I didn't use a CSS preprocessor as well. I also didn't include a header, footer, or nav. Webpack is used to minify the javascript and act as the web application server.

## State / Data management

I used React's "Context API" to manage the applications state/data. The directory "providers" contains the logic for all CONTEXT.PROVIDER. Context.js contains the global context to be used throughout the application. CONTEXT.CONSUMER is placed in it's corresponding component.

## Local stub data

All dropdowns and room information are stored in stub data located in the directory "data". The respective json files are roomData.json and peopleData.json.

## Stored data for persistance

I provided functionality that grabs all selected data values and put into 3 different "sessionStorage" objects for later use to persist this data to pre-populate the form fields:

- roomReservationSelectedRooms
- roomReservationSelectedAdults
- roomReservationSelectedChildren

## Styled Components

All styled-components are exported within their own partial file in the directory "partials".

Given the time frame, I would of mapped together the values of each sets of data/arrays, and streamline all into an accessible JSON object for future use of pre-populating the form fields. Can use techniques such as the map() method and ES6 spread operator `...`.

Ultimately, after the data is sent to the API/database, I would of used a sessionsStorage object or cookie to store the data on the frontend to persist and pre-populate.

## Future recommendations

Will add in the future:

- GraphQL for the API
- Apollo for the graphQL binding of the UI to the backend
- MongoDB / Mongoose for the noSQL database
- SASS or LESS for the CSS preprocessing
- Bootstrap for the UI styling framework and components (modal, tooltip, etc), and responsive development
- Jasmin or Mocha for the javascript unit testing
- Docker for the deployment container


By,
Chris Kennedy

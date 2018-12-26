# location-finder

## Background information

### installation & run
1. start the server in the `../server` folder
2. start the database in the `../assignment` folder or you can point anywhere you like
3. start the client:
    - npm i
    - npm start

### What is available
1. Invest some time to refactor the current code and make it better
    - Changed code from `ES5` to `ES6`
    - Modified graphql calls with `async await` for promises
    - Moved code from `ComponentWillMount` lifecyle hook for server calls to `ComponentDidMount` method.
    - Added negative cases
    - Added a message in UI if no data exists
    - Added `Axios` instead of `graphql` in one scenario where I wanted to implement location based search engine on the basis of title,  as`graphql` schema wasn't able to filter locations by title.
    - Created a `Header` component and moved the code from index.html to it.
    
2. Add webpack  : It is present in `react-scripts` already
3. Add information about owner to apartment view page - Done
4. Add new page "Locations", show the apartments filtered by location - Done
5. Add new page "search page", provide abilities to search by location and filter by [size, price, amenities, details, services]
    - Done, however I included it within the homepage itself.

# food_facts_app

#

<h1>food_facts_app</h1>

<h2>Tech Stack Used</h2>

<ul>
  <li>Vite- Reactjs</li>
  <li>Tailwind Css</li>
  <li>React Router Dom</li>
</ul>

<h2>Method to Solve</h2>

<h3>Home Page</h3>

<p>
  On load-> Called category url for products ->
  https://world.openfoodfacts.org/category/{category}.json - By using useEffect
  and pass the state value to the Products layout
  <img  src="/code-snapshot.png" />

used custom hook to load the data -useCategory and using useEffect fetches the url initially
<img  src="/code-snapshot_useCategory.png" />

Also in product card- Nutriscore feature is shown by the image by conditionally called
<img src="/nutriscore-demo.png">

</p>

<h3>Search functionality</h3>

<p>
  One search bar is provided for both barcode and product name.

used custom hook and products is set by calling it in Home Layout component and passed the setProducts handler as params for the useSearch hook. There by after searching it updates the products using setProducts handler.
<img src="/code-snapshot_useSearch.png" />

Debouncing Technique

Debouncing technique is used so that delays 3secs to fetch api after typing in the search bar
<img src="/code-snapshot_debouncing.png" >

</p>

<h3>Category Filter & Sort Functionality</h3>

<p>
  Both filters uses Component reused by the Render props design technique
  <img src="/code-snapshot_render_props.png" />

Category Filter is loaded intially and called in useCategory hook and passed as a prop to Filter Component also with handler function

And filter changes it updates using the handler and updates the UI.

Sorting is done by using sort method and checks whether its product or nutriscore first and then checks for Ascending or Descending

</p>

<h3>Product Detail Page</h3>

<p>
  Here routers are used and pass the barcode or id to the router url when navigates
  After reaching to the Product Detail page it fetches the api and passes the id that is received from the router url and loads the product
</p>

<h3>Infinite Scroll</h3>

<p>
 It automatically calls the next page and shows below by using the useScroll. Intially it recieves page number from useCategory hook by passing as param.
 <img src="/code-snapshot_useScroll.png" />

 When the component mounts it adds the scroll event handler and checks the user whether he scrolled down to the bottom. And when he reached it calls the api url
 by passing the params, category and pagenum. After each api call it increases the pagenumber.
 Though for efficient UI update it loads only the bottom section.But instead of changing the prev data it adds the current page data with the previous data. So that scrolling became smooth and performant for the user.

 <img src="/code-snapshot_prevprod.png" />
</p>



Total Time Taken : Planning- 4hrs, Coding - 27hrs

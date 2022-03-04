<p align="center">
    <a href="https://adrianserbanescu.com/routeOptimizer/">ROUTE OPTIMIZER</a>
</p>

<p>
    First of all I would like to thank <a href="https://github.com/Angelxv01">Angel</a> for his initial contribution. While I was trying to put almost all the logic on the backend he was quicker than me in finding a solution for optimizing 12 addresses, through api calls directly from the frontend, and I setled with that for the basic functionality.
</p>
<br />
<p>
    This is a basic fullstack MERN web app. It offers the user the possibility to plan and optimize a list of addresses for deliveries (or whatever).
</p>
<br />
<p>
    The ideea for this app came to me while I had a job to deliver 350 addresses in 3-4 days allover Belgium. Since the list of addresses was completly random and because it was so big I could not have it reordered manually in a decent amount of time.
</p>
<br />
<p>
    <ol><strong>Technoligies used on top of MERN:</strong>
        <li>REDUX, <a href="https://github.com/rt2zz/redux-persist">REDUX-persist</a>, Redux-thunk, styled-components, <a href="https://github.com/Turfjs/turf">TurfJS</a>, bcrypt, jsonwebtoken, mongoose etc. </li>
        <li>Mapbox map api</li>
        <li>Mapbox geocoder api</li>
        <li>Mapbox matrix api</li>
        <li>Geoapify batch geocoder api</li>
        <li><a href="https://developers.google.com/optimization/routing/tsp">Google OR-Tools</a></li>
        </ol>
</p><br />

At the core this app solves the <strong>Traveling Salesman Problem</strong>. Since this web app has a presentational purpose I did not venture to offer a solution for Vehicle Routing Problem but I can morph it into that should I decide too.

It uses the Mapbox api to render the Map and to geocode, on the frontend.

In the backend it uses the Mapbox distance matrix api, and Apify batch geocoding api. 
Since the matrix api has a limit of 25x25 (25 coordinates per call) I had to split this call into smaller chuncks and reconstruct the matrix myself in order to be able to optimize more addresses.

The apify batch geocoding api has the purpose of giving me the possibility to geocode an entire list of addresses (like from a file) and feed the result to the Mapbox matrix api.

After having the distance matrix I employ a python google ortools script that returns an ordered
array of indexes with which I reorder (optimize) the list of addresses.

<ol>From a functionality stand-point it can do this:
    <li>Without a registered account it can optimize up to 10 addresses + the DEPOT.</li>
    <li>With a registered account it can optimize hundreds of addresses, save the user's previous routes on the backend, offer the possibility to change the navigator from waze to googlemaps, reuse older routes.</li>
</ol>

With or without an account the app persists its state between refreshes. Should the user close the browser or refresh the page, all the progress is saved.
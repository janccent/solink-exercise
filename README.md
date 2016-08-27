# Solink Coding Exercise

## To Run

For convenience (similar to angular-seed) using http-server for a local webserver. The server can be started with:
  
`npm start`

Or alternatively with:

`http-server -a localhost -p 8000 -c-1 .`

And the app can then be accessed from:

`http://localhost:8000/`

## Comments

* Normally the node_modules directory wouldn't have been committed (and it instead would have been added to .gitignore),
but adding it for convenience (although CDNs are also used).
* Would have restructured the project with a "public" directory.
* If this had been a larger project, then would have tried to take a more generic approach where sensible, e.g. a 
base/parent factory to handle API requests with API services focused on specific features (types of request) via 
inheritance. Although I tried to show just a bit of the large project approach by implementing RequireJS for 
file/module loading and setting up the directory structure from a feature/component perspective. 
* Didn't write it with AngularJS 2.x in mind.

# second video
NPM - USED TO INSTALL ANY PACKAGES
NPX - USED TO EXECUTE ANY PACKAGE
PACKAGE.JSON - 
FILE CONTAINS ALL THE DEV OR NORMAL DEPENDENCIES WITH THEIR EXACT VERSIONS
^ BEFORE ANY VERSION MEANS NEXT MINOR UPDATE WILL BE COME FOR THAT PACKAGE IN FUTURE
~ BEFORE ANY VERSION MEANS NEXT MAJOR UPDATE WILL BE COME FOR THAT PACKAGE IN FUTURE

PARCEL - parceljs.org
This is the webpack to execute any project of javascript
This is replacement for grunt or vite
Parcel acts as bundler and it makes our react project superfast
npx parcel index.html
Parcel will do the following things :- 
- dev build
- live local server
- HMR (Hot Module Replacement)
- file watching algorithm (built using c++)
- images optimization
- compression
- caching- faster build (all catche files are stored in .parcel.catche)
- bundling
- minification
- consistent hashing
- Code splitting 
- different bundling - support older browsers
- error handling
- HTTPs
- tree shaking (remove unused codes) (if we have 100 fns and we are using only 10 fns then parcel will remove unused code)
- parcel is fast because of .parcel-catche
- different dev and prod bundles
- To run parcel in prod - npx parcel build index.html (prod build gets built inside dist folder)
- To run parcel in dev - npx parcel index.html 


- whenver their is an issue with import or export make sure to add type='module' either in script tag or in package.json file.
- after deleting deleting node_modules, when we do npm install then node_modules will come again with all the dependecies and with all packages, this happens because package-lock.json is already contains the exact versions of all installed dependencies/packages. so when we do npm install it will automatically install all data for packages and store those in node_modules. when we install any package ex.. react or parcel, those packages contains their own dependencies for this all dependecines their files and all data is stored in node_modules.
- No need to push node_modules on github. Only push our changed files of html, css and js and packages.json and package-lock.json.
- If we don't want to push some files on github then add those files into .gitignore
- To make our app compatible with older browsers then user BrowsersList :- 
In package.json we can add BrowsersList something like this - 
"BrowsersList" : ['last 2 Chrome version', 'last 2 Firefox version']
"BrowsersList" : ['last 2 versions'] or ['last 10 versions'] - use like this.
website - browserslist.dev
# Public Sector Services

## How to build this website from source

0. Fork and clone this repo!
1. `yarn install` or `npm install`
1. `yarn run develop` and open a browser window to `localhost:5000`
1. Update the title, description, favicons, custom scripts to be loaded clientside, etc., in `public/index.html`, the browser's 'entry point'
2. Add custom scripts to `src/app.js`
3. Build custom elements in `src/components`
4. Set up client side routes in `routing.js`

### Deploy

 `yarn run deploy`

#### If you'd like to use a single entry point to your app, and want to pay zeit only for bandwidth:

Add a "static" option in your package.json:{now} object or your now.json file

#### Alias

After the deployment is tested, update the now alias list in package.json and `yarn run alias`

## Parcel Build System ##
### Install from scratch ###
1. npm install -g parcel-bundler
2. npm init -y
3. configure according to react recipe
```
https://parceljs.org/recipes.html
```
4. install react router dom
```
npm install --save react-router-dom
```

### Run Existing Application ###
1. clone this repo and checkout this branch
```
git clone git@github.com:echolabstech/frontend-samples.git
git checkout test-parcel-build-system
```
2. run the parcel development server, watches files and rebuilds.
```
parcel index.html
```
3. no development server, watches files and rebuilds.
```
parcel watch index.html
```

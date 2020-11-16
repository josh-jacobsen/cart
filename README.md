# EzyVet Frontend Task

## Requirements

| Requirement | State | Comments |
| --------------- | --------------- | --------------- |
| List Products – these should be listed at all times to allow adding of products | Complete | |
| Products should be listed in this format: product name, price, link to add product | Complete | |
| Must be able to add a product to the cart | Complete |  |
| Must be able to view current products in the cart | Complete |  |
| Cart products should be listed in this format: product name, price, quantity, total, remove link | Complete | |
| Product totals should be tallied to give an overall total | Complete | |
| Must be able to remove a product from the cart | Complete | |
| Adding an existing product will only update existing cart product quantity (e.g. adding the same product twice will NOT create two cart items) | Complete | 
| All prices should be displayed to 2 decimal places | Complete | 
| Error checking will be set to strict for viewing completed code | Complete | 
| Project will work as expected with the latest version of React | Complete | Using React version 17
| Handle async call in redux (redux-thunk or Redux-Saga) | Complete | Added an async call [here](https://github.com/josh-jacobsen/ezyvet/blob/master/src/features/products/productsSlice.ts#L36)
| Material-ui (feel free to style it using styled-components) | Not Yet Complete | Will add styling if I have time
| One or two unit test (Enzyme or react-testing-library) | Complete | Have added a couple of RTL tests. Will add more if I have time
| The cart will need to keep it’s state during page loads / refreshes | Not Yet Complete | I would likely use [redux-persist](https://www.npmjs.com/package/redux-persist) for this; I just didn't have the time to wire it up (though it looks pretty straight forward)


## Running the solution 
```
git pull https://github.com/josh-jacobsen/ezyvet
cd ezyvet
yarn install 
yarn start 
Open http://localhost:3000 to view it in the browser.
```

### Running tests 
```
yarn test
```


import { configureStore } from "@reduxjs/toolkit";// importing a function from library to configure redux store
import cartReducer from "./cartSlice"// importing Reducer functions from slice 
// while importing the name must be as name of slice continued with Reducer
//nameofsliceReducer--> here it is cartReducer
let appStore= configureStore({//configuring a variable named appStore as a reduxStore
    reducer:{// this is the reducer function of redux store it hold the reducers of slices
        cart:cartReducer,// list the slice name here with its reducers imported
    }
});
export default appStore;// export the redux store
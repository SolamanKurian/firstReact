
import { createSlice } from "@reduxjs/toolkit";
let cartSlice= createSlice({
    name: 'cart',// name of the slice
    initialState:{//holding the initial values 
        items:[]
    },
    reducers:{//write reducer functions corresponding to actions(api to communicate with redux store)
        addItem:(state,action)=>{// it is the reducer function, 
            //state refer to the previous state(initially initial state mentioned above
            //action refers to the action coming from the despatch(while click in the button)
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop()
        },
        clearCart:(state,action)=>{
            state.items.length=0;
        }
    }
});

export let {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;
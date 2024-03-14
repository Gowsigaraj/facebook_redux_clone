import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice";
import postReducer from "../slice/postSlice"; 

 const store = configureStore({

    reducer:{
        auth:authReducer,
        posts:postReducer,
        
        
    }

})

export default store;
import { createReducer } from "@reduxjs/toolkit";
import commentAction from "../actions/commentActions"; 
    
    const { getAllComments,postComments }= commentAction

    const initialState={
        comments: [],
       
    }
    const commentReducer = createReducer(initialState,
        (builder)=>{
            builder
            .addCase(getAllComments.fulfilled,(state,action)=>{
                console.log(action.payload);
                return{
                    ...state,
                    
                  comments: action.payload.comments.reverse()
                }
            })
            .addCase(postComments.fulfilled,(state,action) =>{
                 if(action.payload.success){
            
                    state.comments.push(action.payload.response)
                } 
            })
           

        })

        export default commentReducer
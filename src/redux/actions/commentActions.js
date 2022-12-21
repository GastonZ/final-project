import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";
const getAllComments = createAsyncThunk("getAllComments",async (idShow)=>{

    try {
        const res = await axios.get(
            ` ${BASE_URL}comments`
        )
        console.log(res);
        return {comments:res.data.allcomments}
        
    } catch (error) {
        return {
            payload: "Error",
          }; 
   
    }
})

const postComments = createAsyncThunk("postComments", async ({data})=>{
    let url = `${BASE_URL}comments/new`

    try {
        let res = await axios.post ( url,data)
        
        if(res.data.id){
            return{
                responseId: res.data.id,
      success: true,
       response:data
            }
        }else{
    return {
      success: false, 
      response:res.data.message
    }
  }
    } catch (error) {
        console.log(error);
        return {
          success: false, response:"error"
        }

    }


    
})


const commentAction={

    getAllComments,
    postComments,
   

}

export default commentAction
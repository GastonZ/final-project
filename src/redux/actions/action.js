import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getCars = createAsyncThunk("getCars", async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/cars`
      );
  
      console.log(res.data.allhotels);
      return { cars: res.data.allhotels };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });
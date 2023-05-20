import { useState } from "react";
import { useDispatch } from "react-redux";

async function useAxios(checkProp) {
    let checkData = useState(checkProp ?? false);
    if(checkData){

      const data = { type, country, numberPagination, API_KEY: "ce68154e45014bfdb3dc80fa072509c4" };
      const url = 'http://localhost:3000/api/datos';
      
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      return response.data;
    }else{
      let dispatch = useDispatch();

      return false;
    }
  
}

export default useAxios;
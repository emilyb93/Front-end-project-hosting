import axios from "axios";
import { useState, useEffect } from "react";

export const userExists = async (username)=>{
    console.log(username)
    let exists;
  await axios.get(`https://news-server-project.herokuapp.com/api/users/${username}`).then((res)=>{
        // console.log(res.data)
        console.log("user exists");
        // return true
        exists = true
        
    }).catch(()=>{
        console.log("user doesnt exist");

        exists = false
    })

    return exists
}

export const useAccount = () =>{ 
    const [userInput, setUserInput] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return {userInput, setUserInput}
}


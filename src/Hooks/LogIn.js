import { useEffect, useState } from 'react';
import axios from 'axios';
import { userExists } from '../utils/Account';

export const fetchUserDetails = async (username) =>{
    const {avatar_url, name} = await axios.get(`https://news-server-project.herokuapp.com/api/users/${username}`)
    .then((res)=>{
        return res.data.user
    })
    // console.log(details)
    console.log("in the f", avatar_url, name)
    return {avatar_url, name}
}



export const useLogIn = () => {

const [user, setUser] = useState(null)
const [loggedIn, setLoggedIn] = useState(false)
const [avatar, setAvatar] = useState(null)
const [trueName, setTrueName] = useState(null)

  useEffect(()=>{

    if(user){
            fetchUserDetails(user).then((res)=>{
              const {avatar_url, name} = res
              setLoggedIn(true)
              setAvatar(avatar_url)
              setTrueName(name)
              localStorage.setItem('avatar-url', avatar_url)
              localStorage.setItem('trueName', name)
              localStorage.setItem('currentUser', user)
            })
          

    }


    if(!user){
   
      const previousUser = localStorage.getItem('currentUser')
      if(previousUser){
        fetchUserDetails()
        setLoggedIn(true)
        setUser(previousUser)
        const avatarURL = localStorage.getItem("avatar-url")
        const storedName = localStorage.getItem("trueName")
        setAvatar(avatarURL)
        setTrueName(storedName)
    } else{
        setUser(null)
        setLoggedIn(false)
        setAvatar(null)
        setTrueName(null)
    }
}
  }, [user, loggedIn])


return {user, loggedIn, avatar, trueName, setUser}

};


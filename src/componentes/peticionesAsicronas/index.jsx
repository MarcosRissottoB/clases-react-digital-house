import { useState, useEffect } from 'react';
import axios from 'axios'
const baseurl = `https://jsonplaceholder.typicode.com/users/`

export const User = ({userId}) => {
  const [user, setUser] = useState({name: '', email: ''});
  const [loading, setLoading] = useState(false);

  const getUserData = async (userId) =>{
    setLoading(true)
    const url = `${baseurl}${userId}`;

    // const user = await fetch(url);
    // const userToJson = await user.json();
    // setUser(userToJson);

    const respuesta = await axios.get(url);
    console.log("axios", respuesta.data);
    setUser( respuesta.data);

    setLoading(false)
  }

  useEffect(
    () => {
      getUserData()
    }, []
  )

  useEffect(
    () => {
      // Ejecuta esta logica, cuando cambie su dependencia, el id.
      getUserData(userId)
    }, [userId]
  )

  return <div>
    <h1>Listado:</h1>
    <br />
    {loading ?
      <p>Cargando datos...</p>
      : user && <span>{user.email}</span>
    }
  </div>
}
  
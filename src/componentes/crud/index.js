import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { List } from '../list';
import { SearchBox } from '../searchbox';
import { FormPost } from '../form'

const BASE_URL = 'https://jsonplaceholder.typicode.com/';
const ENDPOINT_POSTS = 'posts';
// Ejemplo
const API_TOKEN = '456456456456456456456456';

export const Crud = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false);

  const getPosts = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`${BASE_URL}${ENDPOINT_POSTS}`)
      setPosts(data)
    } catch(error) {
      console.log("error", error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(
    () => {
      getPosts()
    }, []) 

    const getPostsById = async (id) => {
      try {
        setLoading(true)
        const { data } = await axios.get(`${BASE_URL}${ENDPOINT_POSTS}/${id}`)
        console.log("getPostsById data", data);
        setPosts([data])
      } catch(error) {
        console.log("error", error);
      } finally {
        setLoading(false)
      }
    }
    
  useEffect(
    () => {
      if(search) {
        getPostsById(search)
      } else {
        getPosts()
      }
    }, [search])




  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleCheckbox = () => {
    setShowForm(!showForm)
  }

  const createPost = async (formData) => {    
    // const config = {
    //   headers: { 
    //     Authorization: `Bearer Token ${API_TOKEN}`,
    //     'Content-Type': 'application/json'
    //   }
    // };
    try {
      const response = await axios.post(
        `${BASE_URL}${ENDPOINT_POSTS}`,
          // config,
          formData
      );
      console.log("response", response);
      
    } catch(error) {
      console.log("error", error);
    } 
  }

  const deletePost = async (id) => {    
    try {
      const response = await axios.delete(
        `${BASE_URL}${ENDPOINT_POSTS}/${id}`);
      console.log("response", response);
      getPosts()
    } catch(error) {
      console.log("error", error);
    } 
  }

  const updatePost = async (id, body) => {    
    try {
      const response = await axios.delete(
        `${BASE_URL}${ENDPOINT_POSTS}/${id}`, body);
      console.log("response", response);
      getPosts()
    } catch(error) {
      console.log("error", error);
    } 
  }

  const handleOnSubmit = async (formData) => {
    createPost(formData)
  }

  return (
    <div style={{height: '100%'}}>
      <h1>Crud</h1>
      <div>
        <label htmlFor="showForm">Habilitar Form:</label>
        <input
          type="checkbox"
          id="showForm"
          name="showForm"
          value={showForm}
          onClick={() => handleCheckbox()}
        />
      </div>
      
      {showForm && <FormPost handleOnSubmit={handleOnSubmit}/>}
      {!showForm && <div>
        <SearchBox
            placeholder='Buscar por ID ' 
            handleChange={handleSearch}
          />
          <br />
          <button onClick={deletePost} >Delete post con id 1</button>
        <h2>Listado de posts</h2>
        { loading ? 
          <p>Loading...</p>
          : <List list={posts} />
        }</div>
      }

    </div>
  )
}

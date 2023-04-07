import React, { useEffect, useState, useReducer } from 'react';
// import axios from 'axios';

import { List } from '../list';
import { SearchBox } from '../searchbox';
import { FormPost } from '../form'

import { usePosts } from '../../hooks/usePosts'

export const Crud = () => {
  
  // const [posts, setPosts] = useState([])
  // const [loading, setLoading] = useState(false)
  // const [search, setSearch] = useState('')
  // const [showForm, setShowForm] = useState(false);

  const { 
    posts,
    setSearch,
    showForm,
    setShowForm,
    loading,
    // updatePost,
    deletePost,
    createPost
   } = usePosts()


  // const getPosts = async () => {
  //   try {
  //     setLoading(true)
  //     const { data } = await axios.get(`${BASE_URL}${ENDPOINT_POSTS}`)
  //     setPosts(data)
  //   } catch(error) {
  //     console.log("error", error);
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // useEffect(
  //   () => {
  //     getPosts()
  //   }, []) 

  // const getPostsById = async (id) => {
  //   try {
  //     setLoading(true)
  //     const { data } = await axios.get(`${BASE_URL}${ENDPOINT_POSTS}/${id}`)
  //     console.log("getPostsById data", data);
  //     setPosts([data])
  //   } catch(error) {
  //     console.log("error", error);
  //   } finally {
  //     setLoading(false)
  //   }
  // }
    
  // useEffect(
  //   () => {
  //     if(search) {
  //       getPostsById(search)
  //     } else {
  //       getPosts()
  //     }
  // }, [search])


  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  
  const handleCheckbox = () => {
    setShowForm(!showForm)
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

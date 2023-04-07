import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';
const ENDPOINT_POSTS = 'posts';

export const usePosts = () => {
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

  const createPost = async (formData) => {    
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


  return {
    posts,
    setSearch,
    showForm,
    setShowForm,
    loading,
    updatePost,
    deletePost,
    createPost
  }
}
import React from 'react'
import { useParams } from 'react-router-dom'

export const Post = () => {

  const handleOnSubmit = (formData) => {
    console.log("handleOnSubmit formData", formData);
  }

  const params = useParams()
  console.log("params", params);
  return (
    <div>
      <h1>Post</h1>
      <span>Id: {params.id}</span>
      {/* <FormPost /> */}
    </div>
  )
}
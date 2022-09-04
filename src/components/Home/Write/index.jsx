import React, { useState } from "react";
import './styles.css';

export default function Create() {

  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Community",
    imageLink: "",
    authorName: "",
    authorAvatarLink: "",
    coverLink: ""
  })

  const handleSubmit = (e) => {

    const blogs = JSON.parse(localStorage.getItem("blogs"));
    const length = blogs.length
    if (length) {
      const lastElem = blogs[length - 1]
      blogs.push({
        id: (+lastElem.id + 1),
        description: data.description,
        title: data.title,
        createdAt: new Date().toLocaleDateString(),
        authorName: data.authorName,
        authorAvatar: data.authorAvatarLink,
        cover: data.coverLink,
        category: data.category,
      })
      localStorage.setItem("blogs", JSON.stringify(blogs))
      alert("Blog added")
    }
  }


  const handleChange = (e) => {
    console.log("data", data);
    const changedFieldName = e.target.name
    const changedFieldValue = e.target.value
    if (changedFieldName === "title") {
      setData(prev => ({ ...prev, title: changedFieldValue }))
    }
    else if (changedFieldName === "description") {
      setData(prev => ({ ...prev, description: changedFieldValue }))
    }
    else if (changedFieldName === "category") {
      setData(prev => ({ ...prev, category: changedFieldValue }))
    }
    else if (changedFieldName === "imageLink") {
      setData(prev => ({ ...prev, imageLink: changedFieldValue }))
    }
    else if (changedFieldName === "authorName") {
      setData(prev => ({ ...prev, authorName: changedFieldValue }))
    }
    else if (changedFieldName === "authorAvatarLink") {
      setData(prev => ({ ...prev, authorAvatarLink: changedFieldValue }))
    }
    else if (changedFieldName === "coverLink") {
      setData(prev => ({ ...prev, coverLink: changedFieldValue }))
    }



  }

  return (
    <div className="create">
      <div className="title">Create Your blog</div>
      <div className="create-inputs">
        <label>Title</label> <input type="text" name="title" onChange={handleChange}></input>
        <label>Description</label> <input type="text" name="description" onChange={handleChange}></input>
        <label>Category</label><select name="category" onChange={handleChange} value={data.category}>
          <option value="Community">Community</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Technology">Technology</option>
        </select>
        <label>Image Link</label> <input type="text" onChange={handleChange} name="imageLink"></input>

        <label>Author Name</label> <input type="text" onChange={handleChange} name="authorName"></input>

        <label>Author Avatar Link</label> <input type="text" onChange={handleChange} name="authorAvatarLink"></input>

        <label>Cover Link</label> <input type="text" onChange={handleChange} name="coverLink"></input>

        <div className="btn">
          <button onClick={handleSubmit}> Create</button>
        </div>
      </div>


    </div>
  );
}
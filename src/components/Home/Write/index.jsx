import React from "react";
// import './styles.css';

export default function Write() {
    
    return (
      <div className="write">
        
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input id="fileInput" type="file" style={{ display: "none" }} />
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
            />
            <input
              className="writeInput"
              placeholder="Category"
              type="text"
              autoFocus={true}
            />
            <input
              className="writeInput"
              placeholder="Sub category"
              type="text"
              autoFocus={true}
            />
            <input
              className="writeInput"
              placeholder="authorName"
              type="text"
              autoFocus={true}
            />
            <input
              className="writeInput"
              placeholder="createdAt"
              type="text"
              autoFocus={true}
            />
            <input
              className="writeInput"
              placeholder="cover"
              type="text"
              autoFocus={true}
            />
            
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Description"
              type="text"
              autoFocus={true}
            />
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    );
  }
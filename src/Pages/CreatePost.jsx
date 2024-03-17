import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


const modules = {
  toolbar:[
    [{'header':[1, 2, 3, 4, 5, 6, false]}],
    ['bold', 'italic', 'underline', 'strike', 'blackquote'],
    [{'list':'ordered'}, {'list':'bullet'},{'indent':'-1'}, {'indent':'+1'}],
    ['link', 'image'],
    ['clean']
  ]
}

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
]

const Post_Categories = [
  'Agriculture', 'Business', 'Education', 'Art', 'Entertainment', 'Uncategorized'
]

const CreatePost = () => {

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Uncategorized');
  const [description, setDescription] = useState('');
  const [tumbnail, setThumbnail] = useState('');

  return (
    <section className="create-post">
      <div className="container">
        <h2 className="">Create Post</h2>
        <p className="form-error-message">This a an error message</p>
        <form className="form create-post-form">
          <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus/>
          <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
            {
              Post_Categories.map(cat => <option key={cat}>{cat}</option>)
            }
          </select>
          <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription}/>
          <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept='png, jpg, jpeg'/>
          <button className="btn primary" type='sumbit'>Create</button>
        </form>
      </div>
    </section>
  )
}

export default CreatePost
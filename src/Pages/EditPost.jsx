import React, { useContext, useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { userContext } from '../Context/userContext'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


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

const EditPost = () => {

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Uncategorized');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [error, setError] = useState('');

  const { currentUser } = useContext(userContext)
  const token = currentUser?.token;
  const navigate = useNavigate()

  const {id}= useParams();

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  },[])

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`)
        setTitle(response?.data.title);
        setDescription(response?.data.description);

      } catch (err) {
        setError(err.response.data.message);
      }
    }
    getPost();
  }, [])

  const editPost = async (e) => {
    e.preventDefault();

    const postData = new FormData();
    postData.set('title', title);
    postData.set('category', category);
    postData.set('description', description);
    postData.set('thumbnail', thumbnail);

    try {
      const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/posts/${id}`, postData, {withCredentials: true, headers:{Authorization: `Bearer ${token}`}});
      if(response.status == 200) {
        return navigate('/');
      }
    } catch (err) {
      setError(err.response.data.message);
    }

  }

  return (
    <section className="create-post">
      <div className="container">
        <h2 className="">Edit Post</h2>
        {error &&<p className="form-error-message">{error}</p>}
        <form className="form create-post-form" onSubmit={editPost}>
          <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus/>
          <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
            {
              Post_Categories.map(cat => <option key={cat}>{cat}</option>)
            }
          </select>
          <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription}/>
          <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept='png, jpg, jpeg'/>
          <button className="btn primary" type='sumbit'>Update</button>
        </form>
      </div>
    </section>
  )
}

export default EditPost
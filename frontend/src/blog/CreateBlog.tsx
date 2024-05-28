import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

export const CreateBlog = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate()

  const store = async (e) => {
    e.preventDefault()
    console.log(title, content)
    return
    await axios.post(URI, { title: title, content: content })
    navigate('/')
  }

  return <div>
    <h2>Crear Blog</h2>
    <form onSubmit={store}>
      <div>
        <label htmlFor="">Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">Content</label>
        <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <button type="submit">Save</button>
    </form>
  </div>
}
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

export const EditBlog = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate()

  const { id } = useParams()

  const update = async (e) => {
    e.preventDefault()
    await axios.put(URI + id, {
      title: title,
      content: content
    })
    navigate('/')
  }

  const getBlogById = async () => {
    const res = await axios.get(`${URI}/${id}`)
    setTitle(res.data.title)
    setContent(res.data.content)
  }

  useEffect(() => {
    getBlogById()
  }, [])


  return <>
    <h1>Edit Blog</h1>
    <form onSubmit={update}>
      <div>
        <label htmlFor="">Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">Content</label>
        <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <button type="submit">Update</button>
    </form>
  </>
}
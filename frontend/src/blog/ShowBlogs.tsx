import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const ShowBlogs = () => {
  const [blogs, setBlogs] = useState(null)
  useEffect(() => {
    getBlogs()
  }, [])

  const getBlogs = async () => {
    const res = await axios.get(URI)
    setBlogs(res.data)
  }

  const deleteBlog = async (id) => {
    await axios.delete(`${URI}/${id}`)
    getBlogs()
  }

  return (<>
    <div className='container mx-auto'>
      <Link to="/create">Create</Link>
      <table id="customers">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Content</th>
          <th>Actions</th>
        </tr>
        {blogs?.map((blog) => (
          <tr key={blog.id}>
            <td>{blog.id}</td>
            <td>{blog.title}</td>
            <td>{blog.content}</td>
            <td>
              <Link to={`/edit/${blog.id}`}>Editar</Link>
              <button onClick={() => deleteBlog(blog.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  </>)
}

export default ShowBlogs
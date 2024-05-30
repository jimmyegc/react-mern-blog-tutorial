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
    <div className='container mx-auto mt-4'>
      <Link to="/create" className="bg-blue-600 text-white border border-l-gray-300 px-4 py-2 hover:text-black">Create</Link>
      <table id="customers" className='border mt-4'>
        <tr className='bg-blue-600 text-white'>
          <th>ID</th>
          <th>Title</th>
          <th>Content</th>
          <th>Actions</th>
        </tr>
        {blogs?.map((blog, index) => (
          <tr key={blog._id}>
            <td>{index + 1}</td>
            <td>{blog.title}</td>
            <td>{blog.content}</td>
            <td className='p-2'>
              <Link to={`/edit/${blog._id}`} className='border-2 border-black px-4 py-2'>Editar</Link>
              <button onClick={() => deleteBlog(blog._id)} className='ml-2 border-2 border-red-600 px-4 py-1'>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  </>)
}

export default ShowBlogs
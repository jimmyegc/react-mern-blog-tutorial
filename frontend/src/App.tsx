import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ShowBlogs from './blog/ShowBlogs'
import { CreateBlog } from './blog/CreateBlog'
import { EditBlog } from './blog/EditBlog'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowBlogs />} ></Route>
          <Route path="/create" element={<CreateBlog />}></Route>
          <Route path="/edit/:id" element={<EditBlog></EditBlog>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

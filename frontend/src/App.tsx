import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ShowBlogs from './blog/ShowBlogs'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowBlogs />} ></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

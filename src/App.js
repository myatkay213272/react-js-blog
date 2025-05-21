import React, { useState } from 'react'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Home from './Components/Home'
import NewPost from './Components/NewPost'
import PostPage from './Components/PostPage'
import About from './Components/About'
import Missing from './Components/Missing'
import Footer from './Components/Footer'
import { Routes, Route, useNavigate } from 'react-router-dom'

const App = () => {

  const [posts,setPosts] = useState(
    [
  {
    id: 1,
    title: "First Post",
    datetime: "2025-05-21 10:00",
    body: "This is the body of the first post."
  },
  {
    id: 2,
    title: "Second Post",
    datetime: "2025-05-21 11:30",
    body: "This is the body of the second post."
  },
  {
    id: 3,
    title: "Third Post",
    datetime: "2025-05-21 13:45",
    body: "This is the body of the third post."
  }
]

  )
    const [search,setSeacrch] = useState('')
    // const [searchResults,setSearchResults] = useState([])

    const navigate = useNavigate()

    const handleDelete = (id)=>{
      const postsList = posts.filter(post=>post.id !== id)
      setPosts(postsList)
      navigate('/')
    }

  return (
    <>
      <Header title="React JS Blog" />
      <Nav search={search} setSeacrch={setSeacrch}/>

      <Routes>
        <Route path="/" element={<Home  posts={posts} setPosts={setPosts}/>} />
        <Route path="/post" element={<NewPost />} />
        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete = {handleDelete}/>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App

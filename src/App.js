import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Home from './Components/Home'
import NewPost from './Components/NewPost'
import PostPage from './Components/PostPage'
import About from './Components/About'
import Missing from './Components/Missing'
import Footer from './Components/Footer'
import { Routes, Route, useNavigate } from 'react-router-dom'
import {format} from 'date-fns'

const App = () => {

  const [posts,setPosts] = useState(
    [
  {
    id: 1,
    title: "First Post",
    datetime: "2025-05-21 10:00 AM",
    body: "This is the body of the first post."
  },
  {
    id: 2,
    title: "Second Post",
    datetime: "2025-05-21 11:30 AM",
    body: "This is the body of the second post."
  },
  {
    id: 3,
    title: "Third Post",
    datetime: "2025-05-21 13:45 PM",
    body: "This is the body of the third post."
  }
]

  )
    const [search,setSearch] = useState('')
    const [searchResults,setSearchResults] = useState([])
    const [postTitle,setPostTitle] = useState('')
    const [postBody,setPostBody] = useState('')
    const navigate = useNavigate()


    useEffect(()=>{

      const filteredResults = posts.filter(post=>
        ((post.body).toLowerCase()).includes(search.toLowerCase())
          || 
        ((post.title).toLowerCase()).includes(search.toLowerCase())
      )
      setSearchResults(filteredResults.reverse())
    },[search,posts])



    const handleDelete = (id)=>{
      const postsList = posts.filter(post=>post.id !== id)
      setPosts(postsList)
      navigate('/')
    }

   const handleSubmit = (e) => {
    e.preventDefault();

    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;

    const datetime = format(new Date(), 'MMM dd,yyy pp');

    const newPost = {
      id,
      title: postTitle,
      datetime,
      body: postBody
    };

    const allPosts = [...posts, newPost];

    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/');
  };


  return (
    <>
      <Header title="React JS Blog" />
      <Nav search={search} setSearch={setSearch}/>

      <Routes>
        <Route path="/" element={<Home  
                                  posts={searchResults} 
                                />} />
        <Route path="/post" element={<NewPost 
                                      handleSubmit={handleSubmit}
                                      postTitle={postTitle} 
                                      setPostTitle={setPostTitle}
                                      postBody={postBody}
                                      setPostBody={setPostBody}
                                    />} />
        <Route path="/post/:id" element={<PostPage 
                                          posts={posts} 
                                          handleDelete={handleDelete}
                                        />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App

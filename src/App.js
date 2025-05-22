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
import apiClient from './api/apiClent'
import EditPost from './Components/EditPost'

const App = () => {

  const [posts,setPosts] = useState([])

    const [search,setSearch] = useState('')
    const [searchResults,setSearchResults] = useState([])
    const [postTitle,setPostTitle] = useState('')
    const [postBody,setPostBody] = useState('')
    const [editTitle,setEditTitle] = useState('')
    const [editBody,setEditBody] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{

      const fetchPosts = async ()=>{
        try{
          const response = await apiClient.get('/post')
          setPosts(response.data)
        }catch(err){
          if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
          }else{
            console.log(`Error : ${err.message}`)
          }
        }
      }

      fetchPosts()

    },[])


    useEffect(()=>{

      const filteredResults = posts.filter(post=>
        ((post.body).toLowerCase()).includes(search.toLowerCase())
          || 
        ((post.title).toLowerCase()).includes(search.toLowerCase())
      )
      setSearchResults(filteredResults.reverse())
    },[search,posts])


   const handleSubmit = async(e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMM dd,yyy pp');
    const newPost = {
      id,
      title: postTitle,
      datetime,
      body: postBody
    };
    try{
      //   "Hey server, here’s a new post. Add it."
      //   "Okay, server gave it back. Let me add this new post to my list of posts."
      const response = await apiClient.post('/post',newPost)
      // console.log(response)
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      navigate('/');
    }catch(err){
      console.log(`Error : ${err.message}`)
    }
  };

    const handleEdit = async(id)=>{
      const datetime = format(new Date(),'MMM dd,yyy pp')
      const updatedPost = {
        id,
        title : editTitle,
        datetime,
        body : editBody
      }

      try{
        const response = await apiClient.put(`/post/${id}`,updatedPost)
        setPosts(posts.map(post=>post.id === id ? {...response.data} : post))
        setEditTitle('')
        setEditBody('')
        navigate('/')
      }catch(err){
        console.log(`Error : ${err.message}`)
      }
    }


    const handleDelete =async (id)=>{
      try{

        const response = await apiClient.delete(`/post/${id}`)
        const postsList = posts.filter(post=>post.id !== id)
        setPosts(postsList)
        navigate('/')

      }catch(err){
      console.log(`Error : ${err.message}`)
      }
    }

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
        <Route path="/edit/:id" element={<EditPost
                                      posts={posts}
                                      handleEdit={handleEdit}
                                      editTitle={editTitle} 
                                      setEditTitle={setEditTitle}
                                      editBody={editBody}
                                      setEditBody={setEditBody}
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

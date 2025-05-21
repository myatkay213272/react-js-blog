import React from 'react'
import NewFeed from './NewFeed'

const Home = ({posts,setPosts}) => {
  return (
    <main>
      {
       posts.length ?(
        <NewFeed posts={posts}/>
       ):(
        <p>No posts to display.</p>
       )

      }
    </main>
  )
}

export default Home
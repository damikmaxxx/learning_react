import c from './MyPosts.module.css';
import Post from './Posts/Post';
import React from 'react'




const MyPosts = (props) => {
  let PostElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
  let newPostElement = React.createRef();

  let onAddPost = () => {
    
    props.addPost()

  }
  let onPostChange = () => {
    let text = newPostElement.current.value
    props.UpdateNewPostText(text)
    

  }
  return (
    <div >
      <div className="writePost">
        My post
        <div>

          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      {PostElements}
    </div>
  )
}


export default MyPosts;

import Post from './Posts/Post';
import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validator/validators';
import { Textarea } from '../../common/FormsControl/FormsControls';

let maxLength10 = maxLengthCreator(10)
const MyPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
              <Field component={Textarea} name={"text"} placeholder={"text"} validate={[required,maxLength10]}></Field>
              <button >Add post</button>
          </form>
}

const MyPostReduxForm = reduxForm({form:"Mypost"})(MyPostForm)

const MyPosts = (props) => {
  let PostElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  const addPost = (value) => {
    props.addPost(value.text)
  }
  return (
    <div >
      <div className="writePost">
        My post
        <div>
        <MyPostReduxForm onSubmit={addPost}/>
        </div>
      </div>
      {PostElements}
    </div>
  )
}


export default MyPosts;
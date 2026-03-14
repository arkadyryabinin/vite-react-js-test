import { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';



function NewPost({ cancel, addPost }) {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  
  function changeTextHandler(event) {
    setText(event.target.value);
  }
  function changeAuthorHandler(event) {
    setAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: text,
      author,
    };
    // console.log(postData);
    addPost(postData);
    cancel();
  }
  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeTextHandler}/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={changeAuthorHandler}/>
        </p>
        <p className={classes.actions}>
          <Link to='..' type="button" >Cancel</Link>
          <button>Submit</button>
        </p>
      </form> 
    </Modal>
  );
}

export default NewPost;
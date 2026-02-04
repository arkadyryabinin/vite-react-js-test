import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function List({ toggleModal, isOpened }) {
  const [posts, setPosts] = useState([]);
  const addPost = (postData) => {
    setPosts((current) => [postData, ...current]);
  }
  const postsList = posts.map((element, index) => (<Post author={element.author} body={element.body} key={index} />));

  return (
    <>
      {
        isOpened && (
          <Modal>
            <NewPost cancel={toggleModal} addPost={addPost} />
          </Modal>
        )
      }
      <ul className={classes.posts}>
        {postsList}
      </ul>
    </>
  )
}

export default List;
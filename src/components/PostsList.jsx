import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function List({ toggleModal, isOpened }) {
  const [state, setState] = useState('');
  
  function changeBodyHandler(event) {
    setState(event.target.value);
  }
  return (
    <>
      {
        isOpened && (
          <Modal>
            <NewPost changeBodyHandler={changeBodyHandler} cancel={toggleModal} />
          </Modal>
        )
      }
      <ul className={classes.posts}>
        <Post author="Arkady" body={state} />
        <Post author="Oxana" body="Hello World" />
      </ul>
    </>
  )
}

export default List;
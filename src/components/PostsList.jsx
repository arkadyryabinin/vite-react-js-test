import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function List({ toggleModal, isOpened }) {
  return (
    <>
      {
        isOpened && (
          <Modal>
            <NewPost cancel={toggleModal} />
          </Modal>
        )
      }
      <ul className={classes.posts}>
        <Post author="Oxana" body="Hello World" />
      </ul>
    </>
  )
}

export default List;
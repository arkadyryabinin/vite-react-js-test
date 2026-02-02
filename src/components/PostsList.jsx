import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.css';

function List() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Arkady" body="Hello World" />
        <Post author="Oxana" body="Hello World" />
      </ul>
    </>
  )
}

export default List;
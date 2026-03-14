import { useLoaderData } from 'react-router-dom';
import Post from './Post';
import Modal from './Modal';
import classes from './PostsList.module.css';

function List() {
  const posts = useLoaderData();
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   async function fetchPosts() {
  //     const response = await fetch('http://localhost:3000/api/posts');
  //     const resData = await response.json();
  //     setPosts(resData.posts);
  //   }
  //   fetchPosts();
  // }, []);
  // const addPost = (postData) => {
  //   fetch('http://localhost:3000/api/posts', {
  //     method: 'POST',
  //     body: JSON.stringify(postData),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   });
  //   setPosts((current) => [postData, ...current]);
  // };
  const postsList = posts.map((element, index) => (<Post author={element.author} body={element.body} key={index} />));

  return (
    <>
      <ul className={classes.posts}>
        {postsList}
      </ul>
    </>
  )
}

export default List;
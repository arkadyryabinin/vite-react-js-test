import { Outlet } from 'react-router-dom';
import PostsList from '../components/PostsList';

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const response = await fetch('http://localhost:3000/api/posts');
  const resData = await response.json();
  return resData.posts;
}
import { useState } from 'react';
import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const toggleModal = () => {
    setIsOpened((prev) => !prev);
  };
  return (
    <>
      <MainHeader toggleModal={toggleModal} />
      <main>
        <PostsList isOpened={isOpened} toggleModal={toggleModal}/>
      </main>
    </>
  );
}

export default App;
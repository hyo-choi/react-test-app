import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAppContext, useAppDispatchContext } from '../hooks/useAppState';

function Posts({ posts }) {
  return (
    <ul>
      { posts.map(post => (
        <li key={post.id}>
          {`${post.id}, ${post.title}`}
        </li>
      ))}
    </ul>
  );
}

function Pagination({ postsPerPage, totalPosts, paginate }) {const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <ul>
          {pageNumbers.map(number => (
            <li key={number}>
              <span onClick={() => paginate(number)}>
                {number}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default function CommunityPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const appStateDispatcher = useAppDispatchContext();
  const { isLoading } = useAppContext();
  const postsPerPage = 10;

  useEffect(() => {
    appStateDispatcher({ type: 'loading' });

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .finally(() => {
        appStateDispatcher({ type: 'init' });
      })
      .then((response) => {
        setPosts(response.data);
        setCurrentPage(1);
      })
      .catch((error) => { appStateDispatcher({
        type: 'error',
        message: error.message,
      })})
    return;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  function currentPosts(posts) {
    return posts.slice(indexOfFirst, indexOfLast);
  }

  return (
    <div>
      <h3>Community</h3>
      { !isLoading &&
        <>
          <Posts posts={currentPosts(posts)} />
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage} />
        </>}
    </div>
  );
}

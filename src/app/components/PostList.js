'use client';
// components/PostList.js
import { useState, useEffect } from 'react';
import { getFirestore, collection, query, orderBy, getDocs } from 'firebase/firestore';
import styles from "../page.module.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const postsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postsData);
    };
    fetchPosts();
  }, [db]);

  return (
    <section id="blog">
      <div className={styles.Blog_wrap}>
        {posts.map(post => (
          <div key={post.id} className={styles.Blog_content}>
            {post.imageURL && <img src={post.imageURL} alt={post.title} />}
            <div className={styles.Blog_text}>
              <p>{post.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostList;

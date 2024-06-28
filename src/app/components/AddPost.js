'use client';
// components/AddPost.js
import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, Timestamp, doc, getDoc } from 'firebase/firestore';
//import { useRouter } from 'next/router';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const auth = getAuth();
  const db = getFirestore();
  //const router = useRouter();

  const handleAddPost = async () => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error('You must be logged in to create a post');

      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (!userDoc.exists() || userDoc.data().role !== 'admin') {
        throw new Error('You do not have permission to create a post');
      }

      await addDoc(collection(db, 'posts'), {
        userID: user.uid,
        title,
        description,
        imageURL,
        createdAt: Timestamp.fromDate(new Date()),
      });
      alert('Post added successfully!');
      //router.push('/'); // Uncomment if using Next.js router to redirect
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Add New Post</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)} placeholder="Image URL" />
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
};

export default AddPost;

'use client';
// components/Signup.js
import { useState } from 'react';
import { auth, db } from '../firebase'; // Ensure the import path is correct
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Add user document to Firestore with a role
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        role: 'user', // Default role is 'user'. Change to 'admin' if necessary.
      });

      alert('Signed up successfully!');
    } catch (error) {
      console.error('Error signing up:', error); // Add logging to see errors
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;

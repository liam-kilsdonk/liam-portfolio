import styles from '../page.module.css'

// pure testing
import Login from '../components/Login';
import Signup from '../components/Signup';
import AddPost from '../components/AddPost';
import PostList from '../components/PostList';
import Header from '../header.js';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Signup />
      <Login />
      <AddPost />
      <PostList />
    </main>
  )
}

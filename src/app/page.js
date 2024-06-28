import styles from './page.module.css'
import Footer from './footer.js'
import Bottom from './bottom.js'
import Line from './line'
import Header from './header.js'
import Landing from './landing.js'
import About from './about'
import Slider from './slider'
import Blog from './blog'

// pure testing
import Login from './components/Login';
import Signup from './components/Signup';
import AddPost from './components/AddPost';
import PostList from './components/PostList';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Landing />
      <Line />
      <About />
      <Line />
      <Blog />
      <Line />
      <Slider />
      <Footer />
      <Bottom />
      // pure testing
      <Signup />
      <Login />
      <AddPost />
      <PostList />
    </main>
  )
}

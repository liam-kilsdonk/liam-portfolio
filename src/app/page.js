import styles from './page.module.css'
import Footer from './footer.js'
import Bottom from './bottom.js'
import Line from './line'
import Header from './header.js'
import Landing from './landing.js'
import About from './about'
import Slider from './slider'
import Blog from './blog'

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
    </main>
  )
}

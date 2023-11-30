import styles from './page.module.css'
import Footer from './footer.js'
import Bottom from './bottom.js'
import Line from './line'
import Header from './header.js'
import Landing from './landing.js'
import About from './about'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Landing />
      <Line />
      <About />
      <Line />
      <Footer />
      <Bottom />
    </main>
  )
}

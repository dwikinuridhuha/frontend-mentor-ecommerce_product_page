import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Lightbox from '../components/Lightbox'
import Main from '../components/Main'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <hr />
      <NavBar />
      <Main />
      <div className="navbar-background"></div>
      <Lightbox />
      <Footer />
    </>
  )
}

export default Home

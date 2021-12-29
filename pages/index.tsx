import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <hr />
      <NavBar />
      <Main />
      
      <Footer />
    </>
  )
}

export default Home

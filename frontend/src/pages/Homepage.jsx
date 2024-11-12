
import '../App.css'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Cont from '../components/Cont'
import Cards from '../components/Cards'
import Raineffect from '../components/Raineffect'
function Homepage() {
  return (
    <>
    <main>
      <Raineffect/>
    <Navbar/>
     <Hero/>
    </main>
    <footer>
    <Cont/>
    <Cards/>
    </footer>
    </>
  )
}

export default Homepage

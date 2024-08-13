import { FC } from "react"
import NavBar from "./Helpers/ComponenteHomeNav"
import Hero from "./Helpers/ComponenteHero"
import Footer from './Footer'
import Services from './Services'

const Home:FC = () =>{
    return(
        <section className=" w-full h-screen bg-[#30244C]">
            <NavBar></NavBar>
            <Hero/>
            <Services/>
            <Footer/>
        </section>
    )
}

export default Home
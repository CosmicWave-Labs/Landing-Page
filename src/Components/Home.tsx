import { FC } from "react"
import NavBar from "./Helpers/ComponenteHomeNav"
import Hero from "./Helpers/ComponenteHero"
import AboutUs from "./AboutUs"
import Footer from './Footer'
import Services from './Services'

const Home:FC = () =>{
    return(
        <section className=" w-full h-screen bg-[#30244C]">
            <NavBar></NavBar>
            <Hero/>
            <AboutUs/>
            <Services/>
            <Footer/>
        </section>
    )
}

export default Home
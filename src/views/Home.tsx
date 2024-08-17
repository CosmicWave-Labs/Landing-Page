import { FC } from "react"
import NavBar from "../Components/Helpers/ComponenteHomeNav"
import Hero from "../Components/Helpers/ComponenteHero"

import {AboutUs,Footer,Projects,Services,FooterBar} from '../Components'

const Home:FC = () =>{
    return(
        <section className=" w-full h-screen bg-[#30244C]">
            <NavBar></NavBar>
            <Hero/>
            <AboutUs/>
            <Services/>
            <Projects/>
            <Footer/>
            <FooterBar/>
        </section>
    )
}

export default Home
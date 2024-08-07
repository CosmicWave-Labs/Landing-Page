import { FC } from "react"
import NavBar from "./Helpers/ComponenteHomeNav"
import Hero from "./Helpers/ComponenteHero"

const Home:FC = () =>{
    return(
        <section className=" w-full h-screen bg-[#30244C]">
            <NavBar></NavBar>
            <Hero/>
        </section>
    )
}

export default Home
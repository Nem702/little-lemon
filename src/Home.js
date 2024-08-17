import React from "react"
import Header from "./header";
import Nav from "./nav";
import Main from "./main";
import Footer from "./footer";
import Testimonials from "./testimonials";
import About from "./About";

const Home = () => {
    return (
        <>
            <Nav />
            <Header />
            <Main />
            <Testimonials />
            <About />
            <Footer />
        </>
    )
}

export default Home;
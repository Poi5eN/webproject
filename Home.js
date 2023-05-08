import React from "react";

// import About from "./About";
// import { Slide } from "react-slideshow-image";
import Slide from './Slide'
// import Contact from "./Contact";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
// import SlideShow from "./SlideShow";


const App = () => {
    return (
        <div className="container">
             <Slide/><br /><br /><br /><hr /><br /><br /><br />
             <Testimonials/>
            {/* <SlideShow/><br /><br /><br /><hr /><br /><br /><br /> */}
            {/* <About /><br /><br /><br /><hr /><br /><br /><br /> */}
            {/* <Contact/> */}
            <Footer/>
        </div>


    )
}


export default App;
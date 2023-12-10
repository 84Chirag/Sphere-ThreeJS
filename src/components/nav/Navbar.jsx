import React,{useEffect} from 'react';
import gsap from 'gsap';
import sitelogo from'/animation-logos_transparent.png'

const Navbar = () => {
    useEffect(() => {
        const navbar = document.querySelector(".navbar");
        const tl = gsap.timeline({defaults: {duration: 1}});
        tl.fromTo(navbar, {y: "-100%"}, {y: "0%"});
    }, []);
    return (
        <nav className="navbar navbar-expand-lg" style={{background:"black",color:"white"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={sitelogo} alt="Sphere" className='logo' />
                    Three JS</a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Create</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Explore</a>
                        </li>
                    </ul>
                </div>
            {/* </div> */}
        </nav>
    )
}

export default Navbar
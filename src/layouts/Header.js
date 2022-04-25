import React from 'react'

function Header() {
  return (
  <>
        <div className="container pt-5 pb-4">
        <div className="row justify-content-between">
            <div className="col-md-8 order-md-last">
                <div className="row">
                    <div className="col-md-6 text-center">
                        {/* <a className="navbar-brand" href="/"><span>Gr</span>Ferramenta</a> */}
                        <img src="images\gr\GR-Logo1.png"></img>
                    </div>
                    <div className="col-md-6 d-md-flex justify-content-end mb-md-0 mb-3">
                    </div>
                </div>
            </div>
            <div className="col-md-4 d-flex">
                <div className="social-media">
                    <p className="mb-0 d-flex">
                        <a href="https://www.facebook.com/grferramenta/" target="_blank" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
                        <a href="https://instagram.com/grferramenta?igshid=YmMyMTA2M2Y=" target="_blank" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                    </p>
                </div>
            </div>
        </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container-fluid">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fa fa-bars"></span> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="about.html" className="nav-link">About us</a></li>
                    <li className="nav-item"><a href="services.html" className="nav-link">Services</a></li>
                    <li className="nav-item"><a href="gallery.html" className="nav-link">Gallery</a></li>
                    <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
                    <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                </ul>
            </div>
            </div>
        </nav>
    </>
  )
}

export default Header
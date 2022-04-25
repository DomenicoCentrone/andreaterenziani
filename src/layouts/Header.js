import React from 'react'

function Header() {
  return (
      
    <div className="header-area">
        <div className="container">
            <div className="header-wrapper">
                <div className="row">
                    <div className="col-lg-3 col-6">
                        <div className="site-logo">
                            <h2>GR Ferramenta</h2>
                            <a data-toggle="tooltip" title="Be-one" href="index.html"></a>
                        </div>
                    </div>
                    <div className="col-6 d-lg-none static text-right">
                        <div className="show-mobile-menu"></div>
                    </div>
                    <div className="col-lg-9 text-right d-none d-lg-block">
                        <nav className="menu-wrapper">
                            <ul className="main-menu" id="mobile-menu">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#feature">Prodotti</a></li>
                                <li><a href="#portfolio">Servizi</a></li>
                                <li><a href="#page">Contatti</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
import React from "react";
import Paquete from "./paquete";
import paquetesApi from "../paquetes.json"

function EditarPaquetes() {
    let paquete = paquetesApi

                  

              

  return (
    <div className="CatalogoPaquetes">
      {/* <!-- ***** Header Area Start//NAVBAR ***** --> */}
      <header className="header-area header-sticky header background-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* <!-- ***** Logo Start ***** --> */}
                <a href="/" className="logo">
                  FAN<em> TUR</em>
                </a>

                {/* <!-- ***** Menu Start ***** --> */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="/">Home</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/#features">Nuestros Servicios</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/#our-classes">Fases</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/#schedule">Conocenos</a>
                  </li>
                  <li>
                    <a href="/CatalogoPaquetes" className="active">
                      Catalogo Paquetes
                    </a>
                  </li>
                  <li className="main-button">
                    <a href="/login">Sign Up</a>
                  </li>
                </ul>
                {/* <a className='menu-trigger'>
                                  <span>Menu</span>
                              </a> */}
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- ***** no navbar ***** --> */}
      <section className="section" id="trainers">
        <div className="container">
          {/* <!-- ***** TITULO ***** --> */}
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h2>
                  EDITAR  <em>PAQUETE</em>
                </h2>
                <img src={require("../assets/images/line-dec.png").default} alt="" />
                <p>
                 Edite paquetes ya creados
                </p>
              </div>
            </div>
          </div>

          <div className="row" id="listado de paquetes">
            
          <div className="col-lg-8" id="paquete1">
                        
                        <div className="movie-item-style-2">
                        <br/>
                            <div className="cuadro-imagen">
                            <p className="rate"><i className="ion-android-star"></i><span>img:</span> url imagen</p><br/>
                            </div>
                            <br/>
                                <div className="mv-item-infor"><br/>
                                    <h6><a href="moviesingle.html" className="paquete-titulo">aca va nombre</a></h6>
                                    <br/><br/>
                                    <p className="rate"><i className="ion-android-star"></i><span>Precio:</span> $ aca va precio</p><br/>
                                    <p className="describe">Hotel: aca va hotel </p><br/>
                                    <p className="run-time"> Avion: aca va avion </p><br/>
                                    <p>Micro: aca va micro</p><br/>
                                    <p>SeguroCovid: aca va seguro covid</p><br/>
                                    <p>Cantidad: aca va cantidad</p><br/>
                                    <p>Eventos: aca va eventos </p>
                                    <br/>
                                    <li className="main-button paquete-boton">
                                        <a href="/AddPaquetes">AÑADIR PAQUETE</a>
                                    </li>
                                    <br/>
                                               
                                </div>
                        </div>
                    
                    </div>                  

            

            
                       
            
          </div>
            
            
              
        </div>
      </section>
    </div>
  );
}

export default EditarPaquetes;

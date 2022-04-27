import React from 'react'

function Azienda() {
  return (
    <div class="working-with-us-area gray-bg">
        <div class="container"> 
            <div class="row">
                <div class="col-md-6 col-12 d-flex align-items-center">
                    <div class="hire-us-content">
                        <div class="section-title">
                            <h2>Chi siamo</h2>
                        </div>
                        <p>Vendita all'ingrosso e al dettaglio di ferramenta, utensileria, macchine da giardinaggio. Vendita, installazione e assistenza di robot rasaerba. Oltre ai comuni articoli di ferramenta trattiamo cuscinetti, bulloneria, cinghie di trasmissione, raccorderia pneumatica, idraulica, articoli anti-infortunistici, materiale per irrigazione di superficie e interrata. Servizio duplicazione chiavi e radiocomandi. Da anni cerchiamo di offrire un servizio completo per le vostre esigenze.</p>
                        <a href="tel:0522861172" class="btn hire-us-btn">Chiamaci</a>
                    </div>
                </div>
                <div class="col-md-6 d-none d-md-block hire-us-img">
                    <div class="hire-us-img">
                        <img src="img\gr\galleria.png" className="img-fluid" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Azienda
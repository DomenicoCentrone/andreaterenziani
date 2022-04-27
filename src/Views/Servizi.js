import React from 'react'

function Servizi() {
  return (
    <div class="bemax-area gray-bg pt-65 pb-25">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center mb-70">
                    <div class="section-title">
                        <h4>I nostri servizi</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-bemax-item d-flex">
                        <div class="item-icon">
                           <a><i class="fa fa-signal"></i></a>
                        </div>
                        <div class="item-content">
                            <h6><a>Duplicazione radiocomanti</a></h6>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-bemax-item d-flex">
                        <div class="item-icon">
                            <a><i class="fa fa-wrench"></i></a>
                        </div>
                        <div class="item-content">
                            <h6><a>Riparazione macchine da giardino</a></h6>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-bemax-item d-flex">
                        <div class="item-icon">
                            <a><i class="fa fa-money-check-alt"></i></a>
                        </div>
                        <div class="item-content">
                            <h6><a>Noleggio attrezzi da giardino</a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Servizi
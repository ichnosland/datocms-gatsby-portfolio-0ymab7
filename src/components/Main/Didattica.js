import React from 'react';

import icnChi from '../../images/chi-icn.png';
import icnDigFirst from '../../images/dig-first-icn.png';

function Didattica() {
  return (
    <div>
      <section id="chisiamo" className="filler">
        <h2>Pionieri della didattica innovativa dal 2011</h2>
        <div className="arrow">
          <div className="arrow-wrap">
            <div className="outer-arrow"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="container row">
          <div className="col col-1-2">
            <img src={icnChi} className="col-icn" alt="" />
            <p>Abbiamo iniziato con il patrocinio dell’ANSAS quando abbiamo lanciato Cicero.</p>
            <p>Nel 2013 abbiamo creato Eugenio e i tutor adattivi oggi presenti su cloudschooling.</p>
            <p>Nel 2015 abbiamo pubblicato la prima versione di Alatin, coinvolgendo 550 classi in quella che nella storia dell’editoria scolastica italiana è la più imponente esperienza di progettazione, sperimentazione e implementazione condivise di uno strumento per docenti e studenti.</p>
          </div>
          <div className="col col-1-2">
            <img src={icnDigFirst} className="col-icn" alt="" />
            <p>Dal 2017, su richiesta di numerosi docenti, abbiamo lanciato la linea Digital First: prodotti che nascono per la
              fruizione su smartphone, corredati da un supporto cartaceo.</p>
            <p><strong>È il contrario di quello che fanno le case editrici tradizionali, perché i giovani non seguono le tradizioni: le superano.</strong></p>
            <p><strong>E noi facciamo in modo che non lascino indietro le cose importanti.</strong></p>
          </div>
        </div>
        <div className="arrow">
          <div className="arrow-wrap">
            <div className="inner-arrow"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Didattica;

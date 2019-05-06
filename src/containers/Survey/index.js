/*
 *
 * Survey
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';

export class Survey extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <header>
          <div className="container">
            <h1 className="seo"><Link to="/"><span>Maieutical Labs</span></Link></h1>
            <div className="menu">
              <Link to="/">Indietro</Link>
            </div>
          </div>
        </header>
        <div className="container paragraph">
          <h1>Accordo relativo alla privacy dei sondaggi proposti da Maieutical Labs</h1>
          <h3>IN QUALI CONDIZIONI SI APPLICA</h3>
          <p>Grazie ai nostri sondaggi, noi di Maieutical Labs (d’ora in poi MLS) entriamo in possesso di dati che ci forniscono i rispondenti. Questo accordo norma il trattamento di quei dati.</p>
          <h4>IMPORTANTE: LEGGI ATTENTAMENTE QUESTA LICENZA PRIMA DI RISPONDERE AL SONDAGGIO</h4>
          <p>Se hai meno di 16 anni, ai sensi del Regolamento Europeo in materia di protezione dei dati personali, devi far leggere questo documento ai tuoi genitori o a chi ne fa le veci.</p>
          <h3>CONDIZIONI DI PRIVACY</h3>
          <p>In accordo con il Regolamento (UE) 2016/679 del Parlamento europeo e del Consiglio del 27 aprile 2016, abbiamo aggiornato la nostra politica sulla privacy rendendola più chiara, snella e trasparente.</p>
          <p>I sondaggi MLS rappresentano uno strumento con cui ottenere in generale opinioni (in varie forme: dal grado di soddisfazione alle richieste di modifica) sulle nostre opere, cartacee e/o digitali.</p>
          <p>A titolo esemplificativo e non esaustivo, i tipi di dati che potremmo raccogliere sono:</p>
          <ol>
            <li>indirizzo email;</li>
            <li>classe e scuola di appartenenza;</li>
            <li>regione della scuola;</li>
            <li>dispositivi informatici usati nell’insegnamento o nello studio;</li>
            <li>opinioni sulle opere.</li>
          </ol>
          <p>MLS si avvale di software terzi per l’espletamento delle proprie funzioni: i sondaggi sono condotti attraverso <Link to="https://it.surveymonkey.com/" target="_blank">SurveyMonkey</Link>.</p>
          <p>Queste informazioni sono inserite manualmente ma potrebbero essere trattate automaticamente (a fine esemplificativo e senza pretesa di esaustività: per estrazione di dati aggregati).</p>

          <p>I principi che regolano la privacy all’interno dei software MLS sono:</p>

          <ol>
            <li>USARE IL O I SOFTWARE SIGNIFICA accettarne le regole e quindi FORNIRE IL CONSENSO AL TRATTAMENTO DEI PROPRI DATI;</li>
            <li>il titolare del trattamento è Maieutical Labs srl, di cui è il legale rappresentante (Responsabile della Protezione dei Dati) il dott. Matteo Boero, che può essere contattato per tutti gli scopi indicati ai punti 7 e 8 attraverso il seguente indirizzo email: <a href="mailto:assistenza@cloudschooling.it">assistenza@cloudschooling.it</a>;</li>
            <li>il trattamento dei dati è limitato alla raccolta di informazioni utili al miglioramento delle opere, dal punto di vista contenutistico, formale, funzionale, promozionale;</li>
            <li>i tipi di informazioni dalla 2 alla 5 potrebbero essere diffusi pubblicamente ma solo in forma aggregata;</li>
            <li>le informazioni non saranno condivise con terzi, in Italia o all’estero;</li>
            <li>i dati saranno conservati per tutto il tempo di vita delle opere di riferimento (ad esempio, le risposte a un sondaggio su Itaca saranno conservate, al massimo, fino a quando l’opera Itaca non verrà tolta dal mercato), ma MLS si riserva il diritto di conservarli, a fine di ricerca scientifica, per un tempo più lungo;</li>
            <li>hai il diritto di chiedere i tuoi dati personali o di chiederne la cancellazione (in entrambi i casi ti assumi piena responsabilità della richiesta, ad esempio i dati, una volta cancellati, sono persi);</li>
            <li>hai inoltre il diritto di opporti al trattamento dei dati (anche se in questo caso basta non rispondere al sondaggio), di revocare il consenso al loro trattamento e di inoltrare un reclamo relativo al trattamento dei dati a un’autorità di controllo;</li>
            <li>MLS si riserva il diritto di modificare in tutto o in parte e in qualsiasi momento la presente Informativa Privacy anche in relazione agli obblighi di legge. Si prega di consultare di volta in volta la versione corrente per la verifica di eventuali modifiche.</li>
          </ol>
          <p>&nbsp;</p>
          <p><small>Ultimo aggiornamento: 15/05/2018.</small></p>
        </div>
      </div>
    );
  }
}

export default Survey;

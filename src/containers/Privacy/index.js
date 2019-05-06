import React from 'react';
import { Link } from 'react-router-dom';

export class Privacy extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
          <h1>Trattamento dei dati personali</h1>
          <p>Aggiornamento relativo a privacy e condizioni di utilizzo dei software marchiati Maieutical Labs.</p>
          <h3>A QUALI SOFTWARE SI APPLICA</h3>
          <p>Questo aggiornamento si applica solo ai software prodotti e marchiati da Maieutical Labs, srl (d’ora in poi MLS): Alatin, Itaca, Argonauta, la classe virtuale Cloudschooling, i tutor Cicero, Eugenio, Miguel, Marcel, Cristoforo, Giotto, Marie, Effi, Hermes, Italo.</p>
          <h4>IMPORTANTE: LEGGI ATTENTAMENTE QUESTA LICENZA PRIMA DI UTILIZZARE IL SOFTWARE</h4>
          <p>Se hai meno di 16 anni, ai sensi del Regolamento Europeo in materia di protezione dei dati personali, devi far leggere questo documento ai tuoi genitori o a chi ne fa le veci.</p>
          <h3>CONDIZIONI DI PRIVACY</h3>
          <p>In accordo con il Regolamento (UE) 2016/679 del Parlamento europeo e del Consiglio del 27 aprile 2016, abbiamo aggiornato la nostra politica sulla privacy rendendola più chiara, snella e trasparente.</p>
          <p>I software MLS permettono di fruire materiale scolastico (teoria ed esercizi) di proprietà di vari editori (Maieutical Labs stessa, Loescher, D’Anna, Zanichelli).</p>
          <p>Per farlo, MLS deve conservare alcuni dati di chi usa i suoi software:</p>
          <ol>
            <li>nome e cognome;</li>
            <li>indirizzo email;</li>
            <li>stato del pagamento;</li>
            <li>classe e scuola di appartenenza;</li>
            <li>informazioni fornite al servizio di assistenza, spontaneamente o su richiesta;</li>
            <li>dati di utilizzo (a fine esemplificativo e senza pretesa di esaustività: giorno e ora di invio delle risposte alle domande, data di ultimo accesso, risposte alle domande);</li>
            <li>contenuti, in forma di testo semplice o file, condivisi attraverso i software (quando possibile).</li>
          </ol>
          <p>In alcuni casi MLS si avvale di software terzi per l’espletamento delle proprie funzioni (ad esempio l’assistenza è erogata attraverso Zendesk; le mailing list sono inviate attraverso MailUp; i sondaggi attraverso SurveyMokey; i contatti con gli utenti sono gestiti grazie a Base; i pagamenti online attraverso Paypal, parte dell’amministrazione interna attraverso Google Drive); in tutti questi casi, le informazioni sono quelle dalla 1 alla 4.</p>
          <p>Inoltre, per il login Maieutical Labs chiede alle case editrici che hanno chiesto la possibilità di un accesso diretto (Loescher, D’Anna e Zanichelli) le seguenti informazioni:</p>
          <ol>
            <li>nome e cognome;</li>
            <li>email;</li>
            <li>tipo di utente (docente, studente, redattore, agente);</li>
            <li>elenco contenuti sbloccati.</li>
          </ol>
          <p>Queste informazioni sono inserite manualmente ma potrebbero essere trattate automaticamente (a fine esemplificativo e senza pretesa di esaustività: per estrazione di dati aggregati).</p>
          <p>I principi che regolano la privacy all’interno dei software MLS sono:</p>
          <ol>
            <li>USARE IL SOFTWARE SIGNIFICA accettarne le regole e quindi FORNIRE IL CONSENSO AL TRATTAMENTO DEI PROPRI DATI;</li>
            <li>il titolare del trattamento è Maieutical Labs srl, di cui è il legale rappresentante (Responsabile della Protezione dei Dati) il dott. Matteo Boero, che può essere contattato per tutti gli scopi indicati ai punti 7 e 8 attraverso il seguente indirizzo email: <a href="mailto:assistenza@cloudschooling.it">assistenza@cloudschooling.it</a>);</li>
            <li>il trattamento dei dati è limitato, per gli editori proprietari dei contenuti, alla supervisione del funzionamento del software e della fruizione dei contenuti stessi;</li>
            <li>i tipi di informazioni dalla 4 alla 7 potrebbero essere diffusi pubblicamente ma solo in forma aggregata;</li>
            <li>le informazioni non saranno condivise con terzi, in Italia o all’estero;</li>
            <li>i dati saranno conservati per tutto il tempo necessario al completamento del ciclo scolastico per cui ci si iscrive, ma MLS si riserva il diritto di conservarli, a fine di ricerca scientifica, per un tempo più lungo;</li>
            <li>hai il diritto di chiedere i tuoi dati personali o di chiederne la cancellazione (in entrambi i casi ti assumi piena responsabilità della richiesta, ad esempio i dati, una volta cancellati, sono persi);</li>
            <li>hai inoltre il diritto di opporti al trattamento dei dati o di revocare il consenso al loro trattamento (poiché il trattamento dei dati è un requisito per il funzionamento dei software, in tali casi dovremo considerare nulla la tua iscrizione, ma non ti restituiremo la quota versata) e di inoltrare un reclamo relativo al trattamento dei dati a un’autorità di controllo;</li>
            <li>tu (o, sei hai meno di sedici anni, i tuoi genitori o chi ne fa le veci) ti assumi la piena responsabilità dei documenti che carichi e in generale dell’utilizzo del software e MLS è sollevata da qualunque responsabilità derivante direttamente o indirettamente dall&apos;uso dei software;</li>
            <li>non sei proprietario o proprietaria del software, ma solo licenziatario o licenziataria, quindi non puoi accedere al codice, modificare e/o distribuire il software e copiare e/o distribuirne parti (per esempio: i contenuti, la grafica, i meccanismi);</li>
            <li>non puoi usare il software per scopi diversi dalla didattica: non puoi usarlo, ad esempio, per trasferire file da un dispositivo all&apos;altro;</li>
            <li>MLS si riserva il diritto di modificare in tutto o in parte e in qualsiasi momento la presente Informativa Privacy anche in relazione agli obblighi di legge. Si prega di consultare di volta in volta la versione corrente per la verifica di eventuali modifiche.</li>
          </ol>
          <p>&nbsp;</p>
          <p><small>Ultimo aggiornamento: 15/05/2018.</small></p>
        </div>
      </div>
    );
  }
}

export default Privacy;

import { IFilterAcordion } from "./VAcordion.model";
import { useTranslation } from "react-i18next";

import classes from "./VAcordion.module.css";



const acordions: IFilterAcordion[] = [
  {
    header: "Quali sono i massimali di costo per gli interventi di domotica?",
    content: (
      <div className={classes["acordionContent"]}>
        <div className={classes["acordionTitle"]}>
          Quali sono i massimali di costo per gli interventi di domotica?
        </div>
        <div>
          L’Allegato I riporta nella tabella 1 i massimali specifici di costo
          per gli interventi sottoposti a dichiarazione del fornitore o
          dell’installatore (ai sensi dell’Allegato A).
        </div>
        <div>
          Per l’installazione di tecnologie di building automation la spesa
          specifica massima ammissibile per la detrazione è fissata in 50,00
          €/m².
        </div>
        <div>
          I costi esposti nella tabella si considerano al netto di IVA,
          prestazioni professionali e opere complementari relative alla
          installazione e alla messa in opera delle tecnologie.
        </div>
      </div>
    ),
  },
  {
    header: "Quali ambiti della domotica possono rientrare nel 110%?",
    content: (
      <div className={classes["acordionContent"]}>
        <div className={classes["acordionTitle"]}>
          Quali ambiti della domotica possono rientrare nel 110%?
        </div>
        <div>
          Possono rientrare nel 110% come interventi trainati tutti gli ambiti
          della domotica che riguardano l’impianto termico dell’edificio e
          contribuiscono al suo controllo e monitoraggio, con particolare
          riferimento alle fasi di distribuzione e di emissione in ambiente di
          caldo e freddo.
        </div>
        <div>
          Inoltre sono presi in considerazione anche la regolazione e il
          controllo di sistemi di schermatura solare e chiusure tecniche
          oscuranti di tipo mobile.
        </div>
        <div>
          Non rientrano nel bonus 110% interventi sul controllo e la gestione
          dell’illuminazione, delle motorizzazioni, videosorveglianza o altri
          dispositivi centralizzati.
        </div>
      </div>
    ),
  },
  {
    header: "Ammissibilità",
    content: (
      <div className={classes["acordionContent"]}>
        <div className={classes["acordionTitle"]}>Ammissibilità</div>
        <div>Sono ammessi alla misura:</div>
        <ul>
          <li>gli interventi energetici ritenuti prioritari (trainanti)</li>
          <li>
            e gli interventi secondari (trainati), quest’ultimi solo se
            realizzati congiuntamente con i primi.
          </li>
        </ul>
        <div>
          Gli interventi energetici trainanti sono quelli di isolamento termico
          di superfici opache oltre il 25% della superficie disperdente, con
          materiali sostenibili, e di sostituzione degli impianti di
          climatizzazione.
        </div>
        <div>
          Quelli trainati sono invece relativi all’installazione di sistemi
          building automation, infissi, schermature solari, scaldacqua a pompa
          di calore, eliminazione delle barriere architettoniche, impianti
          fotovoltaici con sistemi di accumulo, infrastrutture per la ricarica
          di veicoli elettrici.
        </div>
      </div>
    ),
  },
  {
    header: "Criteri",
    content: (
      <div className={classes["acordionContent"]}>
        <div className={classes["acordionTitle"]}>Criteri</div>
        <div>
          I dispositivi automatizzati devono rispettare 3 criteri per essere
          considerati interventi nel campo della cosiddetta “building
          automation”:
        </div>
        <ol>
          <li>
            Il primo criterio prevede che i dispositivi mostrino attraverso
            canali multimediali i consumi energetici, con la fornitura periodica
            dei dati.
          </li>
          <li>
            Il secondo criterio è che i dispositivi mostrino le condizioni di
            funzionamento correnti e la temperatura di regolazione degli
            impianti.
          </li>
          <li>
            Il terzo criterio è che i dispositivi consentano l’accensione, lo
            spegnimento e la programmazione settimanale degli impianti da
            remoto.
          </li>
        </ol>
      </div>
    ),
  },
];

export default acordions;

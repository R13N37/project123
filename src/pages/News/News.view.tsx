import React from "react";

import Navbar from "../../components/Navbar/Navbar";

import classes from "./News.module.css";
import img1 from "../../assets/images/Termostati.png";
import img2 from "../../assets/images/Supervisione.png";
import img3 from "../../assets/images/Superbonus.png";
import img4 from "../../assets/images/vimar.png";
import img5 from "../../assets/images/Superbonus110.png";
import img6 from "../../assets/images/Bticino.png";
import img7 from "../../assets/images/design.png";
import img8 from "../../assets/images/EkinexSerieFF.png";
import img9 from "../../assets/images/EkinexSerieFF.png";
import img10 from "../../assets/images/Basalte.png";

const NewsView = () => {
  return (
    <div className={classes["mainContainer"]}>
      <Navbar></Navbar>
      <div class="container">
        <div className={classes["headerContent"]}>
          <div class="col-lg-8">
            <div class="inner-heading text-center">
              <div class="mt-4">
                <h1 className={classes["text"]}>NEWS</h1>
                <p className={classes["paragraph"]}>HOME..NEWS</p>
              </div>
            </div>

            <div class="heading-bottom-icon d-flex justify-content-center text-center"></div>
          </div>
        </div>

        <div className="">
          <div className={classes["gridContainer"]}>
            <div class={classes["gallery"]}>
              <div className={classes["pageLeftContent"]}>
                <div className={classes["groupItem"]}>
                  <div>
                    <div className={classes["imageContainer"]}>
                      <img className={classes["image"]} src={img1} />
                    </div>
                    <div className={classes["textContainer"]}>
                      <div className={classes["textTitle"]}>Blueface</div>
                      <p className={classes["contentText"]}>
                        Il termostato Airzone Blueface con tecnologia touch si
                        caratterizza per il suo design moderno ed elegante.
                      </p>
                    </div>
                    <div class="d-flex align-items-center"></div>
                  </div>

                  <div>
                    <div className={classes["imageContainer"]}>
                      <img className={classes["image"]} src={img2} />
                    </div>
                    <div className={classes["textContainer"]}>
                      <div className={classes["textTitle"]}>
                        ThinKnx – Supervisione
                      </div>
                      <p className={classes["contentText"]}>
                        Vimar offre soluzioni, semplici e versatili, per il
                        controllo del riscaldamento e raffrescamento degli
                        ambienti.
                      </p>
                    </div>
                    <div class="d-flex align-items-center"></div>
                  </div>

                  <div>
                    <div className={classes["imageContainer"]}>
                      <img className={classes["image"]} src={img3} />
                    </div>
                    <div className={classes["textContainer"]}>
                      <div className={classes["textTitle"]}>
                        Superbonus 110% – Novità
                      </div>
                      <p className={classes["contentText"]}>
                        Superbonus 110% – nuova legge di Bilancio 2022 – nuovo
                        orizzonte temporale
                      </p>
                    </div>
                    <div class="d-flex align-items-center"></div>
                  </div>
                </div>

                <div className={classes["groupItem"]}>
                  <div>
                    <div className={classes["imageContainer"]}>
                      <img className={classes["image"]} src={img4} />
                    </div>
                    <div className={classes["textContainer"]}>
                      <div className={classes["textTitle"]}>
                        Vimar Smart Clima
                      </div>
                      <p className={classes["contentText"]}>
                        Vimar offre soluzioni, semplici e versatili, per il
                        controllo del riscaldamento e raffrescamento degli
                        ambienti.
                      </p>
                    </div>
                    <div class="d-flex align-items-center"></div>
                  </div>

                  <div>
                    <div className={classes["imageContainer"]}>
                      <img className={classes["image"]} src={img5} />
                    </div>
                    <div className={classes["textContainer"]}>
                      <div className={classes["textTitle"]}>
                        Superbonus 110%
                      </div>
                      <p className={classes["contentText"]}>
                        Fornitura e programmazione dei dispositivi knx
                        rientranti nel Superbonus 110
                      </p>
                    </div>
                    <div class="d-flex align-items-center"></div>
                  </div>

                  <div>
                    <div className={classes["imageContainer"]}>
                      <img className={classes["image"]} src={img6} />
                    </div>
                    <div className={classes["textContainer"]}>
                      <div className={classes["textTitle"]}>
                        Bticino Domotica knx
                      </div>
                      <p className={classes["contentText"]}>
                        Finiture di pregio e un aspetto elegante e minimalista.
                        Un oggetto di design, ispirato dall’ architettura
                        contemporanea, in grado di arredare con stile la casa.
                      </p>
                    </div>
                    <div class="d-flex align-items-center"></div>
                  </div>
                </div>

                <div className={classes["groupItem"]}>
                  <div>
                    <div className={classes["imageContainer"]}>
                      <img className={classes["image"]} src={img7} />
                    </div>
                    <div className={classes["textContainer"]}>
                      <div className={classes["textTitle"]}>Design</div>
                      <p className={classes["contentText"]}>
                        Nascono nuovi modi di abitare il proprio spazio che
                        diviene ‘intelligente’ ma soprattutto confortevole.
                      </p>
                    </div>
                    <div class="d-flex align-items-center"></div>
                  </div>

                  <div>
                    <div className={classes["imageContainer"]}>
                      <img className={classes["image"]} src={img8} />
                    </div>
                    <div className={classes["textContainer"]}>
                      <div className={classes["textTitle"]}>
                        Ekinex FF Flank
                      </div>
                      <p className={classes["contentText"]}>
                        Finiture di pregio e un aspetto elegante e minimalista.
                        Un oggetto di design, ispirato dall’ architettura
                        contemporanea, in grado di arredare con stile la casa.
                      </p>
                    </div>
                    <div class="d-flex align-items-center"></div>
                  </div>

                  <div>
                    <div className={classes["imageContainer"]}>
                      <img className={classes["image"]} src={img9} />
                    </div>
                    <div className={classes["textContainer"]}>
                      <div className={classes["textTitle"]}>
                        Ekinex Serie FF
                      </div>
                      <p className={classes["contentText"]}>
                        Finiture di pregio e un aspetto elegante e minimalista.
                        Un oggetto di design, ispirato dall’ architettura
                        contemporanea, in grado di arredare con stile la casa.
                      </p>
                    </div>
                    <div class="d-flex align-items-center"></div>
                  </div>
                </div>

                <div className={classes["groupItem"]}>
                  <div>
                    <div className={classes["imageContainer"]}>
                      <img className={classes["image"]} src={img10} />
                    </div>
                    <div className={classes["textContainer"]}>
                      <div class="fw-bold">Chopin Basalte</div>
                      <p className={classes["contentText"]}>
                        Finiture di pregio e un aspetto elegante e minimalista.
                        Un oggetto di design, ispirato dall’ architettura
                        contemporanea, in grado di arredare con stile la casa..
                      </p>
                    </div>
                    <div class="d-flex align-items-center"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes["pageRightContent"]}>
              <div className={classes["rightTitle"]}>ULTIMI ARTICOLI</div>
              <div>.................</div>
              <div className={classes["article"]}>
                <div className={classes["containerImgTextLeft"]}>
                  <img src={img1} alt="" />
                  <a className={classes["textAlign"]}>Blueface</a>
                </div>
                <div className={classes["containerImgTextLeft"]}>
                  <img src={img2} alt="" />
                  <a className={classes["textAlign"]}>ThinKnx – Supervisione</a>
                </div>
                <div className={classes["containerImgTextLeft"]}>
                  <img src={img3} alt="" />
                  <a className={classes["textAlign"]}>
                    Superbonus 110% – Novità
                  </a>
                </div>
                <div className={classes["containerImgTextLeft"]}>
                  <img src={img4} alt="" />
                  <a className={classes["textAlign"]}>Vimar Smart Clima</a>
                </div>
                <div className={classes["containerImgTextLeft"]}>
                  <img src={img5} alt="" />
                  <a className={classes["textAlign"]}>Superbonus 110%</a>
                </div>
              </div>

              <div className={classes["tagContainer"]}>
                <div className={classes["tagText"]}>TAG</div>
                <div>.................</div>

                <div className={classes["tags"]}>
                  <div className={classes["tagsGroup"]}>
                    <a href="#">basalte</a>
                    <a href="#">bticino</a>
                    <a href="#">design</a>
                  </div>
                  <div className={classes["tagsGroup"]}>
                    <a href="#">ekinex</a>
                    <a href="#">superbonus</a>
                    <a href="#">thinknx</a>
                  </div>
                  <div className={classes["tagsGroup"]}>
                    <a href="#">vimar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsView;

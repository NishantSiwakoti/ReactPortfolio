import React, { useState, useEffect } from "react";
import moment from "moment";
import Divss from "../Components/Divss";
import wi from "../assets/images/countries/wi.png";
import nep from "../assets/images/countries/nep.png";
import ned from "../assets/images/countries/ned.png";
import usa from "../assets/images/countries/usa.png";
import png from "../assets/images/countries/pn.png";
import ind from "../assets/images/countries/ind.png";
import pak from "../assets/images/countries/pak.png";
import ban from "../assets/images/countries/ban.png";
import sri from "../assets/images/countries/sri.png";
import ire from "../assets/images/countries/ire.png";
import oman from "../assets/images/countries/oman.png";
import sa from "../assets/images/countries/sa.png";
import aus from "../assets/images/countries/aus.png";
import nz from "../assets/images/countries/nz.png";
import ug from "../assets/images/countries/ug.png";
import eng from "../assets/images/countries/eng.png";
import afg from "../assets/images/countries/afg.png";
import can from "../assets/images/countries/can.png";
import nam from "../assets/images/countries/nam.png";
import pn from "../assets/images/countries/pn.png";

const TwoMatch = () => {
  return (
    <>
      <section>
        <Div
          logo1={wi}
          team1="WI"
          logo2={pn}
          team2="PNG"
          date="2024/06/02"
          startTime="6:00 AM"
        />
        <Div
          logo1={nep}
          team1="Nepal"
          logo2={ned}
          team2="Netherlands"
          match="Match 2"
          date="2024/06/03"
          startTime="8:00 PM"
        />
      </section>
    </>
  );
};

export default TwoMatch;

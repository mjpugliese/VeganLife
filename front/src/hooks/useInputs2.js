import { useState } from "react";

const useInputs = () => {
  const [inputs, setInputs] = useState({
    domingoAm1:"",
    domingoAm2:"",
    domingoPm1:"",
    domingoPm2:"",
    domingoAm1c:"",
    domingoAm2c:"",
    domingoPm1c:"",
    domingoPm2c:"",
    lunesAm1:"",
    lunesAm2:"",
    lunesPm1:"",
    lunesPm2:"",
    lunesAm1c:"",
    lunesAm2c:"",
    lunesPm1c:"",
    lunesPm2c:"",
    martesAm1:"",
    martesAm2:"",
    martesPm1:"",
    martesPm2:"",
    martesAm1c:"",
    martesAm2c:"",
    martesPm1c:"",
    martesPm2c:"",
    miercolesAm1:"",
    miercolesAm2:"",
    miercolesPm1:"",
    miercolesPm2:"",
    miercolesAm1c:"",
    miercolesAm2c:"",
    miercolesPm1c:"",
    miercolesPm2c:"",
    juevesAm1:"",
    juevesAm2:"",
    juevesPm1:"",
    juevesPm2:"",
    juevesAm1c:"",
    juevesAm2c:"",
    juevesPm1c:"",
    juevesPm2c:"",
    viernesAm1:"",
    viernesAm2:"",
    viernesPm1:"",
    viernesPm2:"",
    viernesAm1c:"",
    viernesAm2c:"",
    viernesPm1c:"",
    viernesPm2c:"",
    sabadoAm1:"",
    sabadoAm2:"",
    sabadoPm1:"",
    sabadoPm2:"",
    sabadoAm1c:"",
    sabadoAm2c:"",
    sabadoPm1c:"",
    sabadoPm2c:"",

  });
  const changeInput = (key, value) => setInputs({ ...inputs, [key]: value });
  const handleChange = (type) => (text) => changeInput(type, text);

  return [inputs, handleChange];
};

export default useInputs;

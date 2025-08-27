import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import Error from "./Error";
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";
import axios from "axios";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = ({ guardarMoneda, guardarCriptomoneda }) => {
  // state of the cryptocurrency list
  const [listacripto, guardarCriptomonedas] = useState([]);
  const [error, guardarError] = useState(false);

  const MONEDAS = [
    { codigo: "USD", nombre: "United States Dollar" },
    { codigo: "MXN", nombre: "Mexican Peso" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Pound Sterling" },
  ];

  // Use useMoneda
  const [moneda, SelectMonedas] = useMoneda(
    "Choose your Currency",
    "",
    MONEDAS
  );

  // Use useCriptomoneda
  const [criptomoneda, SelectCripto] = useCriptomoneda(
    "Choose your Cryptocurrency",
    "",
    listacripto
  );

  // Execute API call
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const resultado = await axios.get(url);

      guardarCriptomonedas(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  // when the user submits
  const cotizarMoneda = (e) => {
    e.preventDefault();

    // validate if both fields are filled
    if (moneda === "" || criptomoneda === "") {
      guardarError(true);
      return;
    }

    // pass the data to the main component
    guardarError(false);
    guardarMoneda(moneda);
    guardarCriptomoneda(criptomoneda);
  };

  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje="All fields are required" /> : null}

      <SelectMonedas />

      <SelectCripto />

      <Boton type="submit" value="Calculate" />
    </form>
  );
};

export default Formulario;

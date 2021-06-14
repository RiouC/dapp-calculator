import React from "react";
import Dapp from "./Dapp";
import { useContract } from "web3-hooks";
import { calculatorAddress, calculatorAbi } from "./contracts/Calculator";
import "./App.css";

export const CalculatorContext = React.createContext(null);

const App = () => {
  const calculator = useContract(calculatorAddress, calculatorAbi);
  return (
    <CalculatorContext.Provider value={calculator}>
      <Dapp />
    </CalculatorContext.Provider>
  );
};

export default App;

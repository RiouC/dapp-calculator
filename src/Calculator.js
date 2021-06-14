import { useState, useEffect, useContext } from "react";
import { Web3Context } from "web3-hooks";
import { CalculatorContext } from "./App";

function Calculator() {
  const [web3State] = useContext(Web3Context);
  const calculator = useContext(CalculatorContext);

  const [op1, setOp1] = useState(0);
  const [op2, setOp2] = useState(0);
  const [res, setRes] = useState(0);

  const handleClickAdd = async () => {
    try {
      const res = await calculator.add(Number(op1), Number(op2));
      // await tx.wait();
      console.log("add transaction done");
      setRes(res.toString());
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickSub = async () => {
    try {
      const res = await calculator.sub(op1, op2);
      // await tx.wait();
      console.log("sub transaction done");
      setRes(res.toString());
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickMul = async () => {
    try {
      const res = await calculator.mul(op1, op2);
      // await tx.wait();
      console.log("mul transaction done");
      setRes(res.toString());
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickDiv = async () => {
    try {
      const res = await calculator.div(op1, op2);
      // await tx.wait();
      console.log("div transaction done");
      setRes(res.toString());
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickMod = async () => {
    try {
      const res = await calculator.mod(op1, op2);
      // await tx.wait();
      console.log("mod transaction done");
      setRes(res.toString());
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // si myContract est pas null alors
    if (calculator) {
      const cb = (op1, op2, res) => {
        console.log("res recu depuis l'event: ${res}");
        setRes(res.toString());
        // call back qui sera executée lorsque l'event sera émit
        // faire quelque chose avec param1 param2 ou param3
      };
      // ecouter sur l'event myEvent
      calculator.on("Add", cb);
      return () => {
        // arreter d'ecouter lorsque le component sera unmount
        calculator.off("Add", cb);
      };
    }
  }, [calculator]);

  return (
    // Si on veut return une expression js, il faut quand même la mettre dans un component
    // Ici, il faut donc mettre {counter && ... ? ... : ...} à l'intérieur d'un fragment par exemple
    <>
      {calculator && web3State.chainId === 4 ? (
        <>
          <h1>Calculator</h1>
          <p>calculator: {res.toString()}</p>

          <label htmlFor="operand1">Op 1: </label>
          <input
            id="operand1"
            type="text"
            onChange={(e) => setOp1(e.target.value)}
            className="mb-3"
          />
          <br />
          <label htmlFor="operand2">Op 2: </label>
          <input
            id="operand2"
            type="text"
            onChange={(e) => setOp2(e.target.value)}
          />
          <br />
          <div className="mt-3 d-flex gap-2">
            <button className="btn btn-primary" onClick={handleClickAdd}>
              +
            </button>
            <button className="btn btn-primary" onClick={handleClickSub}>
              -
            </button>
            <button className="btn btn-primary" onClick={handleClickMul}>
              *
            </button>
            <button className="btn btn-primary" onClick={handleClickMul}>
              /
            </button>
            <button className="btn btn-primary" onClick={handleClickMul}>
              %
            </button>
          </div>
          <p>Res: {res}</p>
        </>
      ) : (
        <p>Can't init contract</p>
      )}
    </>
  );
}

export default Calculator;

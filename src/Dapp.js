import { useContext, useState } from "react";
import { Web3Context } from "web3-hooks";
import { ethers } from "ethers";
import Calculator from "./Calculator";

function Dapp() {
  const [web3State, login] = useContext(Web3Context);
  const [ethBalance, setEthBalance] = useState(0);
  const [address, setAddress] = useState(ethers.constants.AddressZero);
  const [eth2Send, setEth2Send] = useState(0);

  const handleClickGetBalance = async () => {
    try {
      const balance = await web3State.provider.getBalance(address);
      setEthBalance(ethers.utils.formatEther(balance));
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickSend = async () => {
    const weiAmount = ethers.utils.parseEther(eth2Send);
    try {
      const tx = await web3State.signer.sendTransaction({
        to: address,
        value: weiAmount,
      });
      await tx.wait();
      console.log("TX MINED");
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickDonate = async () => {
    // TODO: check signer != 0x88b8BB96Bfe88eC22Db3802d553439E413F5f60D
    const weiAmount = ethers.utils.parseEther(eth2Send);
    try {
      const tx = await web3State.signer.sendTransaction({
        to: "0x88b8BB96Bfe88eC22Db3802d553439E413F5f60D",
        value: weiAmount,
      });
      await tx.wait();
      console.log("TX MINED");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <aside className="m-5">
        <p>MetaMask installed: {web3State.isMetaMask ? "yes" : "no"}</p>
        <p>Web3: {web3State.isWeb3 ? "injected" : "no-injected"}</p>
        <p>logged: {web3State.isLogged ? "yes" : "no"}</p>
        {!web3State.isLogged && (
          <>
            <button onClick={login}>login</button>
          </>
        )}
        <p>Network id: {web3State.chainId}</p>
        <p>Network name: {web3State.networkName}</p>
      </aside>
      <div className="container mt-5">
        <p>account: {web3State.account}</p>
        <p>Balance: {web3State.balance}</p>
        <hr />
        <Calculator />
        <hr />
        <label htmlFor="donate">Amount</label>
        <input
          id="donate"
          type="text"
          placeholder="amount"
          value={eth2Send}
          onChange={(event) => setEth2Send(event.target.value)}
        />
        <button onClick={handleClickDonate}>Donate</button>
      </div>
    </>
  );
}

export default Dapp;

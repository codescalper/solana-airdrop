import React, { useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import "./style.css";

function SolAirdrop() {
  const [solanaPublicKey, setSolanaPublicKey] = useState("");
  const [txHash, setTxHash] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    // connection
    const connection = new Connection("https://api.devnet.solana.com");
    let publicKeyObject;
    try {
      publicKeyObject = new PublicKey(solanaPublicKey);
    } catch (err) {
      alert("Invalid Solana address. Please try again.");
      return;
    }
    // 1e9 lamports = 10^9 lamports = 1 SOL
    let txhash = await connection.requestAirdrop(publicKeyObject, 1e9);
    setTxHash(txhash);
  };

  // Move console.log statement outside of JSX block
  console.log(`Transaction Hash: ${txHash}`);

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <label htmlFor="search">Solana Airdrop to Devnet</label>
        <p className="warning">
          <b>This tool does *NOT* give real $SOL or Solana tokens.</b>
        </p>
        <input
          type="text"
          name="search"
          placeholder="Enter Solana address.."
          id="search"
          value={solanaPublicKey}
          onChange={(e) => setSolanaPublicKey(e.target.value)}
        />
        <button type="submit">Airdrop</button>
      </form>
    </div>
  );
}

export default SolAirdrop;

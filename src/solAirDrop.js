import React, { useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";

function SolAirdrop() {
  const [solanaPublicKey, setSolanaPublicKey] = useState("");
  const [txHash, setTxHash] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    // connection
    const connection = new Connection("https://api.devnet.solana.com");
    let PublicKeyObject = new PublicKey(solanaPublicKey);
    // 1e9 lamports = 10^9 lamports = 1 SOL
    let txhash = await connection.requestAirdrop(PublicKeyObject, 1e9);
    setTxHash(txhash);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="search">Enter Sol Token</label>
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
      {txHash && <p>Transaction Hash: {txHash}</p>}
    </div>
  );
}

export default SolAirdrop;

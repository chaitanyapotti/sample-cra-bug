import "./App.css";

import { Web3AuthProvider } from "./web3auth";

function App() {
  return (
    <>
      <Web3AuthProvider />
      Hi inside app
    </>
  );
}

export default App;

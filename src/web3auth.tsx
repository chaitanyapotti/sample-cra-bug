import React, { FC, useEffect } from "react";
//@ts-ignore
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
//@ts-ignore
import { Web3AuthNoModal } from "@web3auth/no-modal";
//@ts-ignore
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import {
  NO_MODAL_CHAIN_CONFIG,
  WEB3_AUTH_CLIENT_ID,
  WEB3_AUTH_NETWORK,
} from "./utils/web3auth";

export const Web3AuthProvider: FC = () => {
  const initWeb3Auth = async () => {
    const web3auth = new Web3AuthNoModal({
      clientId: WEB3_AUTH_CLIENT_ID as string,
      chainConfig: NO_MODAL_CHAIN_CONFIG,
      web3AuthNetwork: WEB3_AUTH_NETWORK as any,
    });
    const privateKeyProvider = new EthereumPrivateKeyProvider({
      config: { chainConfig: NO_MODAL_CHAIN_CONFIG as any },
    });
    const openloginAdapter = new OpenloginAdapter({
      adapterSettings: {
        clientId: WEB3_AUTH_CLIENT_ID,
        network: WEB3_AUTH_NETWORK as any, // Optional - Provide only if you haven't provided it in the Web3Auth Instantiation Code
        uxMode: "popup",
        whiteLabel: {
          appName: "Fightout",
          appUrl: "https://web3auth.io",
          logoLight: "https://web3auth.io/images/web3auth-logo.svg",
          logoDark: "https://web3auth.io/images/web3auth-logo---Dark.svg",
          defaultLanguage: "en", // en, de, ja, ko, zh, es, fr, pt, nl
          mode: "dark", // whether to enable dark mode. defaultValue: auto
          theme: {
            primary: "#00D1B2",
          },
          useLogoLoader: true,
        },
      },
      loginSettings: { mfaLevel: "none" },
      privateKeyProvider,
    });
    web3auth.configureAdapter(openloginAdapter);
    await web3auth.init();
  };

  useEffect(() => {
    initWeb3Auth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

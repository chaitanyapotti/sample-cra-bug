import { CHAIN_NAMESPACES, ChainNamespaceType } from "@web3auth/base";

const {
  REACT_APP_CHAIN_ID_HEX,
  REACT_APP_WEB3AUTH_CLIENT_ID,
  REACT_APP_NETWORK_RPC_URL,
  REACT_APP_WEB3AUTH_NETWORK_TYPE,
} = process.env;

export const CHAIN_ID = REACT_APP_CHAIN_ID_HEX;

export const WEB3_AUTH_CLIENT_ID = REACT_APP_WEB3AUTH_CLIENT_ID;

export const WEB3_AUTH_RPC_URL = REACT_APP_NETWORK_RPC_URL;
export const WEB3_AUTH_NETWORK = REACT_APP_WEB3AUTH_NETWORK_TYPE;

export const NO_MODAL_CHAIN_CONFIG = {
  chainNamespace: CHAIN_NAMESPACES.EIP155 as ChainNamespaceType,
  chainId: CHAIN_ID as string,
  rpcTarget: WEB3_AUTH_RPC_URL as string,
};

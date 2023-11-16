"use client";

import { BLOCKCHAINS_DATA, WalletProvider } from "@coin98/wallet-adapter-react";
import { WalletModalProvider } from "@coin98/wallet-adapter-react-ui";
import { Coin98WalletAdapter } from "@coin98/wallet-adapter-coin98";
import { MetaMaskWalletAdapter } from "@coin98/wallet-adapter-metamask";

interface ContainerProps {
  children: React.ReactNode;
}

const Provider: React.FC<ContainerProps> = ({ children }) => {
  const enables = [BLOCKCHAINS_DATA.ethereum];
  const wallets = [Coin98WalletAdapter as any, MetaMaskWalletAdapter];
  return (
    <WalletProvider wallets={wallets} enables={enables} autoConnect>
      <WalletModalProvider>{children}</WalletModalProvider>
    </WalletProvider>
  );
};

export default Provider;

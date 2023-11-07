// modal.tsx
"use client";

import dynamic from "@/node_modules/next/dynamic";
import {
  bscTest,
  ChainInfo,
  evmChains,
} from "@coin98t/wallet-adapter-react-ui";

const WalletModalC98 = dynamic(
  async () => (await import("@coin98t/wallet-adapter-react-ui")).WalletModalC98,
  {
    ssr: false,
  }
);

const NinetyEightAdapterModal = () => {
  const defaultChains: ChainInfo[] = [...evmChains]; // multi-chain
  return <WalletModalC98 isC98Theme enableChains={defaultChains} />;
};

export default NinetyEightAdapterModal;

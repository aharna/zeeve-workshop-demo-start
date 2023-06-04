# NFT Minting DApp

This is a simple NFT (Non-Fungible Token) Minting DApp (Decentralized Application) that allows users to create and mint their own unique NFTs on the blockchain. NFTs have gained popularity for their ability to represent ownership and provenance of digital assets.

The DApp provides a user-friendly interface where users can connect their wallets and mint NFTs using predefined or custom metadata. It leverages the power of blockchain technology, ensuring the immutability and traceability of each minted NFT.


## Prerequisites

Before running the dApp, make sure you have the following:

- A compatible web browser (Chrome, Firefox, Brave, etc.).
- A cryptocurrency wallet (e.g., MetaMask) installed and configured with the desired blockchain network (we will use Polygon mumbai).
- [Setting up Zeeve RPC endpoints](https://github.com/aharna/zeeve-workshop-demo-start/blob/main/RPC.md)

## Installation

To install and run the NFT Minting DApp locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/aharna/zeeve-workshop-demo-start
   ```

2. Create .env file and enter http url and the private key. 

```shell
ZEEVE_HTTP_URL= enter your http url here
PRIVATE_KEY= enter your private key from your wallet
```
3. Run the following commands in the Terminal:

```shell
npm i
cd my-nft-dapp
npm i
cd ..
npx hardhat run scripts/deploy.js --network polygon_mumbai
```
4. Add abi and deployed smart contract address.
5. Run the following commands:
```shell
cd my-nft-dapp
npm run dev
```

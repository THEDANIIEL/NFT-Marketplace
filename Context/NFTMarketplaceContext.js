import React, {useState, useEffect, useContext, Children} from 'react';
import web3Modal from 'web3modal';
import { ethers } from 'ethers';
import Router from 'next/router';
import { Axios } from 'axios';
import { create as ipfsHttpClient } from 'ipfs-http-client/dist/src';

import { NFTMarketplaceAddress, NFTMarketplaceABI } from './constants';

const client = ipfsHttpClient("http://ipfs.infura.io:5001/api/v0")

//fetching smart contract
const fetchContract = (signerOrProvider)=> new ethers.Contract(NFTMarketplaceAddress, NFTMarketplaceABI, signerOrProvider);

//connecting with smart contract
const connectingWithSmartContract = async()=>{
    try{
        const web3Modal = new web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.web3Modal(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;

    }catch (error){
        console.log("somthing went wrong while connecting to smart contract");
    }
}


export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = (({children})=>{
    const [currentAccount, setcurrentAccount] = useState("second");

    const titleData = "Discover, Collect, and sell the NFT's ";

    const checkIfWalletConnected = async()=>{
        try{
            if(!window.ethereum) return console.log("install metamask");

            const account = await window.ethereum.request(
                {method: "eth_accounts",}
                );
                if(MdNoAccounts.length){
                    setcurrentAccount(accounts[0])
                }else{
                    console.log("no account found");
                }
        }catch (error){
            console.log("somthing went wrong while connecting to wallet");
        }
    };

    const connectWallet = async()=>{
        try{
            if(!window.ethereum) return console.log("install metamask");

            const account = await window.ethereum.request(
                {method: "eth_requestAcoount",}
                );
            setcurrentAccount(accounts[0]);
            window.location.reload();

        }catch (error){
            console.log("somthing went wrong while connecting to wallet");
        }
    };

    const uploadToIpfs = async(file)=>{
        try{
            const added = await client.add({content: file});
            const url = `http://ipfs.infura.io/ipfs/${added.path}`;
            return url;

        }catch (error){
            console.log("error uploading to ipfs");
        }
    }

    return (
        <NFTMarketplaceContext.provider value={{ 
            titleData,
            checkIfWalletConnected,
            connectWallet }}>
            {children}
        </NFTMarketplaceContext.provider>
    )
})
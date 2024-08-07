import { global } from "../config/global";
import { formatNumber } from "../utils/utils";

export default function StatusItem(props) {
    return (
        < div className="w-full">
            <div className="w-full mx-auto gap-4 flex items-center justify-between text-center px-1 py-3">
                <div className="rounded-md border border-[#8d5f45] bg-black  lg:w-1/2 w-full flex lg:flex-col flex-row lg:justify-center justify-between items-center text-center px-2 py-3">
                    <div className="flex flex-col items-center">
                        <label className="text-3xl sm:text-4xl font-bold block text-white">
                            {`$${props.currentTokenPrice ? formatNumber(props.currentTokenPrice) : 0}`}
                        </label>
                        <label className="text-1xl sm:text-3xl font-bold block text-white">
                            {`(${formatNumber(props.currentTokenPrice * props.plsAmountFor1USD)} ${global.TOKENS[0].name})`}
                        </label>
                    </div>
                    <label className="mt-2 font-bold uppercase text-[#8d5f45] text-xl">{`${global.PROJECT_TOKEN.name} Price`}</label>
                </div>
                <div className="rounded-md border border-[#8d5f45] bg-black  lg:w-1/2 w-full flex lg:flex-col flex-row lg:justify-center justify-between items-center text-center px-2 py-3">
                    <div className="flex flex-col items-center">
                        <label className="text-3xl sm:text-4xl font-bold block text-white">
                            {`$${props.totalFundsInUSD ? formatNumber(props.totalFundsInUSD) : 0}`}
                        </label>
                        <label className="text-1xl sm:text-3xl font-bold block text-white">
                            {`(${formatNumber(props.totalFundsInUSD * props.plsAmountFor1USD)} ${global.TOKENS[0].name})`}
                        </label>
                    </div>
                    <label className="mt-2 font-bold uppercase text-[#8d5f45] text-xl">Total Raised</label>
                </div>
            </div>
            <div className="w-full mx-auto gap-4 flex lg:flex-row flex-col items-center justify-between text-center px-1 py-3">
                <div className="rounded-md border border-[#8d5f45] bg-black  lg:w-1/2 w-full flex lg:flex-col flex-row lg:justify-center justify-between items-center text-center px-2 py-3">
                    <div className="flex flex-col items-center">
                        <label className="text-3xl sm:text-4xl font-bold block text-white">
                            {`${props.totalSoldAmount ? formatNumber(props.totalSoldAmount) : 0} ${global.PROJECT_TOKEN.name}`}
                        </label>
                        <label className="text-1xl sm:text-3xl font-bold block text-white">
                            {`(${formatNumber(props.totalSoldAmount * 100 / global.totalVolume)} %)`}
                        </label>
                    </div>
                    <label className="mt-2 font-bold uppercase text-[#8d5f45] text-xl">Total Sold</label>
                </div>
                <div className="rounded-md border border-[#8d5f45] bg-black  lg:w-1/2 w-full flex lg:flex-col flex-row lg:justify-center justify-between items-center text-center px-2 py-3">
                    <div className="flex flex-col items-center">
                        <label className="text-3xl sm:text-4xl font-bold block text-white">
                            {`${props.tokenBuyAmount ? formatNumber(props.tokenBuyAmount) : 0} ${global.PROJECT_TOKEN.name}`}
                        </label>
                        <label className="text-1xl sm:text-3xl font-bold block text-white">
                            {`(${props.totalSoldAmount ? formatNumber(props.tokenBuyAmount * 100 / props.totalSoldAmount) : 0} %)`}
                        </label>
                    </div>
                    <label className="mt-2 font-bold uppercase text-[#8d5f45] text-xl">My Allocation</label>
                </div>
            </div>
        </div>
    );
}

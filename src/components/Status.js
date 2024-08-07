import StatusItem from "./StatusItem";

export default function Status(props) {
    return (
        
            <StatusItem
                totalSoldAmount={props.totalSoldAmount}
                totalFundsInUSD={props.totalFundsInUSD}
                roundNumber={props.roundNumber}
                currentTokenPrice={props.currentTokenPrice}
                tokenBuyAmount={props.tokenBuyAmount}
                plsAmountFor1USD={props.plsAmountFor1USD}
                projectTokenBalance={props.projectTokenBalance}
                nextRoundStartTime={props.nextRoundStartTime}
            />
    );
}

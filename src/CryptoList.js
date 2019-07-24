import React from 'react';


const CryptoList = props => {

    let currencyList = props.cryptoArray.map((currency, index)=>{
        return (
            <li key={index}>
                <span>Last rate: </span>
                <span className={currency.class}>{currency.lastRate} </span>
                <span>{currency.currency} </span>
                <span>[{currency.symbol}] </span>
            </li>
        );
    });

    return (
        <ul className="crypto-list">
            {currencyList}
        </ul>
    )
}

export default CryptoList;

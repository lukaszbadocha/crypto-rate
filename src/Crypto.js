import React, {Component} from 'react';

import axios from 'axios';

import CryptoList from './CryptoList';

class Crypto extends Component {

    constructor() {
        super();

        this.state = {
            cryptoList: [],
            filteredCryptoList: []
        }
    }

    getData = () => {
        axios.get(`https://blockchain.info/pl/ticker`)
        .then(response => {     

           
            let lastCryptoList = this.state.cryptoList;

            let currencyArray = Object.keys(response.data).map(function(key, index) {
                let currencyObj = {}

                currencyObj.currency = key;
                currencyObj.lastRate = response.data[key].last;
                currencyObj.symbol = response.data[key].symbol;

                let lastObject = lastCryptoList[index];

                if(lastObject !== undefined) {

                    if(lastObject.lastRate > currencyObj.lastRate) {
                        currencyObj.class = 'red';
                    } else if (lastObject.lastRate < currencyObj.lastRate) {
                        currencyObj.class = 'green';
                    } else {
                        currencyObj.class = 'blue';
                    }

                } else {
                    currencyObj.class = 'blue';
                }

                return currencyObj;
            }); 

            this.setState({cryptoList: currencyArray});

            this.filterCryptoList();
        });
    }

    filterCryptoList = () => {
       
        
            let currentValue = this.inputFilter.value.trim().toUpperCase();

            let filteredArray = this.state.cryptoList.filter(elem=>{
                return (elem.currency.search(currentValue) !== -1);
            });
            
            this.setState({filteredCryptoList: filteredArray});
       
    }

    componentDidMount() {
       this.getData();
       this.interval = setInterval(this.getData, 5000);
    }

    render() {
        return (
            <div className="crypto">
                <input type="text" ref={data=>this.inputFilter = data} placeholder="Filtruj waluty" onChange={this.filterCryptoList} />
                <CryptoList cryptoArray={this.state.filteredCryptoList} />
            </div>
        )
    }
}

export default Crypto;
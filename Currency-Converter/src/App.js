import './index.scss';
import {useEffect, useState} from "react";
import ApiCurrency from "./api"
import Button from "./Components/Button"
import { Block } from './Components/Block';

function App() {
    const [fromCurrency, setFromCurrency] = useState("USD")
    const [toCurrency, setToCurrency] = useState("RUB")
    const [fromPrice, setFromPrice] = useState(0)
    const [toPrice, setToPrice] = useState(0)
    const [rates, setRates] = useState([])
    const [Currencies, setCurrencies] = useState([])

    const onChangeFromPrice = (value) => {
        const price = value / rates[fromCurrency]
        const result = price * rates[toCurrency]
        setFromPrice(value)
        setToPrice(result)
    }

    const onChangeToPrice = (value) => {
        const result = (rates[fromCurrency] / rates[toCurrency]) * value
        setFromPrice(result)
        setToPrice(value)
    }

    const changeCurrency = () => {
        setToCurrency(fromCurrency)
        setFromCurrency(toCurrency)
        setFromPrice(toPrice)
        setToPrice(fromPrice)
    }


    useEffect(() => {
        async function preload() {
            const currency = await ApiCurrency({fromCurrency});
            setRates(currency.rates)
        }
        preload();
    }, []);


    useEffect(() => {
        onChangeFromPrice(fromPrice);
    }, [fromCurrency]);

    useEffect(() => {
        onChangeToPrice(toPrice);
    }, [toCurrency]);

    return (
        <>
            <div className="App">
                <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency}
                       onChangeValue={onChangeFromPrice}/>
                <Button someFunction={changeCurrency} />
                <Block value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency}
                       onChangeValue={onChangeToPrice}/>
            </div>
        </>
    );
}

export default App;

import { useState } from 'react'

import Inputbox from "./Components/Inputbox"
import useCurrencyInfo from './Hooks/useCurrencyInfo'

import './App.css'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('pkr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyinfo = useCurrencyInfo(from); // Fectch Live exchange Rates
  const  options = Object.keys(currencyinfo); // Object.keys() is a built-in JS method that takes an object and returns an array of just its keys (the property names), discarding the values.
  
  const swap = () => {
    setFrom(to);  // swaping To to from 
    setTo(from);
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

 const covert = () => { 
  setConvertedAmount(amount * currencyinfo[to]) // currencyIfo is an object
 // "given the base currency the user picked (from), what's the rate for to?" 
} 

return (
   <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrL9eBGME4Ju82ibLarrL-SS0wuuGhn--ZcxzUIS8og&s)`,
    }}
>
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <h1 className="text-3xl text-center  mb-4">Currency App</h1>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        covert();
                    }}
                >
                    <div className="w-full mb-1">
                       
                        <Inputbox
                            label="From"
                            amount={amount}
                            onAmountChange={(newAmount) => setAmount(newAmount)}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            currencyOptions={options}
                        />
                    </div>

                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            onClick={swap}
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        >
                            swap
                        </button>
                    </div>

                    <div className="w-full mt-1 mb-4">
                        <Inputbox
                            label="To"
                            amount={convertedAmount}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            currencyOptions={options}
                            amountDisabled
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
)



}

export default App
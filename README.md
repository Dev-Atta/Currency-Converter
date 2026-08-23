# Currency Converter

A simple React app that converts between currencies using live exchange rates.

## Stack

- React (Vite)
- Tailwind CSS
- Custom React Hook for fetching data
- Currency API by fawazahmed0 (free, no API key needed)

## How It Works

1. User enters an amount and picks a "From" and "To" currency from dropdowns.
2. A custom hook (`useCurrencyInfo`) fetches live exchange rates for the selected "From" currency from the API.
3. The dropdown options are generated dynamically from the API response, so all available currencies show up automatically.
4. On clicking "Convert", the amount is multiplied by the exchange rate to get the converted value.
5. A "Swap" button lets the user flip the From/To currencies and their amounts instantly.

## What I Built

- **`useCurrencyInfo.js`** — a custom hook that fetches and returns live rates for any given currency.
- **`Inputbox.jsx`** — a reusable component with an amount field and a currency dropdown, used twice (once for "From", once for "To").
- **`App.jsx`** — holds all the state (amount, from, to, converted amount) and connects everything together.

## Features

- Live exchange rates, always up to date
- Dynamic currency list (not hardcoded)
- Swap currencies in one click
- Clean, responsive UI with Tailwind
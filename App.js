import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CurrencyComboBox from './components/CurrencyComboBox';

const currencies = {
  "USD": {
    "emoji": "\uD83C\uDDFA\uD83C\uDDF8",
    "exchangeRate": 1,
    "name": "US Dollar"
  },
  "EUR": {
    "emoji": "\uD83C\uDDEA\uD83C\uDDFA",
    "exchangeRate": 0.89,
    "name": "Euro"
  },
  "JPY": {
    "emoji": "\uD83C\uDDEF\uD83C\uDDF5",
    "exchangeRate": 114.42,
    "name": "Japanese Yen"
  },
  "GBP": {
    "emoji": "\uD83C\uDDEC\uD83C\uDDE7",
    "exchangeRate": 0.75,
    "name": "British Pound"
  },
  "AUD": {
    "emoji": "\uD83C\uDDE6\uD83C\uDDFA",
    "exchangeRate": 1.35,
    "name": "Australian Dollar"
  },
  "CAD": {
    "emoji": "\uD83C\uDDE8\uD83C\uDDE6",
    "exchangeRate": 1.28,
    "name": "Canadian Dollar"
  },
  "CHF": {
    "emoji": "\uD83C\uDDE8\uD83C\uDDED",
    "exchangeRate": 0.93,
    "name": "Swiss Franc"
  },
  "CNY": {
    "emoji": "\uD83C\uDDE8\uD83C\uDDF3",
    "exchangeRate": 6.36,
    "name": "Chinese Yuan"
  },
  "SEK": {
    "emoji": "\uD83C\uDDF8\uD83C\uDDEA",
    "exchangeRate": 8.51,
    "name": "Swedish Krona"
  },
  "NZD": {
    "emoji": "\uD83C\uDDF3\uD83C\uDDFF",
    "exchangeRate": 1.49,
    "name": "New Zealand Dollar"
  },
  "INR": {
    "emoji": "\uD83C\uDDEE\uD83C\uDDF3",
    "exchangeRate": 74.57,
    "name": "Indian Rupee"
  },
  "BRL": {
    "emoji": "\uD83C\uDDE7\uD83C\uDDF7",
    "exchangeRate": 5.22,
    "name": "Brazilian Real"
  },
  "RUB": {
    "emoji": "\uD83C\uDDF7\uD83C\uDDFA",
    "exchangeRate": 73.96,
    "name": "Russian Ruble"
  },
  "ZAR": {
    "emoji": "\uD83C\uDDFF\uD83C\uDDE6",
    "exchangeRate": 16.96,
    "name": "South African Rand"
  },
  "MXN": {
    "emoji": "\uD83C\uDDF2\uD83C\uDDFD",
    "exchangeRate": 20.45,
    "name": "Mexican Peso"
  }
  // Puedes agregar más códigos de moneda, emojis de banderas y nombres de moneda según tus necesidades
}

const initialExchanges = [
  {
    id: 1001,
    codOrigen: "EUR",
    codDest: "USD",
    amount: 2
  },
  {
    id: 1002,
    codOrigen: "USD",
    codDest: "JPY",
    amount: 2
  },
  {
    id: 1003,
    codOrigen: "USD",
    codDest: "JPY",
    amount: 2
  },
]

const App = () => {
  const [exchanges, setExchanges] = useState(initialExchanges)
  const [originCurrency, setOriginCurrency] = useState(null);
  const [destCurrency, setDestCurrency] = useState(null);

  const handleOriginCurrency = (currency) => {
    setOriginCurrency(currency);
    // Puedes realizar acciones adicionales cuando se selecciona una moneda, si es necesario.
  };
  const handleDestCurrency = (currency) => {
    setDestCurrency(currency);
    // Puedes realizar acciones adicionales cuando se selecciona una moneda, si es necesario.
  };

  return (
    <View style={styles.container}>
      <Text>Selected Currency: {originCurrency}</Text>
      <CurrencyComboBox currencies={currencies} onSelectCurrency={handleOriginCurrency} />
      <Text>Selected Currency: {destCurrency}</Text>
      <CurrencyComboBox currencies={currencies} onSelectCurrency={handleDestCurrency} />
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    paddingTop: 100,
    backgroundColor: "#FFFEE1",
    flex: 1
  }
});

export default App;
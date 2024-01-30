import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CurrencyComboBox = ({ currencies, onSelectCurrency }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(Object.keys(currencies)[0]);

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    onSelectCurrency(currency);
  };

  return (
    <View>
      <Text>Select a Currency:</Text>
      <Picker
        selectedValue={selectedCurrency}
        onValueChange={handleCurrencyChange}
      >
        {Object.keys(currencies).map((currencyCode) => (
          <Picker.Item
            key={currencyCode}
            label={`${currencies[currencyCode].emoji} ${currencies[currencyCode].name}`}
            value={currencyCode}
          />
        ))}
      </Picker>
    </View>
  );
};

export default CurrencyComboBox;

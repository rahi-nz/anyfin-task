import { Container, CurrencySection, Column, LocalCurrency } from './style';
import type { Country } from 'types/countries';
import { SEK_CURRENCY } from 'config';
import TextInput from 'components/TextInput';
import React, { useState } from 'react';

type Props = {
  info: Country;
  currencyRateAmount: number;
  SEKRateAmount: number;
};

const CountryDetails = ({ info, currencyRateAmount, SEKRateAmount }: Props) => {
  const [amount, setAmount] = useState<string>('1');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value);

  const converted = ((Number(amount) * currencyRateAmount) / SEKRateAmount).toFixed(2);

  return (
    <Container>
      <h1>{info.name}</h1>
      <p>Capital: {info.capital}</p>
      <p>Population: {info.population}</p>
      <CurrencySection>
        <Column>
          <span>
            {SEK_CURRENCY.name} ({SEK_CURRENCY.symbol})
          </span>
          <TextInput value={amount} type="number" onChange={onChange} />
        </Column>
        <Column>
          <span>
            {info.currencies[0].name} ({info.currencies[0].symbol})
          </span>
          <LocalCurrency>
            <p>{converted}</p>
          </LocalCurrency>
        </Column>
      </CurrencySection>
    </Container>
  );
};

export default CountryDetails;

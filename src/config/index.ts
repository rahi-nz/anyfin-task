import { Currency } from 'types/countries';

export const fields = ['name', 'capital', 'population', 'currencies', 'alpha3Code'];
export const FixerURL = 'http://data.fixer.io/api/latest';
export const restCountryURL = 'https://restcountries.eu/rest/v2';

export const SEK_CURRENCY: Currency = {
  code: 'SEK',
  name: 'Swedish krona',
  symbol: 'kr',
};

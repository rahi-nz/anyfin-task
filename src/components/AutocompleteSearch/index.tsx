import { Container, List } from './style';
import React, { useCallback } from 'react';
import { debounce } from 'lodash';
import Link from 'next/link';
import { TextInput, usePersistedState } from 'components';
import { Country } from 'types/countries';

const fields = ['name', 'capital', 'population', 'currencies', 'alpha3Code'];

const AutocompleteSearch = () => {
  const [countries, setCountries] = usePersistedState<Country[]>('countries', []);
  /**
   * debounce: to fire it only when the user has finished typing
   * useCallback: store the reference
   */
  const debounceLoadData = useCallback(
    debounce(async query => {
      if (query.length > 0) {
        const response = await fetch(
          `https://restcountries.eu/rest/v2/name/${query}?fields=${fields.join(';')}`,
          {
            method: 'get',
          },
        ).then(res => res.json());
        setCountries(response);
      } else {
        setCountries([]);
      }
    }, 1000),
    [],
  );
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounceLoadData(e.target.value);
  };

  return (
    <Container>
      <TextInput
        name="country"
        label="Search country by name"
        placeholder="Search country by name"
        onChange={onInputChange}
      />
      {countries.length > 0 && (
        <List>
          {countries.map(country => (
            <li key={country.name}>
              <Link href={`/country/${country.alpha3Code}`}>
                <a>{country.name}</a>
              </Link>
            </li>
          ))}
        </List>
      )}
    </Container>
  );
};

export default AutocompleteSearch;

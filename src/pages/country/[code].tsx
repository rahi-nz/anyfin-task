import { GetServerSideProps } from 'next';
import type { Country } from 'types/countries';
import CountryDetails from 'components/CounryDetails';
import Layout from 'components/Layout';

import { fields, SEK_CURRENCY, restCountryURL, FixerURL } from 'config';

type CountryPageProps = {
  country: Country;
  currencyRateAmount: number;
  SEKRateAmount: number;
};

function CountryPage({ country, currencyRateAmount, SEKRateAmount }: CountryPageProps) {
  return (
    <Layout>
      <CountryDetails
        info={country}
        currencyRateAmount={currencyRateAmount}
        SEKRateAmount={SEKRateAmount}
      />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const countryCode = query.code as string;
  const currencyRate = await fetch(
    `${FixerURL}?access_key=${process.env.FIXER_KEY}`,
  ).then(res => res.json());
  const country = await fetch(
    `${restCountryURL}/alpha/${countryCode}?fields=${fields.join(';')}`,
    {
      method: 'get',
    },
  ).then(res => res.json());

  const currencyRateAmount = currencyRate.rates[country.currencies[0].code];
  const SEKRateAmount = currencyRate.rates[SEK_CURRENCY.code];

  return {
    props: {
      country,
      currencyRateAmount,
      SEKRateAmount,
    },
  };
};

export default CountryPage;

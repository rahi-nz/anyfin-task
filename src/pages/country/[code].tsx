import { GetServerSideProps } from 'next';
import { CountryDetails, Layout } from 'components';
import type { Country } from 'types/countries';

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
  console.log("NEXT_PUBLIC",process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_FIXER_KEY)
  const currencyRate = await fetch(
    `${FixerURL}?access_key=${process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_FIXER_KEY}`,
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

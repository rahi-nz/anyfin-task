import { Layout, AutocompleteSearch } from 'components';
import Image from 'next/image';

const Index = () => {
  return (
    <Layout>
      <Image src="/earth.gif" alt="anyfin" width={250} height={200} />
      <AutocompleteSearch />
    </Layout>
  );
};

export default Index;

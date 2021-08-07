import Layout from 'components/Layout';
import Image from 'next/image';

const Index = () => {
  return (
    <Layout>
      <Image src="/earth.gif" alt="anyfin" width={300} height={250} />
      <p>Anyfin task</p>
    </Layout>
  );
};

export default Index;

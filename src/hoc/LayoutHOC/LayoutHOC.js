import Layout from '../../layouts';

const LayoutHOC = (Page) => {
  return (
    <Layout>
      <Page />
    </Layout>
  );
};

export default LayoutHOC;

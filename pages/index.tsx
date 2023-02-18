import { NextPage, GetStaticProps } from "next";
import { Grid } from "@nextui-org/react";

import { Layout } from "../components/Layout";

const Home = () => {
  return (
    <Layout title="GhostGunz">
      <Grid.Container gap={2} justify="flex-start"></Grid.Container>
    </Layout>
  );
};
export default Home;

import React from "react";
import { Box, Text } from "native-base";
import PageLayout from "../components/PageLayout";
import Head from "next/head";
import routes from "../lib/routes";

export default function HomeScreen() {
  return (
    <>
      <Head>
        <title>{routes.PRODUCTS.title} | daviswhitehead.com</title>
        <meta
          name="description"
          content="Products evangelized by Davis Whitehead."
        />
      </Head>
      <PageLayout>
        <Box justifyContent="center" alignItems="center" h="100">
          <Text>COMING SOON</Text>
        </Box>
      </PageLayout>
    </>
  );
}

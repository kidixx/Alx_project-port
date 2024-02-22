import { Grid, Flex, Heading } from "@chakra-ui/react";
import { useLayoutEffect, useState } from "react";
import axios from "axios";
import NewsBox from "../components/news-props/NewsBox";
const BitcoinNews = () => {
  const [bitcoinNewsData, setBitcoinNewsData] = useState([]);
  const fetchBitcoinNewsData = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=bitcoin&pageSize=24&apiKey=05a168e910a246c493f80df4a4f7601d`
      );

      setBitcoinNewsData(res.data.articles);
    } catch (err) {
      console.warn(err);
    }
  };
  useLayoutEffect(() => {
    fetchBitcoinNewsData();
  }, []);
  return (
    <Flex h="fit-content" w="100%" flexDir="column" rowGap="20px">
      <Heading fontSize="1.6rem" textDecor="underline">
        Bitcoin News
      </Heading>

      <Grid
        gridTemplateColumns={{
          base: "1fr",
          sm: "1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr",
          xl: "1fr 1fr 1fr 1fr",
        }}
        gridTemplateRows="min-content"
        gap="15px"
      >
        {bitcoinNewsData.map((news) => (
          <NewsBox {...news} />
        ))}
      </Grid>
    </Flex>
  );
};
export default BitcoinNews;
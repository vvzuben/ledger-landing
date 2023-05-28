import { Box } from '@mui/material';
import { HttpClient } from '@metis.io/middleware-client';
import { NextPage } from 'next';

import Faq from '../components/faq/Faq';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HeadTag from '../components/HeadMeta';
import Main from '../components/main/Main';
import NewsLetter from '../components/news-letter/NewsLetter';

const IndexPage: NextPage<{
  polisClient: HttpClient;
  polisUser: {
    balance: string;
    display_name: string;
    email: string;
    eth_address: string;
    last_login_time: number;
    username: string;
  };
}> = () => {
  return (
    <>
      <HeadTag
        title="Feature | StarLedger"
        content="Starlege is the metamask website"
      />

      <Header />
      <Box sx={{ backgroundColor: '#1B2735' }}>
        <Main />
        <Faq />
        <NewsLetter value={1600} />
        <Footer />
      </Box>
    </>
  );
};

export default IndexPage;

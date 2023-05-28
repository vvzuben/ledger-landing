import React from 'react';
import { Typography, Box, Grid, Container } from '@mui/material';
import LazyLoad from 'react-lazyload';

import styles from './AboutComponent.module.css';

export default function About() {
  const whiteCard = [
    { title: 'Entertainment', date: 'Games' },
    { title: 'Education', date: 'Apps' },
    { title: 'Exploration', date: 'Tools' },
  ];
  return (
    <Container>
      <Box className={styles.main_box}>
        <h1 className={styles.Super_ganit}>
          Space is for <span className={styles.text_accent}>everyone</span>
        </h1>
        <p className={styles.text_description}>
          From NFTs to stargazing in VR, we are taking space entertainment,
          education and exploration to new heights.
        </p>
        <img
          src="/images/earth.jpeg"
          alt="next"
          className={styles.about_image}
        />
        <Grid container spacing={3}>
          {whiteCard.map((x, index) => (
            <Grid item lg={4} key={index} xs={12}>
              <LazyLoad throttle={200} height={200} once={index} offset={10}>
                <Box className={styles.white_about_box}>
                  <h3 className={styles.about_title}>
                    {x.title}
                  </h3>
                  <p className={styles.about_date}>
                    {x.date}
                  </p>
                </Box>
              </LazyLoad>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

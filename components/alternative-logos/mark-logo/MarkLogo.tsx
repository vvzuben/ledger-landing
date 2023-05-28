import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './MarkLogo.module.css';
import clsx from 'clsx';

interface MarkLogoProps {
  color?: 'normal' | 'light' | 'dark';
  href: string;
}

const MarkLogo: React.FC<MarkLogoProps> = ({ color = 'normal', href }) => {
  return (
    <Box
      component="a"
      href={href}
      className={clsx(
        styles.container,
        { [styles.light]: color === 'light' },
        { [styles.dark]: color === 'dark' },
      )}
    >
      <img
        src="/images/logo/logo.svg"
        width={158}
        height={154}
        alt=":( Not Found"
        className={styles.logo}
      />
      <Box className={styles.extensions}>
        <div className={styles.extension}>.svg</div>
        <div className={styles.extension}>.png</div>
      </Box>
    </Box>
  );
};

export default MarkLogo;

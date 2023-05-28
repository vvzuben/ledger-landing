import React from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from './Card.module.css';
import useIsMobile from '../../../hooks/useIsMobile';

interface CardProps {
  name: string;
  icon: string;
  description: string;
  path: string;
  video: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = (props) => {
  const { name, description, icon, path, video, onClick } = props;
  const router = useRouter();
  const isMobile = useIsMobile();
  const handleRedirect = () => router.push(path);

  return (
    <Box className={styles.container} onClick={onClick}>
      <video key={video} className={styles.video} autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <Box className={styles.content}>
        <img
          src={icon}
          width={isMobile ? 32 : 48}
          height={isMobile ? 32 : 48}
          alt=":( Not Found"
          className={styles.icon}
        />
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <Button className={styles.launch} onClick={handleRedirect}>
          <span className={styles.buttonTxt}>Launch</span>
          <Box className={styles.arrow}>
            <img
              src="/images/icons/arrow-right-light.svg"
              width={isMobile ? 16 : 20}
              height={isMobile ? 16 : 20}
              alt=":( Not Found"
            />
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default Card;

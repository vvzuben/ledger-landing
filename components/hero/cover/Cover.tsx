import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from './Cover.module.css';
import clsx from 'clsx';

interface CoverProps {
  name: string;
  icon: string;
  description: string;
  path: string;
  video: string;
  isOpen: Boolean;
  onClose: () => void;
}

const Cover: React.FC<CoverProps> = (props) => {
  const videoRef = useRef<HTMLVideoElement>();
  const { name, description, icon, path, video, isOpen, onClose } = props;
  const router = useRouter();
  const handleRedirect = () => router.push(path);

  useEffect(() => {
    console.log(videoRef.current.getBoundingClientRect());
  }, [video]);

  return (
    <Box className={clsx(styles.container, { [styles.open]: isOpen })}>
      <Box className={styles.videoContainer}>
        <video
          key={video}
          className={styles.video}
          ref={videoRef}
          autoPlay
          muted
          loop
        >
          <source src={video} type="video/mp4" />
        </video>
      </Box>
      <Button className={styles.closeButton} onClick={onClose}>
        <img src="/images/icons/close.svg" width={40} height={40} />
      </Button>
      <Box className={styles.content}>
        <Box className={styles.icon}>
          <img src={icon} width={42} height={42} alt=":( Not Found" />
        </Box>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <Button className={styles.launch} onClick={handleRedirect}>
          Launch
        </Button>
        <Button className={styles.back} onClick={onClose}>
          Back to Home
        </Button>
      </Box>
    </Box>
  );
};

export default Cover;

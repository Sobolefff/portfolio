import React from 'react';
import Typography from '@mui/material/Typography';
import styles from './greeting.module.css';
import '@fontsource/lato/latin-300.css';
import '@fontsource/roboto-slab/300.css'

export const Greeting = () => {
    return (
        <section className={styles.greetings}>
            <div className={styles.overlay}>
                <Typography className={styles.title} 
                    fontFamily={'Lato'} 
                    fontStyle={'normal'} 
                    lineHeight={1.1} 
                    color={'white'}
                    mb={'30px'}
                    variant="h2" 
                    component="h2"
                >
                    HELLO, I'M PETR
                </Typography>
                <Typography 
                    color={'white'}
                    fontFamily={'Roboto Slab'}
                    fontWeight={'300'}
                    lineHeight={1.7}
                    fontSize={16}
                    variant="h5" 
                    component="p"
                >
                    Front-end developer
                </Typography>
            </div>
        </section>
    )
}
import React from 'react';
import styles from './header.module.css';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto';


const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 80,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  });

  const StyledTab = styled((props) => <Tab {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      color: 'rgba(255, 255, 255, 0.4)',
      '&.Mui-selected': {
        color: 'rgba(255, 255, 255, 0.9)',
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
      },
    }),
  );

export const Header = () => {
    const [value, setValue] = React.useState('general');

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    

    return (
        <header className={styles.header}>
            {/* <Typography className={styles.title} variant="h3">My Portfolio</Typography> */}
            <div className={styles.logo}></div>
            <div className={styles.menu}>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="menu"
                >
                    <StyledTab value="general" label="General"/>
                    <StyledTab value="about" label="About" />
                    <StyledTab value="works" label="My works" />
                </StyledTabs>
            </div>
        </header>
    )
}
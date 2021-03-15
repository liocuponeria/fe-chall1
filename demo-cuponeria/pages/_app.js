/* eslint-disable react/forbid-prop-types */
import React from 'react';
import '../styles/globals.css';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;

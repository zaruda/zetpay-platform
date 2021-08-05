import React, { FC } from 'react';
import Link from 'next/link';

import { Button, Grid, Typography, Link as MuiLink } from '@material-ui/core';

import ArrowRightIcon from '../icons/ArrowRightIcon';

import useStyles from './styles';
import { IScreenProps } from './types';

const Screen: FC<IScreenProps> = ({
  title,
  subtitle,
  onContinue = () => {},
  buttonText = 'CONTINUE',
  href,
  showPrivacyPolicy = false,
  children
}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.title}>
        <Typography variant="h1" align="center" className={classes.titleText}>
          {title}
        </Typography>
      </Grid>
      {subtitle && (
        <Grid item xs={12} className={classes.subtitle}>
          <Typography color="textSecondary" variant="body2" align="center">
            {subtitle}
          </Typography>
        </Grid>
      )}
      <Grid item xs={12}>
        {children}
      </Grid>
      <Grid item xs={12} className={classes.footer}>
        <Button
          color="primary"
          variant="contained"
          endIcon={<ArrowRightIcon />}
          onClick={onContinue}
          href={href}
          fullWidth
        >
          {buttonText}
        </Button>
        {showPrivacyPolicy && (
          <Typography
            className={classes.terms}
            variant="body2"
            align="center"
            color="textSecondary"
          >
            By continuing you agree to our{' '}
            <Link
              href="https://payments.google.com/payments/apis-secure/u/0/get_legal_document?ldo=0&ldt=privacynotice&ldl=ru"
              passHref
            >
              <MuiLink target="_blank" underline="always">
                Privacy Notice
              </MuiLink>
            </Link>{' '}
            and{' '}
            <Link
              href="https://payments.google.com/payments/apis-secure/u/0/get_legal_document?ldo=0&ldt=buyertos"
              passHref
            >
              <MuiLink target="_blank" underline="always">
                Terms of Service
              </MuiLink>
            </Link>
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Screen;

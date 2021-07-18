import React, { FC } from 'react'

import { Button, Grid, Typography } from '@material-ui/core'

import ArrowRightIcon from '../icons/ArrowRightIcon'

import useStyles from './styles'
import { IScreenProps } from './types'

const Screen: FC<IScreenProps> = ({
  title,
  subtitle,
  onContinue = () => { },
  buttonText = 'CONTINUE',
  href,
  showPrivacyPolicy = false,
  children,
}) => {
  const classes = useStyles()

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.title}>
        <Typography variant="h1" align="center" className={classes.titleText}>
          {title}
        </Typography>
      </Grid>
      {subtitle && (
        <Grid item xs={12} className={classes.subtitle}>
          <Typography color="textSecondary" variant="subtitle1" align="center">
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
          <Typography className={classes.terms} variant="body2" align="center" color="textSecondary">
            By continuing you agree to our Privacy Policy and Terms of Service
          </Typography>
        )}
      </Grid>
    </Grid>
  )
}

export default Screen
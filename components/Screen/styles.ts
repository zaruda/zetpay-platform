import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles<Theme>(theme => ({
  container: {
    height: '100vh',
    display: 'grid',
    gridTemplateRows: 'auto auto 1fr',
    gridGap: theme.spacing(2),
    padding: theme.spacing(2, 0, 5),
    maxWidth: 600,
    margin: 'auto'
  },
  footer: {
    margin: theme.spacing('auto', 4, 0)
  },
  title: {
    margin: theme.spacing(0, 3)
  },
  titleText: {
    fontWeight: theme.typography.fontWeightBold
  },
  subtitle: {
    margin: theme.spacing(0, 3)
  },
  terms: {
    fontSize: 10,
    marginTop: theme.spacing(1),
    '& > a': {
      color: theme.palette.common.black
    }
  }
}));

export default useStyles;

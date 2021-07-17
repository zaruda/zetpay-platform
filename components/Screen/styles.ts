import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles<Theme>(theme => ({
  container: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: 'auto auto 1fr',
    padding: theme.spacing(4, 0),
    maxWidth: 600,
    margin: 'auto',
  },
  footer: {
    margin: theme.spacing('auto', 4, 0)
  },
  title: {
    margin: theme.spacing(0, 3, 3)
  },
  titleText: {
    fontWeight: theme.typography.fontWeightBold,
  },
  subtitle: {
    margin: theme.spacing(0, 4, 4)
  },
  terms: {
    marginTop: theme.spacing(0.5)
  }
}))

export default useStyles
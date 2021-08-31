import {
  Container,
  Typography,
  Button,
  makeStyles,
  Theme
} from '@material-ui/core';
import { Drawer } from '@zaruda/zetpay-core';
import FourkIcon from '../../components/icons/FourkIcon';
import PlaylistWhiteIcon from '../../components/icons/PlaylistWhiteIcon';
import UnlimitedIcon from '../../components/icons/UnlimitedIcon';
import AdIcon from '../../components/icons/AdIcon';
import ArrowRightIcon from '../../components/icons/ArrowRightIcon';
import MonsterIcon from '../../components/icons/MonsterIcon';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto auto 1fr auto',
    height: '100vh',
    padding: theme.spacing(4, 2),
    color: 'white',
    backgroundColor: 'black'
  },
  title: {
    fontSize: theme.typography.fontSize * 4,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 'initial'
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightBold
  },
  content: {
    maxWidth: 600,
    margin: 'auto'
  },
  footer: {
    maxWidth: 600,
    margin: 'auto'
  },
  monster: {
    display: 'block',
    maxWidth: theme.spacing(33.5),
    width: '100%',
    height: '100%',
    margin: theme.spacing(0, 'auto', -3)
  },
  featureList: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyContent: 'center',
    gridGap: theme.spacing(1, 5),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  feature: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridGap: theme.spacing(1),
    alignItems: 'center'
  },
  trial: {
    marginTop: theme.spacing(1)
  }
}));

export default function Subscribe() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <MonsterIcon className={classes.monster} />
      <div className={classes.header}>
        <Typography className={classes.title} align="center">
          Wallpaper
        </Typography>
        <Typography className={classes.subtitle} align="center">
          4K UNLIMITED
        </Typography>
      </div>
      <div className={classes.content}>
        <div className={classes.featureList}>
          <div className={classes.feature}>
            <UnlimitedIcon />
            <Typography variant="body2">
              Unlimited <br /> Downloads
            </Typography>
          </div>

          <div className={classes.feature}>
            <PlaylistWhiteIcon />
            <Typography variant="body2">
              Playlist <br /> Features
            </Typography>
          </div>

          <div className={classes.feature}>
            <FourkIcon />
            <Typography variant="body2">
              Maximum <br /> Quality
            </Typography>
          </div>

          <div className={classes.feature}>
            <AdIcon />
            <Typography variant="body2">
              Remove <br /> Ads
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <Drawer href="/subscribe/form">
          <Button
            color="primary"
            variant="contained"
            endIcon={<ArrowRightIcon />}
            fullWidth
          >
            CONTINUE
          </Button>
        </Drawer>
        <Typography className={classes.trial} variant="body2" align="center">
          3 day trial then $0.99/Year, cancel anytime
        </Typography>
      </div>
    </Container>
  );
}

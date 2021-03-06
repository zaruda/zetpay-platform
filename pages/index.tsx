import { useState } from 'react';
import {
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import Image from 'next/image';

import Screen from '../components/Screen';
import { IScreenProps } from '../components/Screen/types';
import PlaylistIcon from '../components/icons/PlaylistIcon';
import PlayIcon from '../components/icons/PlayIcon';
import ShuffleIcon from '../components/icons/ShuffleIcon';

import HeroImage from '../public/images/bg1@2x.png';
import ShuffleImage from '../public/images/bg2@2x.png';
import PersonCardImage from '../public/images/PersonCard.svg';

enum State {
  Welcome,
  Discover,
  Shuffle
}

const createListItem = ({
  icon: Icon,
  text
}: {
  icon: React.FC;
  text: string;
}) => (
  <ListItem>
    <ListItemAvatar>
      <Icon />
    </ListItemAvatar>
    <ListItemText
      primary={text}
      primaryTypographyProps={{ color: 'textSecondary', variant: 'body2' }}
    />
  </ListItem>
);

const useStyles = makeStyles(() => ({
  image: {
    display: 'block',

    '+ &': {
      display: 'block',
      width: '100%'
    }
  }
}));

export default function Home() {
  const classes = useStyles();
  const [currentState, setCurrentState] = useState(State.Welcome);

  const SLIDES_DATA: Record<State, IScreenProps> = {
    [State.Welcome]: {
      title: 'Welcome to Wallpaper 4K',
      subtitle:
        'Get exclusive free images from amazing artists around the world. Artists get discovered and paid for their work.',
      onContinue: () => setCurrentState(State.Discover),
      children: (
        <Image
          src={HeroImage}
          layout="responsive"
          alt="Welcome to Wallpaper 4K"
          quality={100}
        />
      ),
      showPrivacyPolicy: true
    },
    [State.Discover]: {
      title: 'Discover Artists',
      subtitle:
        'Discover exciting artists from around the world. Check artists’ profiles and follow the artists you love.',
      onContinue: () => setCurrentState(State.Shuffle),
      children: (
        <Image
          className={classes.image}
          layout="responsive"
          src={PersonCardImage}
          alt="Discover Artists"
          quality={100}
        />
      )
    },
    [State.Shuffle]: {
      title: 'Shuffle with Playlists',
      href: '/subscribe',
      buttonText: "LET'S GO",
      children: (
        <>
          <List>
            {createListItem({
              icon: PlaylistIcon,
              text: 'Add your favorite images to your Playlist'
            })}
            {createListItem({ icon: PlayIcon, text: 'Tap play' })}
            {createListItem({
              icon: ShuffleIcon,
              text: 'Your wallpaper will shuffle automatically at your preferred frequency'
            })}
          </List>
          <Image
            src={ShuffleImage}
            layout="responsive"
            alt="Shuffle with Playlists"
          />
        </>
      )
    }
  };

  return (
    <Container disableGutters>
      <Screen {...SLIDES_DATA[currentState]} />
    </Container>
  );
}

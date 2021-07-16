import { v4 as uuid } from 'uuid';

export const dummy = '';

export const allScreens = [
  {
    id: uuid(),
    type: 'text',
    heading: 'Hi Baby!',
    text: `I know it's been really tough for you to wait these many days to open this. But it's going to be worth the wait.`
  },
  {
    id: uuid(),
    type: 'text',
    heading: 'Neave',
    text: `It's you b'day da chlm. I know you are more excited not to read this but to skip this. But before that Happy Birthday Darling!`
  },
  {
    id: uuid(),
    type: 'text',
    heading: 'Lets do something',
    text: `Put on your headphones`
  },
  {
    id: uuid(),
    type: 'audio',
    src: 'initial.mp3',
    heading: 'Long Before',
    text: `You remember how we spoke?`
  },
  {
    id: uuid(),
    type: 'image',
    src: 'IMG_20170902_174659.jpeg',
    // heading: 'Long Before',
    text: `Then we came here`
  },
  {
    id: uuid(),
    type: 'image',
    src: 'IMG-20191007-WA0025.jpeg',
    // heading: 'Long Before',
    text: `Sometimes here`
  },
];

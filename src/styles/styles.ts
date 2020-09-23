import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

const userStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
    },
    container: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    label: {
      backgroundColor: '#B1D0E6',
      height: '300px',
      width: '400px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#24F03A',
      color: 'black',
    },
    input: {
      display: 'none',
    },
  }),
);

export default userStyle;

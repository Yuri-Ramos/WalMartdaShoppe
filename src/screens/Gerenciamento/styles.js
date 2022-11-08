
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    justifyContent: 'center',
    margin: '10px'
  },
  geral: {
    display: 'flex',
    margin: '5px',
    padding: '5px',
    justifyContent: 'center',
    alignContent: 'center'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center'
  },
}));
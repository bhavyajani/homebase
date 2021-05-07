import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

export default makeStyles((theme) => ({
  // toolbar: theme.mixins.toolbar,
  root: {
    paddingTop: '16px',
    flexGrow: 1,
    backgroundColor: '#F0F0F0',
    borderTop: 'solid 2px rgba(0, 0, 0, 0.3)',
    overflowX: 'hidden'
  },
  footerText: {
    padding: '0px 16px',
    color: 'rgba(0, 0, 0, 1)'
  },
  subFooter: {
    paddingBottom: '8px',
    marginTop: '8px', 
    flexGrow: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  }
}));
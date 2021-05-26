import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  main:  {
    backgroundColor: theme.palette.background.default
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  spacing: {
    paddingBottom: '5px'
  },
  sectionContainer: {
    display: 'flex'
  }
}));
import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  // toolbar: theme.mixins.toolbar,
  bannerImage: {
    width: '100%',
    height: 300,
    objectFit: 'contain'
  },
  root: {
    minWidth: '250px'
    // maxWidth: '100%'
  },
  spacing: {
    paddingBottom: '3px'
  },
  media: {
    height: 0,
    paddingTop: '60%'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center'
  },
  cardContent: {
    display: 'flex',
    justifyContent: "center"
  },
  main:  {
    backgroundColor: theme.palette.background.default,
    margin: '0 15px'
  }
}));
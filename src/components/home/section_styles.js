import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  // toolbar: theme.mixins.toolbar,
  bannerImage: {
    width: '100%',
    height: 300,
    objectFit: 'cover'
  },
  root: {
    maxWidth: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  main:  {
    backgroundColor: theme.palette.background.default
  }
}));
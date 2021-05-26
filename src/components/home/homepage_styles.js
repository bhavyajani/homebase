import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  // toolbar: theme.mixins.toolbar,
  bannerImage: {
    width: '100%',
    height: 400,
    objectFit: 'cover'
},
main:  {
  backgroundColor: theme.palette.background.default
}
}));
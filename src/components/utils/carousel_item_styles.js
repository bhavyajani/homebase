import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  // toolbar: theme.mixins.toolbar,
  carousal: {
    flexGrow: 1,
    marginTop: theme.spacing(8.2),
  },
  bannerImage: {
    width: '100%',
    height: 400,
    objectFit: 'cover'
}
}));
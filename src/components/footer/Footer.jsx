import React from 'react';
import {Grid, Typography, List, ListItem} from '@material-ui/core'
import useStyles from './footer_styles'
import {Link} from 'react-router-dom'

const Footer = () =>
{
  const classes = useStyles()
  return (
    <main>
      <div className={classes.root} position="fixed">
        <Grid container>
          <Grid item xs={12} sm={4}>
            <List>
              <ListItem>
                <Typography className={classes.footerText} component={Link} to="/about_us">
                  About Us
                </Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.footerText} component={Link} to="/products">
                  What we offer
                </Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.footerText} component={Link} to="/vendors">
                  Our vendors 
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography className={classes.footerText} component={Link} to="/contact_us">
              Contact Us
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography className={classes.footerText}>
              Social
            </Typography>
          </Grid>
          <Grid className={classes.subFooter} item xs={12}>
            <Typography className={classes.footerText}>
              This is Copyright line. All rights reserved bitches
            </Typography>
          </Grid>
        </Grid>
      </div>
    </main>
  )
}

export default Footer;
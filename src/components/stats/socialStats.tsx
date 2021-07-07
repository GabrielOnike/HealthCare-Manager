import React from 'react'
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { Avatar, Box, Card, CardContent, Grid, Typography, colors, makeStyles, Theme } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


interface Props {
    
}

const useStyles = makeStyles((theme: Theme) => ({
    root:{
      height: '100%',
    },
    differenceIcon: {
      color: colors.green[900]
    },
    differenceValue: {
      color: colors.green[900],
      marginRight: theme.spacing(1)
    },
  })
);

const SocialStats = (props: Props) => {
    const classes = useStyles();

    return (
        <div>
            <Card className={clsx(classes.root)} >
            <CardContent>
              <Grid container justify="space-between" spacing={3}>

                <Grid item>
                  <Typography color="textSecondary"  gutterBottom variant="h6" >
                    SOCIAL FOLLOWING 
                  </Typography>
                  <Typography color="textPrimary"  variant="h4"  >
                    50 
                  </Typography>
                  </Grid>

                  <Box
                    mt={2}
                    display="flex"
                    alignItems="center"
                  >
                    <ArrowUpwardIcon className={classes.differenceIcon} />
                    <Typography
                      className={classes.differenceValue}
                      variant="body2"
                    >
                      5%
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="caption"
                    >
                      Since last month
                    </Typography>
                  </Box>

              </Grid>
            </CardContent>
        </Card>
        </div>
    )
}

export default SocialStats

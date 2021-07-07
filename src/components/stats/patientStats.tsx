import React from 'react'
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { Avatar, Box, Card, CardContent, Grid, Typography, colors, makeStyles, Theme } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';




// interface Props {
   
// }

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

const PatientStats = ({ ...rest }) => {
    const classes = useStyles();

    return (
        <Card className={clsx(classes.root)} {...rest} >
            <CardContent>
              <Grid container justify="space-between" spacing={3}>

                <Grid item>
                  <Typography color="textSecondary"  gutterBottom variant="h6" >
                    REGISTERED PATIENTS
                  </Typography>
                  <Typography color="textPrimary"  variant="h4"  >
                    1,520
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
                      12%
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
    )
}

PatientStats.propTypes = {
  className: PropTypes.string
};

export default PatientStats

import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

    

const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            content: {
                flexGrow: 1,
                padding: theme.spacing(8),
            },
        }),
    );

function Index() {
    const classes  = useStyles();
          return (
            <div className={classes.content}>
            <p> Hi from users index</p>
            </div>
    )
}

export default Index


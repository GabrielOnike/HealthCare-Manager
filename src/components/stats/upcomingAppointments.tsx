import React,{useState} from 'react'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import { createStyles, makeStyles, } from '@material-ui/core/styles';
import { Avatar, Box, Card, CardContent, Grid, Button, CardHeader, Chip, Divider, Table,
    TableBody, TableCell, TableHead, TableRow, TableSortLabel, Tooltip, } from '@material-ui/core';


interface Props {
    
}

const data = [
    {
      patid: 12,
      ref: 'AP1049',
      time: 1230,
      patient: {
        name: 'Ekaterina Tankova'
      },
      booking: {
        name: 'Dr. Gabe'
      },
      status: 'In progress',
      date: "2021-12-26",
    },
    {
        patid: 14,
        ref: 'AP1049',
        time: 1430,
        patient: {
          name: 'Herman Beck'
        },
        booking: {
          name: 'Dr. Gabe'
        },
        status: 'Pending',
        date: "2021-12-16",
      },
      {
        patid: 18,
        ref: 'AP1049',
        time: 1600,
        patient: {
          name: 'Raji Fash'
        },
        booking: {
          name: 'Dr. Gabe'
        },
        status: 'In progress',
        date: "2021-12-13",
      },
      {
        patid: 34,
        ref: 'AP1049',
        time: "2100",
        patient: {
          name: 'Nas Rufa'
        },
        booking: {
          name: 'Dr. Gabe'
        },
        status: 'Pending',
        date: "2022-03-13",
      },

  ];

  const useStyles = makeStyles(() => ({
    root: {},
    actions: {
      justifyContent: 'flex-end'
    }
  }));

const UpcomingAppointments = (props: Props) => {
    const classes = useStyles();
    const [upcoming] = useState(data);

    return (
        <div>
            <Card className={clsx(classes.root)}  >
                <CardHeader title="Upcoming Appointments" />
                <Divider />

                    <Box minWidth={700}>
                        <Table>
                         <TableHead>
                             <TableRow>
                                <TableCell>
                                Appointment Ref
                                </TableCell>
                                <TableCell>
                                Patient
                                </TableCell>
                                <TableCell sortDirection="desc">
                                <Tooltip
                                    enterDelay={300}
                                    title="Sort"
                                >
                                    <TableSortLabel
                                    active
                                    direction="desc"
                                    >
                                    Appointment 
                                    </TableSortLabel>
                                </Tooltip>
                                </TableCell>
                                <TableCell>
                                Booking
                                </TableCell>
                                <TableCell>
                                Status
                                </TableCell>
                             </TableRow>
                            </TableHead>

                            <TableBody>
                            {upcoming.map((upcoming) => (
                                <TableRow hover key={upcoming.patid} >
                                    <TableCell>
                                    {upcoming.ref}
                                </TableCell>
                                <TableCell>
                                    {upcoming.patient.name}
                                </TableCell>
                                <TableCell>
                                    {moment(upcoming.time).format('h:mm a')},
                                    {moment(upcoming.date).format('dddd Do MMMM')}
                                </TableCell>
                                <TableCell>
                                    {upcoming.booking.name}
                                </TableCell>
                                <TableCell>
                                    <Chip color="primary" label={upcoming.status} size="small" />
                                </TableCell>
                                </TableRow>
                            )
                            )}
                            </TableBody>

                        </Table>
                    </Box>
            </Card>
        </div>
    )
}

UpcomingAppointments.propTypes = {
    className: PropTypes.string
  };

export default UpcomingAppointments

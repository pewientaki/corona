import React from 'react';
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';


const Cards = ({ data: { updated, cases, todayCases, deaths, todayDeaths, recovered, todayRecovered } }) => {
    if (!updated) {
        return 'Loading..'
    }
    console.log(cases, 'from cards')
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Cases
                        </Typography>
                        <Typography variant='h5' component='h2'>
                            <CountUp start={0} end={cases} duration={2.75} separator=","></CountUp>
                        </Typography>
                        <Typography>Cases today:</Typography>
                        <Typography gutterBottom><CountUp start={0} end={todayCases} duration={2.75}></CountUp></Typography>
                        <Typography>{new Date(updated).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant='h5' component='h2'>
                            <CountUp start={0} end={deaths} duration={2.75} separator=","></CountUp>
                        </Typography>
                        <Typography>Deaths today:</Typography>
                        <Typography><CountUp start={0} end={todayDeaths} duration={2.75}></CountUp></Typography>
                        <Typography>{new Date(updated).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant='h5' component='h2'>
                            <CountUp start={0} end={recovered} duration={2.75} separator=","></CountUp>
                        </Typography>
                        <Typography>Recovered today:</Typography>
                        <Typography><CountUp start={0} end={todayRecovered} duration={2.75}></CountUp></Typography>
                        <Typography>{new Date(updated).toDateString()}</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )
}

export default Cards;
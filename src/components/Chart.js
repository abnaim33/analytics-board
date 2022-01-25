// import { Tabs } from '@mui/material';
import React from 'react';
import DropdownButton from './DropdownButton';
import Tabs from './Tabs'
import { makeStyles } from '@mui/styles'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const useStyles = makeStyles({
    chart: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    tabs: {
        width: '280px'
    },
})

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Octr", "Novr", "Dec"];

const d = new Date();
let month = months[d.getMonth()];

var Today = new Date().getDate();

const OneDayBefore = new Date().getDate() - 1;
const TwoDayBefore = new Date().getDate() - 2
const ThreeDayBefore = new Date().getDate() - 3
const FourDayBefore = new Date().getDate() - 4
const FiveDayBefore = new Date().getDate() - 5
const SixDayBefore = new Date().getDate() - 6

console.log(new Date().getDate() - 1)
const data = [
    {
        date: SixDayBefore + month,
        users: 120000,

    }, {
        date: FiveDayBefore + month,
        users: 110000,

    },
    {
        date: FourDayBefore + month,
        users: 100000,

    },
    {
        date: ThreeDayBefore + month,
        users: 130000,

    },
    {
        date: TwoDayBefore + month,
        users: 70000,

    },
    {
        date: OneDayBefore + month,
        users: 70000,

    },
    {
        date: Today + month,
        users: 90000,

    },
]

const Chart = () => {
    const classes = useStyles()
    return <div style={{ height: '80vh', marginBottom: '5rem' }}>
        <div className={classes.chart}>
            <div style={{
                display: 'flex', alignItems: 'center', width: '250px',
                justifyContent: 'space-between'
            }}>
                <DropdownButton /> vs <a href="hello">Select a metric</a>


            </div>
            <div className={classes.tabs}>
                <Tabs />
            </div>
        </div >

        <div style={{ position: 'relative', width: '50%', }}>
            <div style={{ position: 'absolute', height: '100%' }}>
                {/* <ResponsiveContainer width={700} height="80%"> */}
                <LineChart
                    width={700}
                    height={450}
                    data={data}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                    <XAxis dataKey="date" interval={'preserveStartEnd'} />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line dataKey="users" stroke="#1473E6" yAxisId={0} activeDot={{ r: 8 }} />
                    {/* <Line type="monotone" dataKey="student" stroke="#387908" yAxisId={1} /> */}
                    <Legend />
                </LineChart>
            </div>
            {/* </ResponsiveContainer> */}
        </div>

    </div >;
};

export default Chart;

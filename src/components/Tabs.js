import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    tab: {
        background: 'red'
    }
})



const data = [
    {
        date: 'Python',
        student: 13,
        fees: 10
    },
    {
        date: 'Js',
        student: 15,
        fees: 12
    },
    {
        date: 'Java',
        student: 10,
        fees: 9
    },
    {
        date: 'C++',
        student: 15,
        fees: 11
    },
    {
        date: 'Php',
        student: 12,
        fees: 9
    },
]



export default function CenteredTabs() {
    const [value, setValue] = React.useState(0);
    const classes = useStyles()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', textTransform: 'lowercase' }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Day" sx={{ border: '1px solid lightgray' }} />
                <Tab label="Week" sx={{ border: '1px solid lightgray' }} />
                <Tab label="Month" sx={{ border: '1px solid lightgray' }} />
            </Tabs>
        </Box>
    );
}

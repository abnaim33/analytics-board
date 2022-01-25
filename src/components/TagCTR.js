import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';

const parerolls = [
    {
        percentage: '16.29'
    },
    {
        percentage: '14.49'
    }, {
        percentage: '13'
    }
]
const reffarel = [
    {
        percentage: '11.05'
    },
    {
        percentage: '9.03'
    },
]

const TagCTR = () => {
    return <div style={{
        display: 'flex', color: 'gray',
        justifyContent: 'space-between', padding: '1rem', flexDirection: 'column'
    }}>

        <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <h3>Top Tag CTRs</h3>

            <IconButton>
                <MoreHorizIcon />
            </IconButton>
        </div>

        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column'
        }}>

            <div style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'flex-start'
            }}>
                <p style={{ width: '70px' }}>preroll</p>
                <div>
                    {
                        parerolls.map(item => (
                            <div style={{ display: 'flex', alignItems: 'center', }}>
                                <div className='percentage-bar' style={{ width: `${item.percentage}rem` }}></div>

                                <span key={item.percentage} style={{ marginLeft: '.5rem' }}>{item.percentage}%</span>

                            </div>
                        ))
                    }
                </div>
            </div>


            <div style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'flex-start', width: '100%'
            }}>
                <p style={{ width: '70px' }}>Refarrel</p>
                <div>
                    {
                        reffarel.map(item => (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div className='percentage-bar' style={{ width: `${item.percentage}rem` }}></div>

                                <span key={item.percentage} style={{ marginLeft: '.5rem' }}>{item.percentage}%</span>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>


    </div>;
};

export default TagCTR;


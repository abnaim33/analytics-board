import React from 'react';
import Chart from './Chart';
import ContentURLs from './ContentURLs';
import DataTable from './DataTable'
import TagCTR from './TagCTR';
const Home = () => {
    return <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    }}>
        <div style={{
            display: 'flex', alignItems: 'center',
            width: '100%',
            background: 'white', padding: '1rem'
        }}>

            <div style={{ flex: '.7' }}>
                <Chart />

            </div>
            <div style={{ flex: '.2' }}>
                <DataTable />
            </div>
        </div>


        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
        }}>
            <div style={{
                flex: '.48', background: 'white'
            }}>
                <ContentURLs />

            </div>
            <div style={{
                flex: '.48', background: 'white'
            }}>
                <TagCTR />

            </div>
        </div>
    </div>;
};

export default Home;

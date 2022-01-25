import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';



const rows = [
    {
        name: "Impressions",
        number: "43K",
        percentage: "12"
    },
    {
        name: "Clicks",
        number: "8.1K",
        percentage: "12"
    },
    {
        name: "CTR",
        number: "5.8k",
        percentage: "12"
    },
    {
        name: "Conversations",
        number: "43K",
        percentage: "12"
    },
    {
        name: "CR",
        number: "43K",
        percentage: "2"
    },
    {
        name: "Revenue",
        number: "43K",
        percentage: "12"
    },
];

export default function DataTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 250 }} aria-label="caption table">


                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>


                            <TableCell align="left" style={{ borderRight: '1px solid lightgray', fontWeight: '600', color: 'gray' }}>{row.name}</TableCell>
                            <TableCell align="left" style={{ borderRight: '1px solid lightgray', fontWeight: '600' }}>{row.number}</TableCell>
                            <TableCell align="left" className={row.percentage > 10 ? 'upIcon' : 'downIcon'} style={{ display: 'flex', alignItems: 'center' }}>{row.percentage > 10 ? <KeyboardDoubleArrowUpIcon /> : <KeyboardDoubleArrowDownIcon />} {row.percentage}%</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

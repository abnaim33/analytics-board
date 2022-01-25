import React, { useState } from 'react';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Alert, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles'
import SearchIcon from '@mui/icons-material/Search';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const useStyles = makeStyles({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '.8rem',
        background: '#FFFFFF',
        border: '1px solid #DADADA',
        boxSizing: 'border-box',
        width: '100%',
        minHeight: '300px',
        margin: '1rem 0'
    },
    titleForm: {
        border: '1px solid gray',
        display: 'flex',
        alignItems: 'center',

    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    pagesDiv: {
        width: '100%',
        padding: '.5rem',

    },
    dateForm: {
        border: '1px solid lightgray',
        borderRadius: '2px',
        color: 'gray',
        width: '100px'
    },
    searchContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '5px',
        border: '1px solid #979797',
        paddingLeft: '.5rem'
    },
    searchContainerInput: {
        width: '100%',
        height: '100%',
        padding: '.5rem .3rem',
        border: 'none',
        outline: 'none',
        color: ' #979797'

    },
    button: {
        color: 'gray',
        fontWeight: '600'
    }
})

const searchSuggestions = [
    {
        title: 'Category Text',
        text: 'Sample Text'
    },
    {
        title: 'Attribute Brand',
        text: 'GAP',

    },
    {
        title: 'Destination URL',
        text: 'https://nike.com/shoe_big_boots',

    }, {
        title: 'Content URL',
        text: 'https://gq.com/cool-fits-of-the-week',

    }, {
        title: 'Attribute Product',
        text: 'Big Boots 2.0',

    }, {
        title: 'Date:Month',
        text: 'December 2021',

    }
]

const searchFilters = [
    {
        filter: 'URL: border.com',
        id: 1
    },
    {
        filter: 'Fit: Released',
        id: 2
    },
    {
        filter: 'Type: Sweatershirt',
        id: 3
    },
    {
        filter: 'Season: AW2020',
        id: 4
    },
    {
        filter: 'Collection: Main',
        id: 5
    },
    {
        filter: 'hello',
        id: 6
    }
]

const Header = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState([null, null]);


    const [item, setItem] = useState(searchFilters);

    const removeFilters = (id) => {

    };
    const handleClose = () => {
        setOpen(false)
    }

    return <header className={classes.header}>

        <div className={classes.title}>
            <h2>Analytics Board</h2>
            <div>
                <form action="" className={classes.titleForm}>

                    <IconButton>
                        <CalendarTodayOutlinedIcon />
                    </IconButton>
                    {/* <input type="text" /> */}

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateRangePicker

                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(startProps, endProps) => (
                                <React.Fragment>
                                    <TextField {...startProps} variant="standard" style={{ width: '100px', height: '70px', margin: 'auto' }} />
                                    <span>-</span>
                                    <TextField {...endProps} variant="standard" style={{ width: '100px', height: '70px', margin: 'auto', border: 'transparent' }} />
                                </React.Fragment>
                            )}
                        />
                    </LocalizationProvider>


                </form>
            </div>
        </div>

        {/* search container */}

        <div className={classes.pagesDiv}>
            <form action="">
                <div className={classes.searchContainer}>

                    <SearchIcon style={{ color: 'tomato' }} />
                    <input type="text"
                        className={classes.searchContainerInput}
                        placeholder='Search all tags by attribute,month,URL or status. Press Enter to add Filter' />

                    <IconButton>
                        <ArrowBackIcon />
                    </IconButton>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>

                </div>
            </form>
        </div>

        {/* search filters */}
        <div className={classes.pagesDiv}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <h3 style={{ color: 'gray' }}>Search Filters:</h3>
                <Button className={classes.button} variant="text">Save Search Filter</Button>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex' }}>

                    {
                        item.map(item => (
                            <div key={item.id} style={{
                                display: 'flex', alignItems: 'center',
                                minWidth: '120px', borderRadius: '5px',
                                marginRight: '1rem', height: '50px',
                                padding: '0 1rem', background: '#EEEEEE',
                                justifyContent: 'space-between'

                            }}>
                                <h5>{item.filter}</h5>
                                <IconButton>

                                    <CloseIcon />
                                </IconButton>
                            </div>
                        ))
                    }
                </div>

                <Button>Export PDF</Button>

            </div>
        </div>
    </header>;
};

export default Header;

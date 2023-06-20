import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { LoginContext } from '../../Context/LoginContext';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

const Profile = () => {
    const { proName, contextemail } = useContext(LoginContext);

    return (
        <Grid container spacing={3} >
            <Grid item lg={1}>
                <div style={{ justifyContent: 'center', paddingTop: '70px' }}>
                    <Avatar style={{ margin: 'auto' }} sx={{ width: 100, height: 100 }} src="/broken-image.jpg" />
                </div>
            </Grid>
            <Grid item lg={2}>
                <div style={{ justifyContent: 'center', paddingTop: '50px' }}>
                    <Grid item lg={4}>
                        <h2>{proName}</h2>
                        <Typography>Name:{proName}</Typography>
                        <Typography>Email:{contextemail}</Typography>
                    </Grid>
                </div>
            </Grid>
            <Grid item lg={9}>
                <div style={{ justifyContent: 'center', paddingTop: '70px' }}>
                    <Button variant='contained' color='secondary' >
                        <EditIcon/> Edit
                    </Button>
                </div>
            </Grid>
        </Grid>

    )
}
export default Profile
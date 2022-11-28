import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Cart = ({ image1, title }) => {
    return (
        <Grid display={'flex'} gap={2} boxShadow={5} p={2} alignItems={'center'}>
            <Image src={image1} width={70} height={60} alt="image1"/>
            <Typography>{title}</Typography>
        </Grid>
    );
};

export default Cart;
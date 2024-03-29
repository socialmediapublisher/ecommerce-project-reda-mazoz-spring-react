import React, { Component } from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from "./styles";

const Product = ({product}) => {
    const classes = useStyles();
  return (
    <div>
        <Card className= {classes.root}>
            <CardMedia className= {classes.media} image={`data:image/png;base64,${product.image}`} title={product.name}/>
            <CardContent>
                <div className='classes.cardContent'>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="h2" color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to Cart'>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    </div>
  )
}

export default Product
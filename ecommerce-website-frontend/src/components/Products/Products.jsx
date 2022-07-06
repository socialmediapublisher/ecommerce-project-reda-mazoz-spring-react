import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from "./styles"
import ProductsService from "../ProductsService/ProductsService";
import { AddToPhotosOutlined } from "@material-ui/icons";

export class Products extends React.Component {
    constructor(props)
    {
        super(props);
        this.classes = () => this.useStyles();
/*         this.products = 
        [
            { id: 1, name: "Shoes", description: "Running shoes.", price: "$5", image: "https://images-ext-1.discordapp.net/external/CVgIYIs9mPhnI8Kvh5PqKmwZN_-SsDmXJFAqNva4gTk/%3Fsize%3D16%26quality%3Dlossless/https/cdn.discordapp.com/emojis/736673795666083930.gif"},
            { id: 2, name: "Macbook", description: "Apple macbook.", price: "$9", image: "https://images-ext-1.discordapp.net/external/CVgIYIs9mPhnI8Kvh5PqKmwZN_-SsDmXJFAqNva4gTk/%3Fsize%3D16%26quality%3Dlossless/https/cdn.discordapp.com/emojis/736673795666083930.gif"},
            { id: 1, name: "Shoes", description: "Running shoes.", price: "$5", image: "https://images-ext-1.discordapp.net/external/CVgIYIs9mPhnI8Kvh5PqKmwZN_-SsDmXJFAqNva4gTk/%3Fsize%3D16%26quality%3Dlossless/https/cdn.discordapp.com/emojis/736673795666083930.gif"},
            { id: 2, name: "Macbook", description: "Apple macbook.", price: "$9", image: "https://images-ext-1.discordapp.net/external/CVgIYIs9mPhnI8Kvh5PqKmwZN_-SsDmXJFAqNva4gTk/%3Fsize%3D16%26quality%3Dlossless/https/cdn.discordapp.com/emojis/736673795666083930.gif"},
            { id: 1, name: "Shoes", description: "Running shoes.", price: "$5", image: "https://images-ext-1.discordapp.net/external/CVgIYIs9mPhnI8Kvh5PqKmwZN_-SsDmXJFAqNva4gTk/%3Fsize%3D16%26quality%3Dlossless/https/cdn.discordapp.com/emojis/736673795666083930.gif"},
            { id: 2, name: "Macbook", description: "Apple macbook.", price: "$9", image: "https://images-ext-1.discordapp.net/external/CVgIYIs9mPhnI8Kvh5PqKmwZN_-SsDmXJFAqNva4gTk/%3Fsize%3D16%26quality%3Dlossless/https/cdn.discordapp.com/emojis/736673795666083930.gif"},
            { id: 1, name: "Shoes", description: "Running shoes.", price: "$5", image: "https://images-ext-1.discordapp.net/external/CVgIYIs9mPhnI8Kvh5PqKmwZN_-SsDmXJFAqNva4gTk/%3Fsize%3D16%26quality%3Dlossless/https/cdn.discordapp.com/emojis/736673795666083930.gif"},
            { id: 2, name: "Macbook", description: "Apple macbook.", price: "$9", image: "https://images-ext-1.discordapp.net/external/CVgIYIs9mPhnI8Kvh5PqKmwZN_-SsDmXJFAqNva4gTk/%3Fsize%3D16%26quality%3Dlossless/https/cdn.discordapp.com/emojis/736673795666083930.gif"},
        ]; */
        this.state = {
            products: [],
        }
    }
    componentDidMount()
    {
        ProductsService.getProducts().then((response) => {
            this.setState({products: response.data})
        })
    }
  render() {
    return (
        <main className={this.classes.content}>
        <div>
            <div className={this.classes.toolbar} />
            <Grid container justify="center" spacing = {4} style={{transform:"scaleX(80%) translateX(11%)"} } >
                {this.state.products.map((product) =>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} ld={3}>
                        <Product product = {product}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    </main>
    )
  }
}

export default Products;
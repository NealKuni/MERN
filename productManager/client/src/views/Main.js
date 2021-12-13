import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Router, Link } from '@reach/router';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import ProductEdit from '../components/ProductEdit';
import ProductDelete from '../components/ProductDelete';


const Main = () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            });
    },[])
    return (
        <div>
            <ProductForm/>
            <hr/>
            { loaded && <ProductList product={product}/> }
        </div>
    )
}
export default Main;


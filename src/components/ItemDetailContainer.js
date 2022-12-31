
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {customFetch} from '../untils/customFetch';
import ItemDetail from "./itemDetail";
const { data } = require('../untils/data');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { itemId } = useParams();
    

    useEffect(() => {
        customFetch(2000, data.find(item => { 
            if (itemId === undefined) return item;
            return item.id === parseInt(itemId)
          }))
            .then(response => setDato(response))
            .catch(err => console.log(err))
        }, [itemId])
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;
import ItemList from './ItemList';
import {customFetch} from '../untils/customFetch';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const { data } = require('../untils/data');


const ItemListContainer = () => {

  const [datos, setDatos]= useState([]);
  const { categoryId } = useParams();

  //componentDidUpDate
  useEffect(() => {

    //consulta a la BD
    customFetch(2000, data.filter(item => { 
      if (categoryId === undefined) return item;
      return item.catID === parseInt(categoryId)
    }))
      .then(response => setDatos(response))
      .catch(err => console.log(err))
  }, [categoryId])


  return (
    <ItemList datos={datos} />
  )
}

export default ItemListContainer;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

function Item(props) {
  return (

    <div className='card'>
      <Card.Img variant="top" src={props.img} className="img"/>
      <div className='card-body'>
        <h4 className='card-title'>{props.nombre}</h4>
        <h3><span ><ion-icon className='etiqueta' name="pricetag-outline"></ion-icon></span>|${props.precio}|</h3>
        <Button variant="success">Añadir al Carrito</Button> 
        | |
        <Button variant="info"><Link to={`/item/${props.id}`}>Detalles</Link></Button>

      </div>
      
    </div>
    

  );
}

export default Item;

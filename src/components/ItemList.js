import Item from './Item'
const ItemList = (props) => {
  return (
    <div className='container d-flex justify-content-center cards'>
      <div className=''>
        {
          props.datos.map(item => 
          <Item 
          key={item.id} 
          nombre={item.nombre} 
          desc={item.desc}
          precio={item.precio}
          img={item.img}
          id={item.id}
          stock={item.stock}
          />)
          
        }
     </div>
        
    </div>
  )
}

export default ItemList





import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ item }) => {


    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>
        {
            item && item.img
            ? 
            <DetailContainer >
                <WrapperDetail >
                    <ImgContainer>
                    <Card.Img  src={item.img} className="img"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.nombre}</Title>
                        <Desc>{item.desc}</Desc>
                        <Price>$ {item.precio}</Price>
                        <Desc>{item.stock} en stock</Desc>
                    </InfoContainer>
                </WrapperDetail>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;
import { useEffect, useState } from "react";
import { getProduct } from "../../services/homeService";
import Styled from "styled-components";

function Home() {

    const [products, setProducts] = useState([]);


    async function fetchProdutos() {
        const response = await getProduct();
        setProducts(response.content)
    }

    useEffect(() => {
        fetchProdutos()
    }, []);

    const Container = Styled.div`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 2% 0 ;
        font-family: 'Inter';
    `

    const CardContainer = Styled.div`
        text-align: center;
        border: 4px solid #f1f1f1;
        width: calc(33.33% - 1rem);
        margin-bottom: 20px;
    `

    const Image = Styled.img`
        width: 100%;
        height: auto;
        object-fit: cover;
    `

    const Title = Styled.h1`
        text-transform: uppercase;
        
    `

    const Descricao = Styled.h4`
    width: 75%;
    margin: auto;
    padding: auto;
    word-break: normal;
    `

    const Preco = Styled.p`
        font-size: 18px;
        font-weight: bold;
    `

    const Estoque = Styled.p`
        font-size: 12px;
        font-weight: bold;
    `

    const Status = Styled.p`
        font-size: 12px;
        font-weight: bold;
    `

    return (

        <Container>

            {
                products.length !== 0 ? (

                    products.map(product => (
                        <CardContainer key={product.id}>
                            <Image src={product.imagemPrincipal} alt="" />
                            <Title> {product.nomeProduto} </Title>
                            <Descricao>{product.descricaoProduto}</Descricao>
                            <Preco>Preço: R${product.precoProduto.toFixed(2)}</Preco>
                            <Estoque>Estoque: {product.qtdEstoque}</Estoque>
                            <Status>Status: {product.ativoInativo}</Status>
                        </CardContainer>
                    ))) : (console.log(products))}

        </Container>
    );
}

export default Home;
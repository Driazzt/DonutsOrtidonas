import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts } from './ProductsActions';
import { deleteProduct, getProducts } from '../../core/services/productFetch';
import { useNavigate } from 'react-router-dom'


export const ProductListComponent = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productReducer.products)
    const navigate = useNavigate();

    const goContact = () => {
        navigate("/contact")
    }

    const goHomePage = () => {
        navigate("/")
    }

    //! no se usará, cambiado a HomePage(provisional)
    const goProductList = () => {
        navigate("/productList")
    }

    const goCreateDonut = () => {
        navigate("/createDonut")
    }

    const goDonutDetail = (productId) => {
        navigate("/donutsDetails", {
            state: {
                productId
            }
        })
    }

    const loadProductList = async () => {
        const productAux = await getProducts()
        dispatch(
            loadProducts({
                products: productAux
            })
        )
    }

    useEffect(() => {
        loadProductList()
    }, [])

    const deleteHandler = async (productId) => {
        await deleteProduct(productId)
        await loadProductList()
    }

    return (
        <div>
            <div style={{ fontWeight: "bold" }}>
                <h2 style={{ marginTop: -70 }}>Best Donuts in Town</h2>
                <h5 style={{ marginTop: -10 }}>♥ Made with love ♥ </h5>
            </div>
            <br />
            <div>
                <button onClick={goHomePage} style={{ marginRight: 60 }}>Back Home</button>
                <button onClick={goCreateDonut}>Create your Donut!</button>
                <button onClick={goContact} style={{ marginLeft: 60 }}>Contact Us!</button>

            </div>
            <br />
            <br />

            {
                !products
                    ? <div>Loading...</div>
                    : (
                        //!añadido el flex+flexWrap para organizar los productos en filas + en el div el calc para los margenes y tamaño.
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
                            {
                                products.map((p, idx) => (
                                    <div style={{ display: "flex", flexDirection: "column", flex: "1 1 calc(20% - 40px)", padding: 20, justifyContent: "space-between", border: "1px solid #520b09", borderRadius: 50, alignItems: "center", gap: 20, marginBottom: 20 }} key={idx}>
                                        <span style={{ flex: 2, textAlign: "left", fontWeight: "bold" }}>{p.nombre}</span>
                                        <span style={{ flex: 1, textAlign: "center", fontWeight: "bold", color: "#FCBF66" }}>{p.tipo}</span>
                                        <div className="img" style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                                            <img style={{ width: 200, height: 160, cursor: "pointer" }} onClick={() => goDonutDetail(p._id)} src={p.imagen} />
                                        </div>
                                        <span style={{ flex: 1, textAlign: "center", fontWeight: "bold" }}>{p.precio}€</span>
                                    </div>
                                ))
                            }
                        </div>
                    )
            }
            <div>
                <button style={{ marginLeft: 20 }} onClick={goHomePage}>Home</button>
            </div>
        </div>
    )
}

export default ProductListComponent
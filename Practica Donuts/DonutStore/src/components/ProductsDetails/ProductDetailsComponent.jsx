import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { deleteProduct, getProductById, modifyProduct } from '../../core/services/productFetch'
import { loadProductId } from '../Products/ProductsActions'
import { modifyProductsAction } from './ProductDetailsActions'

const ProductDetailsComponent = () => {

    const dispatch = useDispatch()
    const product = useSelector((state) => state.productReducer.product)

    const navigate = useNavigate()
    const { state } = useLocation()
    const { productId } = state
    const [productInfo, setProductInfo] = useState(undefined)
    const [productInit, setProductInit] = useState(undefined)
    const [newProductModify, setNewProductModify] = useState(undefined)
    const [isEdit, setIsEdit] = useState(undefined)


    //! guardar (con dispatch para que lance la accion de modify) + IMP! pasarle los dos parametros
    //! productId y el modificado(newProductModify en este caso)

    const saveHandler = () => {
        modifyProduct(productId, newProductModify)
        setIsEdit(false)
        setProductInit(productInfo)

        dispatch(
            loadProductId({
                product: (productId, newProductModify)
            })
        )
    }

    //! cancel (para cancelar la operacion y volver al producto inicial)

    const cancelHandler = () => {
        setIsEdit(false)
        setProductInfo(productInit)
    }

    //! modifyhandler

    const productModifyHandler = (fieldName, fieldValue) => {
        setNewProductModify({
            ...newProductModify,
            [fieldName]: fieldValue
        })
    }

    //! HomePage
    const goHomePage = () => {
        navigate("/")
    }
    //! ProductList
    const goProductList = () => {
        navigate("/productList")
    }

    const load = async () => {
        const productAux = await getProductById(productId)

        dispatch(
            loadProductId({
                product: productAux
            })
        )
    }

    useEffect(() => {
        load();
    }, [])


    const deleteHandler = (productId) => {
        deleteProduct(productId)
        loadProductId
        navigate("/productList")
    }

    return (
        <div>
            <div>
                <div>
                    {
                        !product
                            ? <div>Loading...</div>
                            : (
                                <div style={{ display: "flex", flex: 1, justifyContent: "space-between", flexDirection: "column", alignItems: "center", gap: 20, color: 'black', fontWeight: 'bold', fontFamily: "Dunkin" }}>
                                    <div>
                                        {
                                            isEdit && (
                                                <>
                                                </>
                                            )
                                        }
                                        <div>
                                            <h2 style={{ marginTop: -70 }}>Best Donuts in Town</h2>
                                            <h5 style={{ marginTop: -10 }}>♥ Made with love ♥</h5>
                                        </div>

                                    </div>
                                    <div>
                                        <div>
                                            {/* <span ></span> */}
                                            {
                                                isEdit
                                                    ? <input type="text" name='nombre' placeholder='Introduce un nombre...' style={{ width: '63ch', height: "3ch", marginBottom: 15 }} onChange={(e) => productModifyHandler(e.target.name, e.target.value)} />
                                                    : <span style={{ color: "#520B09" }}>{product.nombre}</span>
                                            }
                                        </div>
                                        <div>
                                            {
                                                isEdit
                                                    ? <input type="string" name='imagen' placeholder='Introduce una URL imagen...' style={{ width: '63ch', height: "3ch", marginBottom: 15 }} onChange={(e) => productModifyHandler(e.target.name, e.target.value)} />
                                                    : <img src={product.imagen} style={{ width: 450 }} />
                                            }
                                        </div>
                                        <div>
                                            {/* <span style={{ marginLeft: 30 }}></span> */}
                                            {
                                                isEdit
                                                    ? <input type="text" name='tipo' placeholder='Introduce un tipo...' style={{ width: '63ch', height: "3ch", marginBottom: 15 }} onChange={(e) => productModifyHandler(e.target.name, e.target.value)} />
                                                    : <span style={{ color: "#520B09" }}>{product.tipo}</span>
                                            }
                                        </div>
                                        <div>
                                            {/* <span style={{ marginLeft: 10 }}>Precio: </span> */}
                                            {
                                                isEdit
                                                    ? <input type="number" name='precio' placeholder='Introduce un precio...' style={{ width: '63ch', height: "3ch", marginBottom: 15 }} onChange={(e) => productModifyHandler(e.target.name, e.target.value)} />
                                                    : <span style={{ color: "#520B09" }}>{product.precio}€</span>
                                            }
                                        </div>
                                    </div>
                                    <div style={{ marginBottom: 20 }}>
                                        <button onClick={() => setIsEdit(true)}>EDIT DONUT</button>
                                    </div>
                                    {
                                        isEdit && (
                                            <div>
                                                <button onClick={cancelHandler} style={{ marginRight: 20 }}>Cancel</button>
                                                <button onClick={saveHandler} style={{ marginLeft: 20 }}>Save</button>
                                            </div>
                                        )
                                    }
                                    <div>
                                        <button onClick={() => deleteHandler(product._id)} style={{ backgroundColor: '#F77196', color: "#520B09" }}>DELETE</button>
                                    </div>
                                    <div style={{ marginRight: 20 }}>
                                        <button style={{ marginRight: 20 }} onClick={goProductList}>Product List</button>
                                        <button onClick={goHomePage}>Back Home</button>
                                    </div>
                                </div>
                            )
                    }
                </div>
            </div>
        </div >
    )
}


export default ProductDetailsComponent
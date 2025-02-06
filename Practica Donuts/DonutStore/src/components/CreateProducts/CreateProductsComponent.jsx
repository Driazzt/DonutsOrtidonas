import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createProduct } from '../../core/services/productFetch'

export const CreateDonutComponent = () => {
    const navigate = useNavigate()

    const [newProduct, setNewProduct] = useState()
    const newDonutHandler = (fieldName, fieldValue) => {
        setNewProduct({
            ...newProduct,
            [fieldName]: fieldValue
        })
    }

     // Manejar la subida de archivos y conversión a Base64
     const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewProduct((newProduct) => ({
                    ...newProduct,
                    imagen: reader.result, // Guarda la imagen en base64
                }));
            };
            reader.readAsDataURL(file); // Convierte el archivo en base64
        }
    };

    // Verificar cambios en el estado del producto
    useEffect(() => {
        console.log("Producto actualizado:", newProduct);
    }, [newProduct]);

    const goHomePage = () => {
        navigate('/')
    }

    const goProductList = () => {
        navigate("/productList")
    }

    //! antiguo createHandler (sin restriccion)
    // const createHandler = () => {
    //     createProduct(newProduct)
    //     ('/')
    // }

    //! async-await + tryCatch para que si la respuesta es erronea, no haga el navigate.

    const createHandler = async () => {
        try {
            const response = await createProduct(newProduct)
            if (response) {
                navigate("/productList")
            }
        } catch (error) {
            console.error("error", error)
        }
    }

    return (
        <div>
            <div style={{ color: "black", fontFamily: "Dunkin", fontWeight: "bold" }}>
                <h2 style={{ marginTop: -70 }}>Best Donuts in Town</h2>
                <h5 style={{ marginTop: -10 }}>♥ Made with love ♥ </h5>
            </div>
            <br />
            <div style={{ marginTop: -20 }}>
                <h2>CREATE YOUR DONUT!</h2>
                <h3 style={{ marginTop: -15 }}>Fill this form to create your own donut:</h3>
            </div>
            <div style={{ marginTop: 20 }}>
                <div style={{ display: "flex", flex: 1, justifyContent: "center", flexDirection: "column", alignItems: "center", gap: 20, fontWeight: 'bold', marginBottom: 30 }}>
                    <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'start', alignItems: 'center', justifyContent: 'center', gap: 10, }}>
                        <span style={{ fontWeight: 'bold' }}>Nombre: </span>
                        <input type="text" style={{ width: '63ch' }} placeholder='Introduce un nombre...' name='nombre' onChange={(e) => newDonutHandler(e.target.name, e.target.value)} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'start', alignItems: 'center', justifyContent: 'center', gap: 10, marginLeft: 30 }}>
                        <span style={{ fontWeight: 'bold' }}>Tipo: </span>
                        <input type="text" style={{ width: '63ch' }} placeholder='Introduce un tipo...' name='tipo' onChange={(e) => newDonutHandler(e.target.name, e.target.value)} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'start', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                        <span style={{ fontWeight: 'bold' }}>Precio: </span>
                        <input type="number" style={{ width: '63ch' }} placeholder='Introduce un precio...' name='precio' onChange={(e) => newDonutHandler(e.target.name, e.target.value)} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'start', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                        <span style={{ fontWeight: 'bold' }}>Imagen: </span>
                        <input type="text" style={{ width: '63ch' }} placeholder='Introduce un URL de una imagen...' name='imagen' onChange={(e) => newDonutHandler(e.target.name, e.target.value)} />
                        <input type="file" accept="image/*" name='imagen' onChange={handleFileUpload} />
                    </div>
                </div>
                {/* Mostrar imagen en vista previa si existe */}
                {newProduct?.imagen && (
                        <img src={newProduct.imagen} alt="Vista previa" style={{ width: "200px", marginTop: "10px" }} />
                    )}
            </div>
            <div style={{ marginBottom: 40 }}>
                <button style={{ marginLeft: 30 }} onClick={createHandler}>Crear donut</button>
            </div>
            <div>
                <button style={{ marginRight: 20 }} onClick={goProductList}>Product List</button>
                <button style={{ marginLeft: 20 }} onClick={goHomePage}>Home</button>
            </div>
        </div>
    )
}

export default CreateDonutComponent
import { useEffect } from "react"
import { useState } from "react"

function Product() {
    const [products, setProduct] = useState([])
    const [form, setForm] = useState({ name: '', price: '', stock: '', description: '' })
    const [isEditing, setIsEditing] = useState(false)

    const fetchproduct = async () => {
        const response = await fetch('http://localhost:3000/product/')
        const data = await response.json()
        setProduct(data)
    }
    useEffect(() => {
        fetchproduct()
    }, [])

  

    return (
        <div style={{ marginTop: '30px' }}>
           

            <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ background: '#f8f9fa' }}>
                    <tr>
                        <th>ID</th><th>Name</th><th>Price</th><th>Description</th><th>Stocck</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map((p) => (
                            <tr key={p.p_id}>
                                <td>{p.p_id}</td>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                                <td>{p.description}</td>
                                <td>{p.stock}</td>
                                <td>
                                    <button
                                        onClick={() => handleEdit(p)}
                                        style={{
                                            backgroundColor: 'blue',
                                            color: 'white',
                                            padding: '10px 20px',
                                            borderRadius: '5px',
                                            border: 'none',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handledelete(p.id)}
                                        style={{
                                            backgroundColor: 'red',
                                            color: 'white',
                                            border: 'none',
                                            padding: '8px 12px',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr><td colSpan="5" style={{ textAlign: 'center' }}>No Products Found</td></tr>
                    )}
                </tbody>
            </table>

        </div>
    )

}

export default Product
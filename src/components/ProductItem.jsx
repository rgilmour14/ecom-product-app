function ProductItem({ product }) {
    return (
        <div className="product-item">
            <img src={product.image} alt={product.name}/>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p>Category: {product.category}</p>
        </div>
    )
}

export default ProductItem;
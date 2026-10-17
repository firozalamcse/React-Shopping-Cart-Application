import ProductCard from './ProductCard'

export default function ProductGrid({ products, onAdd, cartItems }) {
  if (!products.length) {
    return (
      <div className="no-results">
        <span className="no-results-icon">⌕</span>
        <h3>No products found</h3>
        <p>Try another search or choose a different category.</p>
      </div>
    )
  }

  const cartIds = new Set(cartItems.map((item) => item.id))
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAdd={onAdd}
          isAdded={cartIds.has(product.id)}
        />
      ))}
    </div>
  )
}

import { Check, Plus } from 'lucide-react'

export default function ProductCard({ product, onAdd, isAdded }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img className="product-image" src={product.image} alt={product.name} loading="lazy" />
        {product.badge && <span className={`product-badge ${product.badge === 'SALE' ? 'sale' : ''}`}>{product.badge}</span>}
        <button className={`quick-add ${isAdded ? 'added' : ''}`} onClick={() => onAdd(product)} aria-label={`Add ${product.name} to cart`}>
          {isAdded ? <Check size={17} /> : <Plus size={18} />}
        </button>
      </div>
      <div className="product-info">
        <div className="product-meta">
          <span>{product.category}</span>
          <span className="product-color">{product.color}</span>
        </div>
        <h3>{product.name}</h3>
        <div className="product-bottom">
          <div className="price-group">
            <span className="price">${product.price.toFixed(2)}</span>
            {product.oldPrice && <span className="old-price">${product.oldPrice.toFixed(2)}</span>}
          </div>
          <button className="text-add" onClick={() => onAdd(product)}>{isAdded ? 'Add another' : 'Add to bag'}</button>
        </div>
      </div>
    </article>
  )
}

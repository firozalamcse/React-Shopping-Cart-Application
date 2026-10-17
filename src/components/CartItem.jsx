import { Minus, Plus, Trash2 } from 'lucide-react'

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <article className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <div className="cart-item-title-row">
          <div>
            <p className="cart-item-category">{item.category}</p>
            <h3>{item.name}</h3>
          </div>
          <button className="remove-button" onClick={() => onRemove(item.id)} aria-label={`Remove ${item.name}`} title="Remove item">
            <Trash2 size={16} />
          </button>
        </div>
        <div className="cart-item-bottom">
          <div className="quantity-control" aria-label={`Quantity ${item.quantity}`}>
            <button onClick={() => onDecrease(item.id)} aria-label="Decrease quantity"><Minus size={13} /></button>
            <span>{item.quantity}</span>
            <button onClick={() => onIncrease(item.id)} aria-label="Increase quantity"><Plus size={13} /></button>
          </div>
          <strong>${(item.price * item.quantity).toFixed(2)}</strong>
        </div>
      </div>
    </article>
  )
}

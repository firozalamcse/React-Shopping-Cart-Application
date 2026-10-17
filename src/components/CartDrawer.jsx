import { ArrowRight, CheckCircle2, ShoppingBag, X } from 'lucide-react'
import { useEffect } from 'react'
import CartItem from './CartItem'

export default function CartDrawer({
  open,
  onClose,
  cartItems,
  totalItems,
  subtotal,
  onIncrease,
  onDecrease,
  onRemove,
  onCheckout,
}) {
  useEffect(() => {
    if (!open) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="drawer-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Shopping bag">
        <div className="drawer-header">
          <div>
            <p className="eyebrow">YOUR SELECTION</p>
            <h2>Your bag <span>({totalItems})</span></h2>
          </div>
          <button className="icon-button close-button" onClick={onClose} aria-label="Close cart"><X size={21} /></button>
        </div>

        {cartItems.length ? (
          <>
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrease={onIncrease}
                  onDecrease={onDecrease}
                  onRemove={onRemove}
                />
              ))}
            </div>
            <div className="drawer-footer">
              <div className="shipping-note"><CheckCircle2 size={16} /> You are one step closer to everyday joy.</div>
              <div className="subtotal-row"><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div>
              <p className="tax-note">Shipping and taxes calculated at checkout.</p>
              <button className="checkout-button" onClick={onCheckout}>Continue to checkout <ArrowRight size={17} /></button>
              <button className="continue-shopping" onClick={onClose}>Continue shopping</button>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <div className="empty-cart-icon"><ShoppingBag size={28} strokeWidth={1.3} /></div>
            <h3>Your bag is taking a little break</h3>
            <p>Find something lovely and it will show up here.</p>
            <button className="checkout-button" onClick={onClose}>Explore products <ArrowRight size={17} /></button>
          </div>
        )}
      </aside>
    </div>
  )
}

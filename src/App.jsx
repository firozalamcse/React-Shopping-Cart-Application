import { useCallback, useMemo, useState } from 'react'
import { ArrowDownRight, ArrowRight, Leaf, PackageCheck, RotateCcw, ShieldCheck, X } from 'lucide-react'
import Navbar from './components/Navbar'
import CategoryFilter from './components/CategoryFilter'
import ProductGrid from './components/ProductGrid'
import CartDrawer from './components/CartDrawer'
import { categories, products } from './data/products'
import { useCart } from './hooks/useCart'

export default function App() {
  const {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalItems,
    subtotal,
  } = useCart()

  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [cartOpen, setCartOpen] = useState(false)
  const [toast, setToast] = useState('')
  const [toastVersion, setToastVersion] = useState(0)

  const showToast = useCallback((message) => {
    setToast(message)
    setToastVersion((version) => version + 1)
    window.setTimeout(() => setToast(''), 2300)
  }, [])

  const handleAdd = (product) => {
    addToCart(product)
    showToast(`${product.name} added to your bag`)
  }

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()
    const matching = products.filter((product) => {
      const categoryMatch = activeCategory === 'All' || product.category === activeCategory
      const searchMatch = !normalizedSearch ||
        `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(normalizedSearch)
      return categoryMatch && searchMatch
    })

    if (sortBy === 'price-low') matching.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-high') matching.sort((a, b) => b.price - a.price)
    if (sortBy === 'name') matching.sort((a, b) => a.name.localeCompare(b.name))
    return matching
  }, [activeCategory, searchTerm, sortBy])

  const handleCheckout = () => {
    setCartOpen(false)
    showToast('Checkout is a demo feature. No payment was taken.')
  }

  return (
    <div id="top" className="app">
      <Navbar
        cartCount={totalItems}
        onCartClick={() => setCartOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={(value) => {
          setSearchTerm(value)
          if (categories.includes(value)) setActiveCategory(value)
          else if (value === '') setActiveCategory('All')
        }}
      />

      <main>
        <section className="hero page-shell">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> THE EVERYDAY EDIT</p>
            <h1>Good things.<br /><em>Better living.</em></h1>
            <p className="hero-description">Considered pieces for the spaces you love and the life you live. Simple by design. Made to stay.</p>
            <a className="hero-cta" href="#shop">Explore the collection <ArrowDownRight size={17} /></a>
            <div className="hero-footnote"><span className="tiny-dot" /> Thoughtfully selected. Always useful.</div>
          </div>
          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=90"
              alt="Calm modern living room with neutral furnishings"
            />
            <div className="hero-image-label">
              <span>01 / THE HOME EDIT</span>
              <strong>Make room for calm.</strong>
            </div>
            <div className="hero-sticker"><span>LIVE</span><span>WITH</span><span>INTENTION</span></div>
          </div>
          <div className="hero-index">F / 001</div>
        </section>

        <section className="benefit-strip">
          <div className="page-shell benefit-inner">
            <div><PackageCheck size={19} /><span>Carefully curated essentials</span></div>
            <div><Leaf size={19} /><span>Thoughtful everyday design</span></div>
            <div><RotateCcw size={19} /><span>Easy returns within 30 days</span></div>
            <div><ShieldCheck size={19} /><span>Secure and simple checkout</span></div>
          </div>
        </section>

        <section id="shop" className="shop-section page-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE COLLECTION</p>
              <h2>Objects with <em>purpose.</em></h2>
            </div>
            <p className="section-description">A little less noise. A little more meaning.<br />Meet your new everyday favourites.</p>
          </div>
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
          <div className="results-line">
            <span>{filteredProducts.length} thoughtfully selected pieces</span>
            {searchTerm && (
              <button className="clear-search" onClick={() => setSearchTerm('')}>Clear search <X size={13} /></button>
            )}
          </div>
          <ProductGrid products={filteredProducts} onAdd={handleAdd} cartItems={cartItems} />
        </section>

        <section id="story" className="story-section">
          <div className="page-shell story-inner">
            <div className="story-mark">f.</div>
            <div className="story-copy">
              <p className="eyebrow">A SMALLER WAY TO SHOP</p>
              <h2>Keep what matters.<br /><em>Love what you keep.</em></h2>
              <p>Forma is built around a simple idea. Everyday objects should feel good to use and good to live with. We choose pieces for their usefulness, honest materials, and lasting appeal.</p>
              <a href="#shop" className="story-link">Find your everyday favourite <ArrowRight size={16} /></a>
            </div>
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85" alt="Warm minimal interior details" loading="lazy" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="page-shell footer-main">
          <a className="brand footer-brand" href="#top">forma<span>.</span></a>
          <p>Everyday essentials. Thoughtfully found.</p>
          <a href="#top" className="back-top">Back to top ↑</a>
        </div>
        <div className="page-shell footer-bottom">
          <span>© 2026 Forma. Student project demo.</span>
          <span>Designed with care <span className="footer-heart">♥</span></span>
        </div>
      </footer>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        totalItems={totalItems}
        subtotal={subtotal}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
      />

      {toast && (
        <div key={toastVersion} className="toast" role="status">
          <span className="toast-dot" />
          {toast}
          <button onClick={() => setToast('')} aria-label="Dismiss notification"><X size={15} /></button>
        </div>
      )}
    </div>
  )
}

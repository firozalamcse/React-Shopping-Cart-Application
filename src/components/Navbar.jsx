import { Heart, Search, ShoppingBag, Sparkles } from 'lucide-react'

export default function Navbar({ cartCount, onCartClick, searchTerm, onSearchChange }) {
  return (
    <header className="site-header">
      <div className="announcement">
        <Sparkles size={13} strokeWidth={1.8} />
        <span>Thoughtful finds for everyday living</span>
      </div>
      <nav className="navbar page-shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Forma home">
          forma<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#shop">Shop all</a>
          <a href="#shop" onClick={() => onSearchChange('Home')}>Home</a>
          <a href="#shop" onClick={() => onSearchChange('Accessories')}>Accessories</a>
          <a href="#story">Our story</a>
        </div>
        <div className="nav-actions">
          <label className="search-box">
            <Search size={17} />
            <input
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search products"
              aria-label="Search products"
            />
          </label>
          <button className="icon-button wishlist-button" aria-label="Wishlist" title="Wishlist coming soon">
            <Heart size={20} strokeWidth={1.7} />
          </button>
          <button className="cart-button" onClick={onCartClick} aria-label={`Open cart with ${cartCount} items`}>
            <ShoppingBag size={19} strokeWidth={1.8} />
            <span className="cart-label">Bag</span>
            <span className="cart-count">{cartCount}</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

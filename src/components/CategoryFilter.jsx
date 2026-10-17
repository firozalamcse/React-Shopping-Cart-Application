import { SlidersHorizontal } from 'lucide-react'

export default function CategoryFilter({ categories, activeCategory, onChange, sortBy, onSortChange }) {
  return (
    <div className="catalog-toolbar">
      <div className="category-list" aria-label="Filter by category">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-chip ${activeCategory === category ? 'active' : ''}`}
            onClick={() => onChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <label className="sort-select">
        <SlidersHorizontal size={15} />
        <span className="sort-label">Sort</span>
        <select value={sortBy} onChange={(event) => onSortChange(event.target.value)} aria-label="Sort products">
          <option value="featured">Featured</option>
          <option value="price-low">Price: low to high</option>
          <option value="price-high">Price: high to low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </label>
    </div>
  )
}

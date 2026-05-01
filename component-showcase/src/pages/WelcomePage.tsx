import { Link } from 'react-router-dom';
import { categories, components } from '../data/components';

export default function WelcomePage() {
  return (
    <div className="showcase-welcome">
      <div className="showcase-welcome-logo">U</div>
      <h1>UBS Design System</h1>
      <p>
        A comprehensive React component library enforcing UBS brand guidelines.
        Browse components by category, explore interactive examples, and discover the
        full range of variants and props available.
      </p>

      <div className="showcase-stats">
        <div className="showcase-stat-item">
          <div className="showcase-stat-value">{components.length}</div>
          <div className="showcase-stat-label">Components</div>
        </div>
        <div className="showcase-stat-item">
          <div className="showcase-stat-value">{categories.length}</div>
          <div className="showcase-stat-label">Categories</div>
        </div>
        <div className="showcase-stat-item">
          <div className="showcase-stat-value">
            {components.reduce((acc, c) => acc + (c.variants?.length ?? 0), 0)}
          </div>
          <div className="showcase-stat-label">Variants</div>
        </div>
      </div>

      <div className="showcase-category-cards">
        {categories.map((cat) => (
          <Link key={cat.id} to={cat.path} className="showcase-category-card">
            <div className="showcase-category-card-icon">{cat.icon}</div>
            <div className="showcase-category-card-name">{cat.name}</div>
            <div className="showcase-category-card-count">{cat.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

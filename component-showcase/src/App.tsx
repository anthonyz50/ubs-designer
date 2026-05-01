import { useState, useCallback } from 'react';
import { Routes, Route, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { categories, searchComponents } from './data/components';

// Pages
import WelcomePage from './pages/WelcomePage';
import NavigationPage from './pages/NavigationPage';
import InputPage from './pages/InputPage';
import ContentDisplayPage from './pages/ContentDisplayPage';
import FeedbackPage from './pages/FeedbackPage';
import ChartsPage from './pages/ChartsPage';
import LayoutPage from './pages/LayoutPage';
import SearchResultsPage from './pages/SearchResultsPage';
import DemoLayoutPage from './pages/DemoLayoutPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const toggleTheme = useCallback(() => {
    setDarkMode((prev) => {
      const next = !prev;
      document.documentElement.setAttribute('data-ubs-theme', next ? 'dark' : 'light');
      return next;
    });
  }, []);

  const handleSearch = useCallback(
    (value: string) => {
      setSearch(value);
      if (value.trim()) {
        navigate(`/search?q=${encodeURIComponent(value.trim())}`);
      } else if (location.pathname === '/search') {
        navigate('/');
      }
    },
    [navigate, location.pathname]
  );

  const searchResults = searchComponents(search);

  return (
    <div className="showcase-layout">
      {/* Top Bar */}
      <header className="showcase-topbar">
        <div className="showcase-topbar-left">
          <NavLink to="/" className="showcase-topbar-logo" onClick={() => setSearch('')}>
            <div className="showcase-topbar-logo-icon">U</div>
            <span className="showcase-topbar-title">
              UBS Design System
              <span className="showcase-topbar-subtitle">Component Showcase</span>
            </span>
          </NavLink>
        </div>
        <div className="showcase-topbar-right">
          <div className="showcase-search">
            <span className="showcase-search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search components..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <button className="showcase-theme-toggle" onClick={toggleTheme}>
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </header>

      <div className="showcase-body">
        {/* Sidebar */}
        <nav className="showcase-sidebar">
          <div className="showcase-sidebar-section">
            <div className="showcase-sidebar-heading">Overview</div>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `showcase-sidebar-link${isActive && !search ? ' active' : ''}`
              }
              onClick={() => setSearch('')}
            >
              <span className="showcase-sidebar-icon">🏠</span>
              Getting Started
            </NavLink>
          </div>

          <div className="showcase-sidebar-section">
            <div className="showcase-sidebar-heading">Demos</div>
            <NavLink
              to="/demo-layout"
              className={({ isActive }) =>
                `showcase-sidebar-link${isActive && !search ? ' active' : ''}`
              }
              onClick={() => setSearch('')}
            >
              <span className="showcase-sidebar-icon">📐</span>
              Landing Page
            </NavLink>
          </div>

          <div className="showcase-sidebar-section">
            <div className="showcase-sidebar-heading">Categories</div>
            {categories.map((cat) => (
              <NavLink
                key={cat.id}
                to={cat.path}
                className={({ isActive }) =>
                  `showcase-sidebar-link${isActive && !search ? ' active' : ''}`
                }
                onClick={() => setSearch('')}
              >
                <span className="showcase-sidebar-icon">{cat.icon}</span>
                {cat.name}
                <span className="showcase-sidebar-count">
                  {cat.id === 'navigation'
                    ? 8
                    : cat.id === 'input'
                    ? 20
                    : cat.id === 'content-display'
                    ? 23
                    : cat.id === 'feedback'
                    ? 14
                    : cat.id === 'charts'
                    ? 4
                    : 12}
                </span>
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className="showcase-main">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/navigation" element={<NavigationPage />} />
            <Route path="/input" element={<InputPage />} />
            <Route path="/content-display" element={<ContentDisplayPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/charts" element={<ChartsPage />} />
            <Route path="/layout" element={<LayoutPage />} />
            <Route path="/demo-layout" element={<DemoLayoutPage />} />
            <Route
              path="/search"
              element={<SearchResultsPage results={searchResults} query={search} />}
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;

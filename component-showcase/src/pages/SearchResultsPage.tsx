import type { ComponentInfo } from '../data/components';
import { componentRenderers } from './renderers';
import ComponentCard from '../components/ComponentCard';

interface SearchResultsPageProps {
  results: ComponentInfo[];
  query: string;
}

export default function SearchResultsPage({ results, query }: SearchResultsPageProps) {
  if (!query.trim()) {
    return (
      <div className="showcase-no-results">
        <div className="showcase-no-results-icon">🔍</div>
        <p>Type a component name to search</p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="showcase-no-results">
        <div className="showcase-no-results-icon">😕</div>
        <p>No components found for "{query}"</p>
      </div>
    );
  }

  return (
    <>
      <div className="showcase-page-header">
        <div className="showcase-page-title">Search Results</div>
        <div className="showcase-page-description">
          Found {results.length} component{results.length !== 1 ? 's' : ''} matching "{query}"
        </div>
      </div>
      <div className="showcase-grid">
        {results.map((comp) => {
          const renderer = componentRenderers[comp.name];
          return (
            <ComponentCard key={comp.name} info={comp}>
              {(variant) =>
                renderer ? renderer(variant) : <div style={{ color: '#999' }}>{comp.name}</div>
              }
            </ComponentCard>
          );
        })}
      </div>
    </>
  );
}

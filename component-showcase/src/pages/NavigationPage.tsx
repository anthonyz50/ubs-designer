import { getComponentsByCategory } from '../data/components';
import CategoryPage from '../components/CategoryPage';
import ComponentCard from '../components/ComponentCard';
import { componentRenderers } from './renderers';

const components = getComponentsByCategory('navigation');

export default function NavigationPage() {
  return (
    <CategoryPage
      title="Navigation"
      description="Components for navigating between pages, sections, and hierarchical content structures."
      icon="🧭"
      count={components.length}
    >
      {components.map((comp) => {
        const renderer = componentRenderers[comp.name];
        return (
          <ComponentCard key={comp.name} info={comp}>
            {(variant) =>
              renderer ? renderer(variant) : <div style={{ color: '#999' }}>{comp.name}</div>
            }
          </ComponentCard>
        );
      })}
    </CategoryPage>
  );
}

import { getComponentsByCategory } from '../data/components';
import CategoryPage from '../components/CategoryPage';
import ComponentCard from '../components/ComponentCard';
import { componentRenderers } from './renderers';

const components = getComponentsByCategory('layout');

export default function LayoutPage() {
  return (
    <CategoryPage
      title="Layout & Patterns"
      description="Structural layout components, branding elements, and decorative patterns."
      icon="🏗️"
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

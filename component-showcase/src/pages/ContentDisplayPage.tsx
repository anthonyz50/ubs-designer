import { getComponentsByCategory } from '../data/components';
import CategoryPage from '../components/CategoryPage';
import ComponentCard from '../components/ComponentCard';
import { componentRenderers } from './renderers';

const components = getComponentsByCategory('content-display');

export default function ContentDisplayPage() {
  return (
    <CategoryPage
      title="Content Display"
      description="Components for presenting content, data, and media in structured layouts."
      icon="📄"
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

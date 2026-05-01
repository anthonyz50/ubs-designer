import { getComponentsByCategory } from '../data/components';
import CategoryPage from '../components/CategoryPage';
import ComponentCard from '../components/ComponentCard';
import { componentRenderers } from './renderers';

const components = getComponentsByCategory('input');

export default function InputPage() {
  return (
    <CategoryPage
      title="Input"
      description="Interactive form controls, buttons, selectors, and input fields for user data entry."
      icon="✏️"
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

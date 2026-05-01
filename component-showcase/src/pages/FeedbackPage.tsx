import { getComponentsByCategory } from '../data/components';
import CategoryPage from '../components/CategoryPage';
import ComponentCard from '../components/ComponentCard';
import { componentRenderers } from './renderers';

const components = getComponentsByCategory('feedback');

export default function FeedbackPage() {
  return (
    <CategoryPage
      title="Feedback"
      description="User feedback components including notifications, alerts, status indicators, and loading states."
      icon="💬"
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

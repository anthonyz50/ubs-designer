import { useState, type ReactNode } from 'react';
import type { ComponentInfo } from '../data/components';

interface ComponentCardProps {
  info: ComponentInfo;
  children: (activeVariant: string) => ReactNode;
}

export default function ComponentCard({ info, children }: ComponentCardProps) {
  const [activeVariant, setActiveVariant] = useState(info.variants?.[0] ?? '');

  return (
    <div className="showcase-card">
      <div className="showcase-card-preview">
        {children(activeVariant)}
      </div>
      <div className="showcase-card-body">
        <div className="showcase-card-name">{info.name}</div>
        <div className="showcase-card-description">{info.description}</div>

        {info.variants && info.variants.length > 1 && (
          <div className="showcase-card-controls">
            {info.variants.map((v) => (
              <button
                key={v}
                className={`showcase-variant-btn${activeVariant === v ? ' active' : ''}`}
                onClick={() => setActiveVariant(v)}
              >
                {v}
              </button>
            ))}
          </div>
        )}

        {info.props.length > 0 && (
          <div className="showcase-props">
            <div className="showcase-props-title">Key Props</div>
            <div className="showcase-props-list">
              {info.props.map((p) => (
                <span key={p.name} className="showcase-prop-item">
                  <span className="showcase-prop-name">{p.name}</span>
                  {': '}
                  <span className="showcase-prop-type">{p.type}</span>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

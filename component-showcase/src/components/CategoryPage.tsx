import type { ReactNode } from 'react';

interface CategoryPageProps {
  title: string;
  description: string;
  icon: string;
  count: number;
  children: ReactNode;
}

export default function CategoryPage({ title, description, icon, count, children }: CategoryPageProps) {
  return (
    <>
      <div className="showcase-page-header">
        <div className="showcase-page-title">
          {icon} {title}
        </div>
        <div className="showcase-page-description">{description}</div>
        <div className="showcase-page-meta">
          <span className="showcase-page-count">{count} components</span>
        </div>
      </div>
      <div className="showcase-grid">{children}</div>
    </>
  );
}

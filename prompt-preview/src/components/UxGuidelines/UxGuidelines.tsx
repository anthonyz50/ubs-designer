import { useState, useCallback } from 'react';
import {
  UX_GUIDELINE_CATEGORIES,
  CHECKLISTS,
} from './uxGuidelinesData';
import type {
  GuidelineCategory,
  GuidelineSection,
  ChecklistData,
} from './uxGuidelinesData';
import styles from './UxGuidelines.module.css';

type ActiveTab = 'overview' | 'checklists';

export function UxGuidelines() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [selectedCategory, setSelectedCategory] =
    useState<GuidelineCategory | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const handleToggleCheck = useCallback((key: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  const handleBack = useCallback(() => {
    setSelectedCategory(null);
  }, []);

  return (
    <div className={styles.panel}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>UX Best Practices</h2>
        <p className={styles.subtitle}>
          Official UBS Web Publishing Guidelines for UX design
        </p>
        <a
          className={styles.sourceLink}
          href="https://www.ubs.com/fx/en/web-publishing-guidelines/ux-best-practices.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source on ubs.com ↗
        </a>
      </div>

      {/* Tab bar */}
      <div className={styles.tabBar}>
        <button
          className={styles.tab}
          data-active={activeTab === 'overview'}
          onClick={() => {
            setActiveTab('overview');
            setSelectedCategory(null);
          }}
        >
          Guidelines
        </button>
        <button
          className={styles.tab}
          data-active={activeTab === 'checklists'}
          onClick={() => setActiveTab('checklists')}
        >
          Checklists
        </button>
      </div>

      {/* Body */}
      <div className={styles.body}>
        {activeTab === 'overview' && !selectedCategory && (
          <OverviewView onSelect={setSelectedCategory} />
        )}
        {activeTab === 'overview' && selectedCategory && (
          <CategoryView category={selectedCategory} onBack={handleBack} />
        )}
        {activeTab === 'checklists' && (
          <ChecklistsView
            checkedItems={checkedItems}
            onToggle={handleToggleCheck}
          />
        )}
      </div>
    </div>
  );
}

// ─── Overview: category cards ────────────────────────────────

function OverviewView({
  onSelect,
}: {
  onSelect: (cat: GuidelineCategory) => void;
}) {
  return (
    <>
      <div className={styles.categoryOverview}>
        {UX_GUIDELINE_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className={styles.categoryCard}
            onClick={() => onSelect(cat)}
          >
            <div className={styles.categoryIcon}>{cat.icon}</div>
            <h3 className={styles.categoryTitle}>{cat.title}</h3>
            <p className={styles.categoryDescription}>{cat.description}</p>
            <span className={styles.categorySectionCount}>
              {cat.sections.length} topic{cat.sections.length !== 1 ? 's' : ''}
            </span>
          </div>
        ))}
      </div>

      {/* Quick-reference: all key takeaways */}
      {UX_GUIDELINE_CATEGORIES.flatMap((cat) => cat.sections).map(
        (section) => (
          <SectionView key={section.id} section={section} />
        ),
      )}
    </>
  );
}

// ─── Category deep-dive ──────────────────────────────────────

function CategoryView({
  category,
  onBack,
}: {
  category: GuidelineCategory;
  onBack: () => void;
}) {
  return (
    <>
      <button className={styles.backButton} onClick={onBack}>
        ← Back to overview
      </button>
      <h2 className={styles.sectionTitle}>
        {category.icon} {category.title}
      </h2>
      <p className={styles.sectionDescription}>{category.description}</p>
      <div style={{ marginTop: 20 }}>
        {category.sections.map((section) => (
          <SectionView key={section.id} section={section} />
        ))}
      </div>
    </>
  );
}

// ─── Single section ──────────────────────────────────────────

function SectionView({ section }: { section: GuidelineSection }) {
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>{section.title}</h3>
        <p className={styles.sectionDescription}>{section.description}</p>
      </div>

      {/* Key takeaways */}
      <div className={styles.takeaways}>
        <div className={styles.takeawaysTitle}>Key Takeaways</div>
        <ul className={styles.takeawaysList}>
          {section.keyTakeaways.map((item, i) => (
            <li key={i} className={styles.takeawayItem}>
              <span className={styles.takeawayBullet} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Guideline cards */}
      <div className={styles.guidelinesGrid}>
        {section.guidelines.map((g, i) => (
          <div key={i} className={styles.guidelineCard}>
            <h4 className={styles.guidelineTitle}>{g.title}</h4>
            <p className={styles.guidelineDescription}>{g.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Checklists ──────────────────────────────────────────────

function ChecklistsView({
  checkedItems,
  onToggle,
}: {
  checkedItems: Set<string>;
  onToggle: (key: string) => void;
}) {
  return (
    <>
      {CHECKLISTS.map((checklist) => (
        <ChecklistView
          key={checklist.id}
          checklist={checklist}
          checkedItems={checkedItems}
          onToggle={onToggle}
        />
      ))}
    </>
  );
}

function ChecklistView({
  checklist,
  checkedItems,
  onToggle,
}: {
  checklist: ChecklistData;
  checkedItems: Set<string>;
  onToggle: (key: string) => void;
}) {
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>{checklist.title}</h3>
        <p className={styles.sectionDescription}>{checklist.description}</p>
      </div>

      {checklist.groups.map((group) => (
        <div key={group.category} className={styles.checklistGroup}>
          <h4 className={styles.checklistGroupTitle}>{group.category}</h4>
          <ul className={styles.checklistItems}>
            {group.items.map((item) => {
              const key = `${checklist.id}:${group.category}:${item}`;
              const checked = checkedItems.has(key);
              return (
                <li
                  key={key}
                  className={styles.checklistItem}
                  data-checked={checked}
                  onClick={() => onToggle(key)}
                >
                  <span className={styles.checkboxIcon}>
                    {checked && <span className={styles.checkmark}>✓</span>}
                  </span>
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

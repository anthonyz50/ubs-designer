import { useState, useMemo, useCallback } from 'react';
import { UbsIcon } from '../common/UbsIcon';
import { CATALOGUE, CATEGORIES } from './componentCatalogue';
import type { Category, ComponentEntry } from './componentCatalogue';
import { componentRenderers } from './componentRenderers';
import styles from './ComponentLibrary.module.css';

export function ComponentLibrary() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [activeVariant, setActiveVariant] = useState<string>('');

  // Filter catalogue
  const filtered = useMemo(() => {
    let items = CATALOGUE;
    if (activeCategory) {
      items = items.filter((c) => c.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.tags.some((t) => t.includes(q)),
      );
    }
    return items;
  }, [search, activeCategory]);

  // Group by category
  const grouped = useMemo(() => {
    const map = new Map<Category, ComponentEntry[]>();
    for (const item of filtered) {
      const list = map.get(item.category) ?? [];
      list.push(item);
      map.set(item.category, list);
    }
    return map;
  }, [filtered]);

  const selected = useMemo(
    () => CATALOGUE.find((c) => c.name === selectedComponent) ?? null,
    [selectedComponent],
  );

  const handleSelect = useCallback((name: string) => {
    setSelectedComponent(name);
    const entry = CATALOGUE.find((c) => c.name === name);
    setActiveVariant(entry?.variants[0] ?? '');
  }, []);

  const handleCategoryToggle = useCallback((cat: Category) => {
    setActiveCategory((prev) => (prev === cat ? null : cat));
  }, []);

  return (
    <div className={styles.library}>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        <input
          className={styles.searchBox}
          type="text"
          placeholder="Search components..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className={styles.categoryPills}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={styles.categoryPill}
              data-active={activeCategory === cat}
              onClick={() => handleCategoryToggle(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <span className={styles.resultCount}>
          {filtered.length} component{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Body */}
      <div className={styles.body}>
        {/* Component list */}
        <div className={styles.componentList}>
          {CATEGORIES.map((cat) => {
            const items = grouped.get(cat);
            if (!items || items.length === 0) return null;
            return (
              <div key={cat} className={styles.categoryGroup}>
                <div className={styles.categoryHeading}>{cat}</div>
                {items.map((entry) => (
                  <button
                    key={entry.name}
                    className={styles.componentItem}
                    data-active={selectedComponent === entry.name}
                    onClick={() => handleSelect(entry.name)}
                  >
                    {entry.name}
                  </button>
                ))}
              </div>
            );
          })}
        </div>

        {/* Detail panel */}
        <div className={styles.detailPanel}>
          {selected ? (
            <>
              <div className={styles.detailHeader}>
                <span className={styles.detailName}>{selected.name}</span>
                <span className={styles.detailCategory}>{selected.category}</span>
              </div>
              <div className={styles.detailDescription}>{selected.description}</div>
              <div className={styles.detailTags}>
                {selected.tags.map((tag) => (
                  <span key={tag} className={styles.detailTag}>{tag}</span>
                ))}
              </div>

              {/* Variant tabs */}
              {selected.variants.length > 1 && (
                <div className={styles.variantTabs}>
                  {selected.variants.map((v) => (
                    <button
                      key={v}
                      className={styles.variantTab}
                      data-active={activeVariant === v}
                      onClick={() => setActiveVariant(v)}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              )}

              {/* Live preview */}
              <div className={styles.previewCanvas}>
                <div className={styles.previewCanvasInner}>
                  {componentRenderers[selected.name]
                    ? componentRenderers[selected.name](activeVariant)
                    : <span style={{ color: 'var(--ubs-text-tertiary)' }}>No renderer available for {selected.name}</span>}
                </div>
              </div>
            </>
          ) : (
            <div className={styles.emptyDetail}>
              <span className={styles.emptyDetailIcon}>
                <UbsIcon name="search" size={48} />
              </span>
              <span className={styles.emptyDetailText}>
                Select a component from the list to preview it
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import { useState, useCallback } from 'react';
import type {
  DesignModel,
  ComponentModel,
  PageModel,
  SectionModel,
  InteractionState,
  ViewportSize,
} from '../../types';
import { UbsIcon } from '../common/UbsIcon';
import { EmptyState } from '../common/EmptyState';
import { ComponentRenderer } from './ComponentRenderer';
import { InlineEditor } from '../InlineEditor/InlineEditor';
import styles from './PreviewPanel.module.css';

interface PreviewPanelProps {
  model: DesignModel | null;
  currentPageId: string;
  currentState: InteractionState;
  viewport: ViewportSize;
  onPageChange: (pageId: string) => void;
  onStateChange: (state: InteractionState) => void;
  onViewportChange: (viewport: ViewportSize) => void;
  onComponentUpdate?: (updatedComponent: ComponentModel) => void;
}

const ALL_STATES: InteractionState[] = [
  'default',
  'loading',
  'empty',
  'error',
  'success',
  'confirmation',
  'progress',
];

function SectionRenderer({
  section,
  onNavigate,
  editMode,
  selectedComponentId,
  onSelectComponent,
}: {
  section: SectionModel;
  onNavigate?: (pageId: string) => void;
  editMode?: boolean;
  selectedComponentId?: string | null;
  onSelectComponent?: (component: ComponentModel, rect: DOMRect) => void;
}) {
  const isSidebarContent = section.layout === 'sidebar-content';
  const isSplitEqual = section.layout === 'split-equal';
  const isHeaderBodyFooter = section.layout === 'header-body-footer';

  const layoutClass = (() => {
    switch (section.layout) {
      case 'grid':
      case 'grid-auto':
        return styles.sectionGrid;
      case 'flex-row':
        return styles.sectionFlexRow;
      case 'flex-between':
        return styles.sectionFlexBetween;
      case 'sidebar-content':
        return 'ubs-sidebar-content';
      case 'split-equal':
        return 'ubs-split-view';
      case 'header-body-footer':
        return styles.sectionStack;
      case 'stack':
      default:
        return styles.sectionStack;
    }
  })();

  if (isHeaderBodyFooter && section.components.length >= 2) {
    const header = section.components[0];
    const footer = section.components[section.components.length - 1];
    const body = section.components.slice(1, -1);
    return (
      <div className={styles.section}>
        {section.title && <h3 className={styles.sectionTitle}>{section.title}</h3>}
        <div className={styles.sectionStack} data-spacing={section.spacing ?? 'md'}>
          <div>
            <ComponentRenderer
              key={header.id}
              component={header}
              onNavigate={onNavigate}
              editMode={editMode}
              selectedComponentId={selectedComponentId}
              onSelectComponent={onSelectComponent}
            />
          </div>
          <div className={styles.sectionStack} data-spacing={section.spacing ?? 'md'}>
            {body.map((component) => (
              <ComponentRenderer
                key={component.id}
                component={component}
                onNavigate={onNavigate}
                editMode={editMode}
                selectedComponentId={selectedComponentId}
                onSelectComponent={onSelectComponent}
              />
            ))}
          </div>
          <div>
            <ComponentRenderer
              key={footer.id}
              component={footer}
              onNavigate={onNavigate}
              editMode={editMode}
              selectedComponentId={selectedComponentId}
              onSelectComponent={onSelectComponent}
            />
          </div>
        </div>
      </div>
    );
  }

  if (isSplitEqual && section.components.length >= 2) {
    const left = section.components.slice(0, Math.ceil(section.components.length / 2));
    const right = section.components.slice(Math.ceil(section.components.length / 2));
    return (
      <div className={styles.section}>
        {section.title && <h3 className={styles.sectionTitle}>{section.title}</h3>}
        <div className={layoutClass}>
          <div className="ubs-split-view-list">
            {left.map((component) => (
              <ComponentRenderer
                key={component.id}
                component={component}
                onNavigate={onNavigate}
                editMode={editMode}
                selectedComponentId={selectedComponentId}
                onSelectComponent={onSelectComponent}
              />
            ))}
          </div>
          <div className="ubs-split-view-detail">
            {right.map((component) => (
              <ComponentRenderer
                key={component.id}
                component={component}
                onNavigate={onNavigate}
                editMode={editMode}
                selectedComponentId={selectedComponentId}
                onSelectComponent={onSelectComponent}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.section}>
      {section.title && <h3 className={styles.sectionTitle}>{section.title}</h3>}
      <div className={layoutClass} data-spacing={section.spacing ?? 'md'}>
        {section.components.map((component) => (
          <ComponentRenderer
            key={component.id}
            component={component}
            onNavigate={onNavigate}
            editMode={editMode}
            selectedComponentId={selectedComponentId}
            onSelectComponent={onSelectComponent}
          />
        ))}
      </div>
    </div>
  );
}

function PageRenderer({
  page,
  onNavigate,
  editMode,
  selectedComponentId,
  onSelectComponent,
}: {
  page: PageModel;
  onNavigate?: (pageId: string) => void;
  editMode?: boolean;
  selectedComponentId?: string | null;
  onSelectComponent?: (component: ComponentModel, rect: DOMRect) => void;
}) {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{page.title}</h1>
        {page.description && (
          <p className={styles.pageDescription}>{page.description}</p>
        )}
      </div>

      {page.sections.map((section) => (
        <SectionRenderer
          key={section.id}
          section={section}
          onNavigate={onNavigate}
          editMode={editMode}
          selectedComponentId={selectedComponentId}
          onSelectComponent={onSelectComponent}
        />
      ))}

      {(page.primaryAction || page.secondaryAction) && (
        <div className={styles.pageActions}>
          {page.primaryAction && (
            <button
              className="ubs-btn ubs-btn-primary"
              onClick={() =>
                page.primaryAction?.navigateTo &&
                onNavigate?.(page.primaryAction.navigateTo)
              }
            >
              {page.primaryAction.label}
            </button>
          )}
          {page.secondaryAction && (
            <button
              className="ubs-btn ubs-btn-secondary"
              onClick={() =>
                page.secondaryAction?.navigateTo &&
                onNavigate?.(page.secondaryAction.navigateTo)
              }
            >
              {page.secondaryAction.label}
            </button>
          )}
        </div>
      )}

      {page.footerText && (
        <p className={styles.pageFooter}>{page.footerText}</p>
      )}
    </div>
  );
}

export function PreviewPanel({
  model,
  currentPageId,
  currentState,
  viewport,
  onPageChange,
  onStateChange,
  onViewportChange,
  onComponentUpdate,
}: PreviewPanelProps) {
  const [editMode, setEditMode] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<ComponentModel | null>(null);
  const [editorPosition, setEditorPosition] = useState<{ top: number; left: number } | null>(null);

  const handleSelectComponent = useCallback(
    (component: ComponentModel, rect: DOMRect) => {
      setSelectedComponent(component);
      setEditorPosition({
        top: rect.top,
        left: rect.right + 12,
      });
    },
    [],
  );

  const handleEditorClose = useCallback(() => {
    setSelectedComponent(null);
    setEditorPosition(null);
  }, []);

  const handleEditorUpdate = useCallback(
    (updatedComponent: ComponentModel) => {
      setSelectedComponent(updatedComponent);
      onComponentUpdate?.(updatedComponent);
    },
    [onComponentUpdate],
  );

  const handleToggleEditMode = useCallback(() => {
    setEditMode((prev) => {
      if (prev) {
        // Turning off edit mode: deselect
        setSelectedComponent(null);
        setEditorPosition(null);
      }
      return !prev;
    });
  }, []);

  if (!model) {
    return (
      <EmptyState
        icon={<UbsIcon name="eye" size={32} />}
        title="No preview available"
        description="Enter a prompt and click Generate to see a live preview of your design."
      />
    );
  }

  const currentPage = model.pages.find((p) => p.id === currentPageId) ?? model.pages[0];

  return (
    <div className={styles.panel}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarGroup}>
          <span className={styles.toolbarLabel}>Page:</span>
          {model.pages.map((page) => (
            <button
              key={page.id}
              className={styles.pagePill}
              data-active={page.id === currentPageId}
              onClick={() => onPageChange(page.id)}
            >
              {page.title}
            </button>
          ))}
        </div>

        <div className={styles.separator} />

        <div className={styles.toolbarGroup}>
          <span className={styles.toolbarLabel}>State:</span>
          {ALL_STATES.map((state) => (
            <button
              key={state}
              className={styles.statePill}
              data-active={state === currentState}
              onClick={() => onStateChange(state)}
            >
              {state}
            </button>
          ))}
        </div>

        <div className={styles.separator} />

        <div className={styles.toolbarGroup}>
          <button
            className={styles.viewportBtn}
            data-active={viewport === 'desktop'}
            onClick={() => onViewportChange('desktop')}
            aria-label="Desktop view"
          >
            <UbsIcon name="desktop" size={16} />
          </button>
          <button
            className={styles.viewportBtn}
            data-active={viewport === 'mobile'}
            onClick={() => onViewportChange('mobile')}
            aria-label="Mobile view"
          >
            <UbsIcon name="mobile" size={16} />
          </button>
        </div>

        <div className={styles.separator} />

        <div className={styles.toolbarGroup}>
          <button
            className={styles.editModeBtn}
            data-active={editMode}
            onClick={handleToggleEditMode}
            aria-label={editMode ? 'Switch to preview mode' : 'Switch to edit mode'}
          >
            <UbsIcon name="edit" size={16} />
            {editMode ? 'Editing' : 'Edit'}
          </button>
        </div>
      </div>

      <div className={styles.previewArea}>
        <div className={styles.previewFrame} data-viewport={viewport}>
          {currentPage && (
            <PageRenderer
              page={currentPage}
              onNavigate={onPageChange}
              editMode={editMode}
              selectedComponentId={selectedComponent?.id ?? null}
              onSelectComponent={handleSelectComponent}
            />
          )}
        </div>
      </div>

      {editMode && selectedComponent && editorPosition && (
        <InlineEditor
          component={selectedComponent}
          onUpdate={handleEditorUpdate}
          onClose={handleEditorClose}
          position={editorPosition}
        />
      )}
    </div>
  );
}

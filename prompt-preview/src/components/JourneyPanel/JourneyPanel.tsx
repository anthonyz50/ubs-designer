import type { JourneyMap } from '../../types';
import { UbsIcon } from '../common/UbsIcon';
import { EmptyState } from '../common/EmptyState';
import styles from './JourneyPanel.module.css';

interface JourneyPanelProps {
  journeyMap: JourneyMap | null;
  currentPageId: string;
  onStepClick: (pageId: string) => void;
}

/** Map step titles to page IDs by matching the page order convention. */
function getPageIdForStep(stepIndex: number, pageIds: string[]): string {
  return pageIds[stepIndex] ?? pageIds[0] ?? '';
}

export function JourneyPanel({
  journeyMap,
  currentPageId,
  onStepClick,
}: JourneyPanelProps) {
  if (!journeyMap) {
    return (
      <EmptyState
        icon={<UbsIcon name="layout" size={32} />}
        title="No journey map"
        description="Generate a design to see the journey map visualisation."
      />
    );
  }

  // Build a mapping from step index to likely page ID
  const pageIdOrder = [
    'page-entry',
    'page-diagnosis',
    'page-fix',
    'page-confirm',
    'page-progress',
    'page-success',
    'page-escalation',
  ];

  return (
    <div className={styles.panel}>
      <h2 className={styles.title}>{journeyMap.title}</h2>
      <p className={styles.description}>{journeyMap.description}</p>

      <div className={styles.flow}>
        {journeyMap.steps.map((step, idx) => {
          const pageId = getPageIdForStep(idx, pageIdOrder);
          const isActive = pageId === currentPageId;
          const isTerminal = step.isTerminal ?? false;
          const variant = step.title.toLowerCase().includes('escalat')
            ? 'escalation'
            : step.title.toLowerCase().includes('resolved') ||
                step.title.toLowerCase().includes('success')
              ? 'success'
              : 'default';

          return (
            <div key={step.id} className={styles.stepWrapper}>
              <div
                className={styles.step}
                data-active={isActive}
                data-terminal={isTerminal}
                data-variant={variant}
                onClick={() => onStepClick(pageId)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') onStepClick(pageId);
                }}
              >
                <div className={styles.stepNumber}>{idx + 1}</div>
                <div className={styles.stepTitle}>{step.title}</div>
                <div className={styles.stepIntent}>{step.userIntent}</div>
                <span className={styles.stepPage}>{step.pageRequired}</span>
                <div className={styles.stepAction}>{step.primaryAction}</div>
                {step.possibleStates.length > 0 && (
                  <div className={styles.stepStates}>
                    {step.possibleStates.map((state) => (
                      <span key={state} className={styles.stateBadge}>
                        {state}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {idx < journeyMap.steps.length - 1 && (
                <div className={styles.arrow}>
                  <UbsIcon name="arrow-right" size={20} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

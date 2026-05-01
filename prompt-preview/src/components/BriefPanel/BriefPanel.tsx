import type { InterpretedBrief } from '../../types';
import { UbsIcon } from '../common/UbsIcon';
import { EmptyState } from '../common/EmptyState';
import { capitalise } from '../../utils/helpers';
import styles from './BriefPanel.module.css';

interface BriefPanelProps {
  brief: InterpretedBrief | null;
}

export function BriefPanel({ brief }: BriefPanelProps) {
  if (!brief) {
    return (
      <EmptyState
        icon={<UbsIcon name="document" size={32} />}
        title="No brief yet"
        description="Generate a design to see the interpreted UX brief."
      />
    );
  }

  return (
    <div className={styles.panel}>
      <div className={styles.section}>
        <span className={styles.label}>Summary</span>
        <p className={styles.value}>{brief.summary}</p>
      </div>

      <div className={styles.section}>
        <span className={styles.label}>User goal</span>
        <p className={styles.value}>{brief.userGoal}</p>
      </div>

      <div className={styles.section}>
        <span className={styles.label}>Audience</span>
        <p className={styles.value}>{brief.audience}</p>
      </div>

      <div className={styles.section}>
        <span className={styles.label}>Journey type</span>
        <span className="ubs-badge ubs-badge-info">
          {capitalise(brief.journeyType.replace(/-/g, ' '))}
        </span>
      </div>

      <div className={styles.section}>
        <span className={styles.label}>Main pages</span>
        <ul className={styles.list}>
          {brief.mainPages.map((page, idx) => (
            <li key={idx}>{page}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <span className={styles.label}>Main actions</span>
        <ul className={styles.list}>
          {brief.mainActions.map((action, idx) => (
            <li key={idx}>{action}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <span className={styles.label}>Key states</span>
        <div className={styles.badges}>
          {brief.keyStates.map((state) => (
            <span key={state} className="ubs-badge ubs-badge-info">
              {capitalise(state)}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.label}>Accessibility considerations</span>
        <ul className={styles.list}>
          {brief.accessibilityConsiderations.map((note, idx) => (
            <li key={idx}>{note}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <span className={styles.label}>Tone of voice</span>
        <ul className={styles.list}>
          {brief.toneOfVoiceNotes.map((note, idx) => (
            <li key={idx}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

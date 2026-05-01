import type { UxReview } from '../../types';
import { UbsIcon } from '../common/UbsIcon';
import { EmptyState } from '../common/EmptyState';
import styles from './ReviewPanel.module.css';

interface ReviewPanelProps {
  review: UxReview | null;
}

function scoreLevel(score: number): 'high' | 'mid' | 'low' {
  if (score > 7) return 'high';
  if (score >= 5) return 'mid';
  return 'low';
}

export function ReviewPanel({ review }: ReviewPanelProps) {
  if (!review) {
    return (
      <EmptyState
        icon={<UbsIcon name="eye" size={32} />}
        title="No review available"
        description="Generate a design to see the UX review scores."
      />
    );
  }

  const overallLevel = scoreLevel(review.overallScore);

  return (
    <div className={styles.panel}>
      {/* Overall score */}
      <div className={styles.overallScore}>
        <div className={styles.scoreCircle} data-level={overallLevel}>
          <span className={styles.scoreValue}>
            {review.overallScore.toFixed(1)}
          </span>
        </div>
        <div className={styles.scoreMeta}>
          <span className={styles.scoreLabel}>Overall UX score</span>
          <span className={styles.scoreSub}>
            Out of {review.maxScore} across {review.scores.length} categories
          </span>
        </div>
      </div>

      {/* Individual scores */}
      <div className={styles.scoreItems}>
        {review.scores.map((item) => {
          const level = scoreLevel(item.score);
          const percentage = (item.score / item.maxScore) * 100;
          return (
            <div key={item.category} className={styles.scoreItem}>
              <div className={styles.scoreItemHeader}>
                <span className={styles.scoreItemCategory}>
                  {item.category}
                </span>
                <span className={styles.scoreItemValue} data-level={level}>
                  {item.score}/{item.maxScore}
                </span>
              </div>
              <div className={styles.scoreBar}>
                <div
                  className={styles.scoreBarFill}
                  data-level={level}
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <p className={styles.scoreItemNotes}>{item.notes}</p>
            </div>
          );
        })}
      </div>

      {/* Recommendations */}
      {review.recommendations.length > 0 && (
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Recommendations</h3>
          <ul className={styles.notesList}>
            {review.recommendations.map((rec, idx) => (
              <li key={idx}>{rec}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Accessibility notes */}
      {review.accessibilityNotes.length > 0 && (
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Accessibility notes</h3>
          <ul className={styles.notesList}>
            {review.accessibilityNotes.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Content notes */}
      {review.contentNotes.length > 0 && (
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Content notes</h3>
          <ul className={styles.notesList}>
            {review.contentNotes.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Interaction notes */}
      {review.interactionNotes.length > 0 && (
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Interaction notes</h3>
          <ul className={styles.notesList}>
            {review.interactionNotes.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

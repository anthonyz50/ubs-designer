import { useState, useCallback } from 'react';
import type {
  DesignModel,
  PersonaTestReport,
  PersonaTestResult,
  PredictedIssue,
} from '../../types';
import { EmptyState } from '../common/EmptyState';
import { UbsIcon } from '../common/UbsIcon';
import styles from './PersonaTestPanel.module.css';

interface PersonaTestPanelProps {
  model: DesignModel | null;
  report: PersonaTestReport | null;
  isTesting: boolean;
  onRunTest: () => void;
}

function scoreLevel(score: number, invert = false): 'high' | 'mid' | 'low' {
  // For difficulty, higher is worse (inverted)
  if (invert) {
    if (score <= 3) return 'high';
    if (score <= 6) return 'mid';
    return 'low';
  }
  if (score >= 7) return 'high';
  if (score >= 5) return 'mid';
  return 'low';
}

function completionLevel(rate: number): 'high' | 'mid' | 'low' {
  if (rate >= 80) return 'high';
  if (rate >= 60) return 'mid';
  return 'low';
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins === 0) return `${secs}s`;
  return `${mins}m ${secs}s`;
}

export function PersonaTestPanel({
  model,
  report,
  isTesting,
  onRunTest,
}: PersonaTestPanelProps) {
  const [expandedPersonas, setExpandedPersonas] = useState<Set<string>>(
    new Set(),
  );

  const togglePersona = useCallback((personaId: string) => {
    setExpandedPersonas((prev) => {
      const next = new Set(prev);
      if (next.has(personaId)) {
        next.delete(personaId);
      } else {
        next.add(personaId);
      }
      return next;
    });
  }, []);

  if (!model) {
    return (
      <EmptyState
        icon={<UbsIcon name="users" size={32} />}
        title="No design model available"
        description="Generate a design first, then run persona testing to evaluate the user experience."
      />
    );
  }

  // Group issues by severity for the issues section
  const allIssues: PredictedIssue[] = report
    ? deduplicateIssues(report.results.flatMap((r) => r.predictedIssues))
    : [];
  const issuesBySeverity = groupBySeverity(allIssues);
  const severityOrder: PredictedIssue['severity'][] = [
    'critical',
    'major',
    'minor',
    'suggestion',
  ];

  return (
    <div className={styles.panel}>
      {/* Run test header */}
      <div className={styles.runHeader}>
        <button
          className={styles.runButton}
          onClick={onRunTest}
          disabled={isTesting || !model}
        >
          {isTesting ? 'Testing…' : <><UbsIcon name="play" size={12} /> Run Persona Test</>}
        </button>
        {isTesting && (
          <div className={styles.loadingStatus}>
            <span className={styles.loadingDot} />
            Simulating user walkthroughs…
          </div>
        )}
      </div>

      {!report && !isTesting && (
        <EmptyState
          icon={<UbsIcon name="users" size={32} />}
          title="No test results yet"
          description="Click 'Run Persona Test' to simulate multiple user personas walking through your design."
        />
      )}

      {report && (
        <>
          {/* Summary section */}
          <div className={styles.summary}>
            <h3 className={styles.summaryTitle}>Test Summary</h3>
            <div className={styles.summaryMetrics}>
              <div className={styles.metricCard}>
                <span
                  className={styles.metricValue}
                  data-level={completionLevel(report.summary.completionRate)}
                >
                  {report.summary.completionRate}%
                </span>
                <span className={styles.metricLabel}>Completion rate</span>
              </div>
              <div className={styles.metricCard}>
                <span
                  className={styles.metricValue}
                  data-level={scoreLevel(report.summary.averageSatisfaction)}
                >
                  {report.summary.averageSatisfaction}/10
                </span>
                <span className={styles.metricLabel}>
                  Avg. satisfaction
                </span>
              </div>
              <div className={styles.metricCard}>
                <span
                  className={styles.metricValue}
                  data-level={scoreLevel(
                    report.summary.averageDifficulty,
                    true,
                  )}
                >
                  {report.summary.averageDifficulty}/10
                </span>
                <span className={styles.metricLabel}>Avg. difficulty</span>
              </div>
              <div className={styles.metricCard}>
                <span className={styles.metricValue}>
                  {formatTime(report.summary.averageTimeSeconds)}
                </span>
                <span className={styles.metricLabel}>
                  Avg. completion time
                </span>
              </div>
            </div>
            <div className={styles.issueBadges}>
              {report.summary.criticalIssues.length > 0 && (
                <span
                  className={styles.issueBadge}
                  data-severity="critical"
                >
                  {report.summary.criticalIssues.length} critical
                </span>
              )}
              {report.summary.majorIssues.length > 0 && (
                <span className={styles.issueBadge} data-severity="major">
                  {report.summary.majorIssues.length} major
                </span>
              )}
              {allIssues.filter((i) => i.severity === 'minor').length >
                0 && (
                <span className={styles.issueBadge} data-severity="minor">
                  {allIssues.filter((i) => i.severity === 'minor').length}{' '}
                  minor
                </span>
              )}
              {allIssues.filter((i) => i.severity === 'suggestion')
                .length > 0 && (
                <span
                  className={styles.issueBadge}
                  data-severity="suggestion"
                >
                  {
                    allIssues.filter((i) => i.severity === 'suggestion')
                      .length
                  }{' '}
                  suggestions
                </span>
              )}
            </div>
          </div>

          {/* Confusion hotspots */}
          {report.summary.confusionHotspots.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Confusion Hotspots</h3>
              <div className={styles.hotspotList}>
                {report.summary.confusionHotspots.map((hotspot) => {
                  const percentage =
                    (hotspot.confusedCount / report.summary.totalPersonas) *
                    100;
                  return (
                    <div key={hotspot.pageId} className={styles.hotspotItem}>
                      <div className={styles.hotspotHeader}>
                        <span className={styles.hotspotPage}>
                          {hotspot.pageTitle}
                        </span>
                        <span className={styles.hotspotCount}>
                          {hotspot.confusedCount}/{report.summary.totalPersonas}{' '}
                          personas confused
                        </span>
                      </div>
                      <div className={styles.hotspotBar}>
                        <div
                          className={styles.hotspotBarFill}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Issues list */}
          {allIssues.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Issues Found</h3>
              {severityOrder.map((severity) => {
                const issues = issuesBySeverity[severity];
                if (!issues || issues.length === 0) return null;
                return (
                  <div key={severity} className={styles.issueGroup}>
                    <div className={styles.issueGroupHeader}>
                      <span
                        className={styles.issueBadge}
                        data-severity={severity}
                      >
                        {severity}
                      </span>
                      <span>
                        {issues.length} issue{issues.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                    {issues.map((issue, idx) => (
                      <div key={idx} className={styles.issueCard}>
                        <div className={styles.issueCardHeader}>
                          <span className={styles.categoryBadge}>
                            {issue.category}
                          </span>
                          <span className={styles.issuePageName}>
                            {getPageTitle(report, issue.pageId)}
                          </span>
                        </div>
                        <p className={styles.issueDescription}>
                          {issue.description}
                        </p>
                        <p className={styles.issueRecommendation}>
                          {issue.recommendation}
                        </p>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          )}

          {/* Per-persona results */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Per-Persona Results</h3>
            <div className={styles.personaList}>
              {report.results.map((result) => {
                const isExpanded = expandedPersonas.has(
                  result.persona.id,
                );
                return (
                  <div
                    key={result.persona.id}
                    className={styles.personaCard}
                  >
                    <div
                      className={styles.personaHeader}
                      onClick={() => togglePersona(result.persona.id)}
                    >
                      <div className={styles.personaAvatar}>
                        {result.persona.avatar}
                      </div>
                      <div className={styles.personaInfo}>
                        <span className={styles.personaName}>
                          {result.persona.name}
                        </span>
                        <span className={styles.personaRole}>
                          {result.persona.role}, age {result.persona.age}
                        </span>
                      </div>
                      <div className={styles.personaTags}>
                        <span
                          className={styles.proficiencyBadge}
                          data-level={result.persona.techProficiency}
                        >
                          {result.persona.techProficiency} tech
                        </span>
                        {result.persona.accessibilityNeeds.map((need) => (
                          <span key={need} className={styles.a11yBadge}>
                            {need}
                          </span>
                        ))}
                      </div>
                      <span
                        className={styles.personaCompletionBadge}
                        data-completed={result.taskCompleted}
                      >
                        {result.taskCompleted ? 'Completed' : 'Abandoned'}
                      </span>
                      <span
                        className={styles.personaExpandIcon}
                        data-expanded={isExpanded}
                      >
                        <UbsIcon name="chevron-down" size={12} />
                      </span>
                    </div>

                    {isExpanded && (
                      <PersonaDetail result={result} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Top recommendations */}
          {report.summary.topRecommendations.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Top Recommendations</h3>
              <ul className={styles.recommendationList}>
                {report.summary.topRecommendations.map((rec, idx) => (
                  <li key={idx}>{rec}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ----------------------------------------------------------
// Persona detail sub-component
// ----------------------------------------------------------

function PersonaDetail({ result }: { result: PersonaTestResult }) {
  return (
    <div className={styles.personaDetail}>
      {/* Scores */}
      <div className={styles.personaScores}>
        <div className={styles.personaScoreItem}>
          <span className={styles.personaScoreValue}>
            {result.satisfactionScore}/10
          </span>
          <span className={styles.personaScoreLabel}>Satisfaction</span>
          <div className={styles.scoreBar}>
            <div className={styles.scoreBarTrack}>
              <div
                className={styles.scoreBarFill}
                data-level={scoreLevel(result.satisfactionScore)}
                style={{
                  width: `${result.satisfactionScore * 10}%`,
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.personaScoreItem}>
          <span className={styles.personaScoreValue}>
            {result.difficultyScore}/10
          </span>
          <span className={styles.personaScoreLabel}>Difficulty</span>
          <div className={styles.scoreBar}>
            <div className={styles.scoreBarTrack}>
              <div
                className={styles.scoreBarFill}
                data-level={scoreLevel(result.difficultyScore, true)}
                style={{
                  width: `${result.difficultyScore * 10}%`,
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.personaScoreItem}>
          <span className={styles.personaScoreValue}>
            {formatTime(result.taskCompletionTime)}
          </span>
          <span className={styles.personaScoreLabel}>Time taken</span>
        </div>
      </div>

      {/* Overall feedback */}
      <p className={styles.personaFeedback}>
        &ldquo;{result.overallFeedback}&rdquo;
      </p>

      {/* Page-by-page walkthrough */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Page-by-Page Walkthrough</h4>
        <div className={styles.walkthroughList}>
          {result.walkthroughs.map((wt) => (
            <div key={wt.pageId} className={styles.walkthroughItem}>
              <div className={styles.walkthroughIndicator}>
                <span
                  className={styles.confusionDot}
                  data-confused={wt.confused}
                  title={wt.confused ? 'Confused' : 'Clear'}
                />
              </div>
              <div className={styles.walkthroughContent}>
                <div className={styles.walkthroughHeader}>
                  <span className={styles.walkthroughPageTitle}>
                    {wt.pageTitle}
                  </span>
                  <span className={styles.walkthroughTime}>
                    {formatTime(wt.timeSpentSeconds)}
                  </span>
                </div>
                <p className={styles.walkthroughThoughts}>{wt.thoughts}</p>
                <p className={styles.walkthroughAction}><UbsIcon name="arrow-right" size={12} /> {wt.actionTaken}</p>
                {wt.issues.length > 0 && (
                  <div className={styles.walkthroughIssues}>
                    {wt.issues.map((issue, idx) => (
                      <span key={idx} className={styles.walkthroughIssue}>
                        {issue}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------
// Helpers
// ----------------------------------------------------------

function deduplicateIssues(issues: PredictedIssue[]): PredictedIssue[] {
  const seen = new Set<string>();
  const result: PredictedIssue[] = [];
  for (const issue of issues) {
    if (!seen.has(issue.description)) {
      seen.add(issue.description);
      result.push(issue);
    }
  }
  return result;
}

function groupBySeverity(
  issues: PredictedIssue[],
): Record<string, PredictedIssue[]> {
  const groups: Record<string, PredictedIssue[]> = {};
  for (const issue of issues) {
    if (!groups[issue.severity]) {
      groups[issue.severity] = [];
    }
    groups[issue.severity].push(issue);
  }
  return groups;
}

function getPageTitle(report: PersonaTestReport, pageId: string): string {
  for (const result of report.results) {
    const wt = result.walkthroughs.find((w) => w.pageId === pageId);
    if (wt) return wt.pageTitle;
  }
  return pageId;
}

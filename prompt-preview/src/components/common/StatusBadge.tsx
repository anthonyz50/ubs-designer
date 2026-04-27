import type { ServiceStatus } from '../../types';

interface StatusBadgeProps {
  status: ServiceStatus;
}

/**
 * Small badge component for service status.
 * Uses UBS RAG colours via CSS classes.
 */
export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`ubs-badge ubs-badge--${status}`}>
      {status}
    </span>
  );
}

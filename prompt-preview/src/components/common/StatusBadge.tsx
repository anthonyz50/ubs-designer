type BadgeVariant =
  | 'operational'
  | 'degraded'
  | 'outage'
  | 'maintenance'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

interface StatusBadgeProps {
  variant: BadgeVariant;
  label: string;
}

export function StatusBadge({ variant, label }: StatusBadgeProps) {
  return (
    <span className={`ubs-badge ubs-badge-${variant}`}>
      {label}
    </span>
  );
}

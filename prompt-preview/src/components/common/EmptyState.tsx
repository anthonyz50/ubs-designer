const wrapperStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,
  padding: 64,
  textAlign: 'center',
};

const iconStyle: React.CSSProperties = {
  width: 48,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 12,
  background: '#ECEBE4',
  fontSize: 24,
};

const titleStyle: React.CSSProperties = {
  fontSize: '1rem',
  fontWeight: 500,
  color: '#000',
};

const descStyle: React.CSSProperties = {
  fontSize: '0.8125rem',
  color: '#5A5D5C',
  maxWidth: 320,
  lineHeight: 1.5,
};

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: string;
}

/**
 * Empty state message with icon placeholder.
 */
export default function EmptyState({ title, description, icon = '\u2728' }: EmptyStateProps) {
  return (
    <div style={wrapperStyle}>
      <div style={iconStyle}>{icon}</div>
      <div style={titleStyle}>{title}</div>
      {description && <div style={descStyle}>{description}</div>}
    </div>
  );
}

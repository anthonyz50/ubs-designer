const spinnerStyle: React.CSSProperties = {
  width: 32,
  height: 32,
  border: '3px solid #ECEBE4',
  borderTopColor: '#E60000',
  borderRadius: '50%',
  animation: 'ubs-spin 0.7s linear infinite',
};

const wrapperStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 12,
  padding: 48,
};

/**
 * Simple CSS spinner using UBS Red.
 */
export default function LoadingSpinner({ message }: { message?: string }) {
  return (
    <>
      <style>{`@keyframes ubs-spin { to { transform: rotate(360deg); } }`}</style>
      <div style={wrapperStyle}>
        <div style={spinnerStyle} role="status" aria-label="Loading" />
        {message && (
          <span style={{ fontSize: '0.8125rem', color: '#5A5D5C' }}>
            {message}
          </span>
        )}
      </div>
    </>
  );
}

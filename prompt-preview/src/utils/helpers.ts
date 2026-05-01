/**
 * Copy text to the clipboard. Returns true on success, false on failure.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/**
 * Format a value as pretty-printed JSON.
 */
export function formatJson(value: unknown, indent = 2): string {
  return JSON.stringify(value, null, indent);
}

/**
 * Capitalise the first letter of a string.
 */
export function capitalise(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Generate a short random ID (8 alphanumeric characters).
 */
export function generateId(): string {
  return Math.random().toString(36).slice(2, 10);
}

/**
 * Format a Date or ISO string into a human-readable timestamp.
 */
export function formatTimestamp(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

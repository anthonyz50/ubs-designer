/**
 * Utility helpers for the UBS Prompt Preview tool.
 */

/**
 * Copy text to the clipboard.
 * Falls back to execCommand for older browsers.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textarea);
    return success;
  } catch {
    return false;
  }
}

/**
 * Format JSON with proper indentation for display.
 */
export function formatJson(value: unknown): string {
  return JSON.stringify(value, null, 2);
}

/**
 * Capitalise the first letter of a string.
 */
export function capitalise(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Convert a page type slug to a human-readable label.
 */
export function pageTypeLabel(pageType: string): string {
  const labels: Record<string, string> = {
    'dashboard': 'Dashboard',
    'form': 'Form',
    'card': 'Card',
    'landing-page': 'Landing page',
    'support-journey': 'Support journey',
    'data-table': 'Data table',
    'notification': 'Notification',
  };
  return labels[pageType] || capitalise(pageType);
}

/**
 * Truncate a string to a maximum length, appending an ellipsis if needed.
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 1) + '\u2026';
}

/**
 * Generate a timestamp string for display.
 */
export function formatTimestamp(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

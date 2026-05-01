import { useState, useCallback } from 'react';
import type { DesignModel } from '../../types';
import { UbsIcon } from '../common/UbsIcon';
import { EmptyState } from '../common/EmptyState';
import { copyToClipboard, formatJson } from '../../utils/helpers';
import styles from './CodePanel.module.css';

type CodeTab = 'json' | 'react' | 'angular' | 'html-css';

const CODE_TABS: { value: CodeTab; label: string }[] = [
  { value: 'json', label: 'Model JSON' },
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'html-css', label: 'HTML/CSS' },
];

interface CodePanelProps {
  model: DesignModel | null;
  activeCodeTab: CodeTab;
  onCodeTabChange: (tab: CodeTab) => void;
  generatedCode: {
    react: string;
    angular: string;
    htmlCss: string;
  };
}

export function CodePanel({
  model,
  activeCodeTab,
  onCodeTabChange,
  generatedCode,
}: CodePanelProps) {
  const [copied, setCopied] = useState(false);

  const getCode = useCallback((): string => {
    switch (activeCodeTab) {
      case 'json':
        return model ? formatJson(model) : '';
      case 'react':
        return generatedCode.react;
      case 'angular':
        return generatedCode.angular;
      case 'html-css':
        return generatedCode.htmlCss;
      default:
        return '';
    }
  }, [activeCodeTab, model, generatedCode]);

  const handleCopy = useCallback(async () => {
    const code = getCode();
    const success = await copyToClipboard(code);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [getCode]);

  if (!model) {
    return (
      <EmptyState
        icon={<UbsIcon name="code" size={32} />}
        title="No code generated"
        description="Generate a design to see the code output."
      />
    );
  }

  const code = getCode();

  return (
    <div className={styles.panel}>
      <div className={styles.tabs}>
        {CODE_TABS.map((tab) => (
          <button
            key={tab.value}
            className={styles.tab}
            data-active={activeCodeTab === tab.value}
            onClick={() => onCodeTabChange(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.codeWrapper}>
        <button
          className={styles.copyBtn}
          data-copied={copied}
          onClick={handleCopy}
          aria-label="Copy code"
        >
          <UbsIcon name={copied ? 'check' : 'code'} size={12} />
          {copied ? 'Copied' : 'Copy'}
        </button>
        <pre className={styles.codeBlock}>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

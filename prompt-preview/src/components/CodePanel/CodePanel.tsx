/**
 * Code Panel
 *
 * Shows generated code in multiple formats with copy-to-clipboard support.
 * Tabs: Model JSON | React | Angular | HTML/CSS
 */

import { useState, useEffect, useCallback } from 'react';
import type { UiModel } from '../../types';
import { formatJson, copyToClipboard } from '../../utils/helpers';
import { generateReactCode } from '../../generators/reactGenerator';
import { generateAngularCode } from '../../generators/angularGenerator';
import { generateHtmlCode } from '../../generators/htmlGenerator';
import styles from './CodePanel.module.css';

type CodeTab = 'json' | 'react' | 'angular' | 'html';

const TABS: { value: CodeTab; label: string }[] = [
  { value: 'json', label: 'Model JSON' },
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'html', label: 'HTML/CSS' },
];

interface CodePanelProps {
  model: UiModel | null;
  activeTab: CodeTab;
  onTabChange: (tab: CodeTab) => void;
}

export default function CodePanel({ model, activeTab, onTabChange }: CodePanelProps) {
  const [codeContent, setCodeContent] = useState('');
  const [copyFeedback, setCopyFeedback] = useState(false);

  const generateCode = useCallback(async () => {
    if (!model) {
      setCodeContent('');
      return;
    }

    switch (activeTab) {
      case 'json':
        setCodeContent(formatJson(model));
        break;
      case 'react':
        setCodeContent(generateReactCode(model));
        break;
      case 'angular':
        setCodeContent(generateAngularCode(model));
        break;
      case 'html':
        setCodeContent(generateHtmlCode(model));
        break;
    }
  }, [model, activeTab]);

  useEffect(() => {
    generateCode();
  }, [generateCode]);

  const handleCopy = async () => {
    const success = await copyToClipboard(codeContent);
    if (success) {
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2000);
    }
  };

  if (!model) {
    return null;
  }

  return (
    <div className={styles.panel}>
      <div className={styles.toolbar}>
        {TABS.map((tab) => (
          <button
            key={tab.value}
            className={`${styles.tab} ${activeTab === tab.value ? styles.tabActive : ''}`}
            onClick={() => onTabChange(tab.value)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
        <button
          className={`ubs-btn ubs-btn--ghost ubs-btn--sm ${styles.copyBtn} ${copyFeedback ? styles.copySuccess : ''}`}
          onClick={handleCopy}
          type="button"
        >
          {copyFeedback ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className={styles.codeArea}>
        <pre className={styles.codeBlock}>{codeContent}</pre>
      </div>
    </div>
  );
}

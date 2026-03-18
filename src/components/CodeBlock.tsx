import { useState, useCallback } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'markdown' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  return (
    <div className="relative group rounded-xl border border-border overflow-hidden my-6">
      <div className="flex items-center justify-between px-5 py-2.5 bg-surface-2 border-b border-border">
        <span className="text-2xs font-mono text-ink-faint">{language}</span>
        <button
          onClick={handleCopy}
          className="text-2xs text-ink-faint hover:text-ink transition-colors"
        >
          {copied ? '已复制' : '复制'}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto bg-surface-1">
        <code className="text-sm font-mono text-ink-muted leading-relaxed whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  );
}

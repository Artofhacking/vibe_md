interface ScoreBarProps {
  score: number;
  max?: number;
  label: string;
  showValue?: boolean;
}

export function ScoreBar({ score, max = 5, label, showValue = true }: ScoreBarProps) {
  const pct = (score / max) * 100;

  return (
    <div className="flex items-center gap-3">
      <span className="text-2xs text-ink-muted w-20 shrink-0 text-right">
        {label}
      </span>
      <div className="h-1 rounded-full bg-surface-3 overflow-hidden flex-1">
        <div
          className="h-full rounded-full bg-ink-faint transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      {showValue && (
        <span className="text-2xs font-mono text-ink-faint w-8">
          {score}/{max}
        </span>
      )}
    </div>
  );
}

interface BooleanIndicatorProps {
  value: boolean;
  label: string;
}

export function BooleanIndicator({ value, label }: BooleanIndicatorProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`w-1.5 h-1.5 rounded-full shrink-0 ${
          value ? 'bg-ink' : 'bg-surface-3'
        }`}
      />
      <span className="text-sm text-ink-muted">{label}</span>
    </div>
  );
}

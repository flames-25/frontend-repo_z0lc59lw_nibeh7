import React from 'react';
import { BarChart3 } from 'lucide-react';

export default function Reports() {
  const stats = [
    { label: 'Attendance (Oct)', value: '88%' },
    { label: 'Tasks Completed', value: '64%' },
    { label: 'Avg. Feedback', value: '4.3/5' },
  ];

  return (
    <div className="space-y-4 pb-24">
      <header className="pt-4">
        <h1 className="text-2xl font-semibold tracking-tight">Reports</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">Basic summaries for your club</p>
      </header>

      <div className="grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <BarChart3 className="text-[#2F80ED]" size={18} />
            <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">{s.label}</p>
            <p className="text-lg font-semibold">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
        <h3 className="font-semibold mb-2">Attendance by Event</h3>
        <div className="h-32 grid grid-cols-12 gap-1">
          {new Array(12).fill(0).map((_, i) => (
            <div key={i} className="bg-[#2F80ED] rounded" style={{ height: `${40 + (i % 5) * 10}%` }} />
          ))}
        </div>
        <p className="mt-3 text-xs text-neutral-600 dark:text-neutral-400">Mock chart for MVP preview</p>
      </div>
    </div>
  );
}

import React from 'react';
import { Home, Calendar, CheckSquare, Users, BarChart3 } from 'lucide-react';

const tabs = [
  { key: 'dashboard', label: 'Dashboard', icon: Home },
  { key: 'events', label: 'Events', icon: Calendar },
  { key: 'tasks', label: 'Tasks', icon: CheckSquare },
  { key: 'members', label: 'Members', icon: Users },
  { key: 'reports', label: 'Reports', icon: BarChart3 },
];

export default function BottomNav({ current, onChange }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-neutral-900/90 backdrop-blur border-t border-neutral-200 dark:border-neutral-800 z-50">
      <div className="mx-auto max-w-md grid grid-cols-5">
        {tabs.map(({ key, label, icon: Icon }) => {
          const active = current === key;
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className={`flex flex-col items-center justify-center py-2 text-xs transition-colors ${
                active
                  ? 'text-[#2F80ED]'
                  : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
              }`}
            >
              <Icon size={20} strokeWidth={2.25} className="mb-0.5" />
              <span className="font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

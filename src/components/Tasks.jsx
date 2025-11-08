import React from 'react';
import { ListTodo } from 'lucide-react';

const columns = [
  { key: 'todo', title: 'To Do' },
  { key: 'inprogress', title: 'In Progress' },
  { key: 'done', title: 'Done' },
];

const items = [
  { id: 1, title: 'Design event poster', status: 'todo', due: 'Nov 12' },
  { id: 2, title: 'Book auditorium', status: 'inprogress', due: 'Nov 10' },
  { id: 3, title: 'Confirm sponsors', status: 'done', due: 'Nov 08' },
];

export default function Tasks() {
  return (
    <div className="space-y-4 pb-24">
      <header className="pt-4">
        <h1 className="text-2xl font-semibold tracking-tight">Tasks</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">Track progress with a simple Kanban view</p>
      </header>

      <div className="grid grid-cols-3 gap-3">
        {columns.map((c) => (
          <div key={c.key} className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-3">
            <div className="flex items-center gap-2 mb-2">
              <ListTodo size={16} className="text-[#2F80ED]" />
              <h3 className="font-semibold text-sm">{c.title}</h3>
            </div>
            <div className="space-y-2">
              {items
                .filter((i) => i.status === c.key)
                .map((i) => (
                  <div key={i.id} className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
                    <p className="text-sm font-medium">{i.title}</p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">Due {i.due}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

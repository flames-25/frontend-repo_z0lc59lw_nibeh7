import React from 'react';
import { CalendarDays, MapPin, Users } from 'lucide-react';

const sampleEvents = [
  {
    id: 1,
    title: 'Freshers Orientation',
    date: '2025-11-12',
    time: '5:00 PM',
    venue: 'Main Auditorium',
    description: 'Welcome event for new students with activities and networking.',
    assigned: ['Aarav', 'Meera', 'Dev'],
    progress: 72,
  },
  {
    id: 2,
    title: 'Hack Night 2.0',
    date: '2025-11-20',
    time: '8:00 PM',
    venue: 'Innovation Lab',
    description: 'Overnight coding sprint with snacks and prizes.',
    assigned: ['Ishaan', 'Riya'],
    progress: 45,
  },
];

export default function Events() {
  return (
    <div className="space-y-4 pb-24">
      <header className="pt-4">
        <h1 className="text-2xl font-semibold tracking-tight">Events</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">Upcoming and past events</p>
      </header>

      {sampleEvents.map((e) => (
        <div key={e.id} className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold">{e.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 flex items-center gap-2">
                <CalendarDays size={16} /> {e.date} • {e.time}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 flex items-center gap-2">
                <MapPin size={16} /> {e.venue}
              </p>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-[#2F80ED] font-medium">{e.progress}%</span>
          </div>
          <p className="text-sm mt-3">{e.description}</p>
          <div className="mt-3 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
            <Users size={16} /> Assigned: {e.assigned.join(', ')}
          </div>
          <div className="mt-3 h-2 w-full bg-neutral-200/60 dark:bg-neutral-800/60 rounded-full overflow-hidden">
            <div className="h-full bg-[#2F80ED]" style={{ width: `${e.progress}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

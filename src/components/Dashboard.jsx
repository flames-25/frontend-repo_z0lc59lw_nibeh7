import React from 'react';
import { Plus, Calendar, ClipboardList, Users, QrCode } from 'lucide-react';

export default function Dashboard({ onQuickAction }) {
  return (
    <div className="space-y-6 pb-24">
      <header className="pt-4">
        <h1 className="text-2xl font-semibold tracking-tight">ClubSync</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">Manage clubs, events, tasks, and attendance in one place.</p>
      </header>

      <section className="grid grid-cols-2 gap-4">
        <StatCard title="Upcoming" value="3" icon={Calendar} color="bg-blue-50 text-[#2F80ED]" />
        <StatCard title="My Tasks" value="7" icon={ClipboardList} color="bg-yellow-50 text-[#F2C94C]" />
        <StatCard title="Members" value="28" icon={Users} color="bg-green-50 text-green-600" />
        <StatCard title="Attendance" value="92%" icon={QrCode} color="bg-purple-50 text-purple-600" />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-3">
          <QuickAction label="Add Event" icon={Calendar} onClick={() => onQuickAction('event')} />
          <QuickAction label="Add Task" icon={ClipboardList} onClick={() => onQuickAction('task')} />
          <QuickAction label="Add Member" icon={Users} onClick={() => onQuickAction('member')} />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Activity</h2>
        <div className="space-y-3">
          {[
            { t: 'Design meetup scheduled', s: 'Fri, 5 PM • Auditorium' },
            { t: 'Poster task moved to In Progress', s: 'Assigned to Aanya' },
            { t: '42 attendees checked in', s: 'Orientation 2025' },
          ].map((a, i) => (
            <div key={i} className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <p className="font-medium">{a.t}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{a.s}</p>
            </div>
          ))}
        </div>
      </section>

      <button
        onClick={() => onQuickAction('fab')}
        className="fixed bottom-20 right-4 inline-flex items-center gap-2 bg-[#2F80ED] text-white px-5 py-3 rounded-full shadow-lg shadow-blue-500/30 hover:brightness-110 focus:outline-none"
      >
        <Plus size={18} />
        Create
      </button>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, color }) {
  return (
    <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${color}`}> 
        <Icon size={18} />
      </div>
      <div className="mt-3">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{title}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
}

function QuickAction({ label, icon: Icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex flex-col items-center gap-2 hover:shadow-sm"
    >
      <Icon size={20} className="text-[#2F80ED]" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

import React from 'react';
import { UserPlus, Shield, Users } from 'lucide-react';

const members = [
  { id: 1, name: 'Aanya Gupta', role: 'Club Head', branch: 'CSE', year: '4th' },
  { id: 2, name: 'Kunal Verma', role: 'Core Member', branch: 'ECE', year: '3rd' },
  { id: 3, name: 'Meera Shah', role: 'Volunteer', branch: 'ME', year: '2nd' },
];

export default function Members() {
  return (
    <div className="space-y-4 pb-24">
      <header className="pt-4">
        <h1 className="text-2xl font-semibold tracking-tight">Members</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">Manage your club roster</p>
      </header>

      <div className="space-y-3">
        {members.map((m) => (
          <div key={m.id} className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-between">
            <div>
              <p className="font-medium">{m.name}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{m.role} • {m.branch} • {m.year}</p>
            </div>
            <div className="flex items-center gap-2">
              {m.role === 'Club Head' ? (
                <Shield size={18} className="text-[#2F80ED]" />
              ) : (
                <Users size={18} className="text-neutral-500" />
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="fixed bottom-20 right-4 inline-flex items-center gap-2 bg-[#2F80ED] text-white px-5 py-3 rounded-full shadow-lg shadow-blue-500/30 hover:brightness-110">
        <UserPlus size={18} /> Add Member
      </button>
    </div>
  );
}

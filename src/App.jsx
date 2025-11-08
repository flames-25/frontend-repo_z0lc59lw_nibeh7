import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Events from './components/Events';
import Tasks from './components/Tasks';
import Members from './components/Members';
import Reports from './components/Reports';
import BottomNav from './components/BottomNav';

export default function App() {
  const [tab, setTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <main className="mx-auto max-w-md px-4">
        {tab === 'dashboard' && <Dashboard onQuickAction={(k) => console.log('quick', k)} />}
        {tab === 'events' && <Events />}
        {tab === 'tasks' && <Tasks />}
        {tab === 'members' && <Members />}
        {tab === 'reports' && <Reports />}
      </main>

      <BottomNav current={tab} onChange={setTab} />
    </div>
  );
}

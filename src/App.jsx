/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default <App></App>*/

import React from 'react';
import './rootpage.css';

const tasks = {
  create: [
    { id: 'CAM-5', title: 'Add Multi-Language Support', label: 'Feature Request', avatar: 'https://i.pravatar.cc/30' },
    { id: 'CAM-8', title: 'Create Onboarding Tutorial for New Users', label: 'Feature Request', avatar: 'https://i.pravatar.cc/30' },
    ],
  todo: [
    { id: 'CAM-4', title: 'Add Multi-Language Support', label: 'Feature Request', avatar: 'https://i.pravatar.cc/30' },
    { id: 'CAM-2', title: 'Implement Email Notification System', label: 'Feature Request', avatar: 'https://i.pravatar.cc/30' },
    { id: 'CAM-1', title: 'update user profile page UI', label: 'Feature Request', avatar: 'https://i.pravatar.cc/30' },
  ],
  inProgress: [
    { id: 'CAM-3', title: 'Optimize Database Queries for Performance', label: 'Feature Request', avatar: 'https://i.pravatar.cc/30' }
  ],
  done: [
    { id: 'CAM-6', title: 'Enhance Search Functionality', label: 'Feature Request', avatar: 'https://i.pravatar.cc/30' },
    { id: 'CAM-7', title: 'Integrate Third-Party Payment Gateway', label: 'Feature Request', avatar: 'https://i.pravatar.cc/30' },
    { id: 'CAM-11', title: 'Conduct Security Vulnerability Assessment', label: 'Feature Request', avatar: 'https://i.pravatar.cc/30' },
    { id: 'CAM-10', title: 'Upgrade Server Infrastructure', label: 'Feature Request', avatar: 'https://i.pravatar.cc/30' },
    { id: 'CAM-9', title: 'Implement Role-Based Access Control (RBAC)', label: 'Feature Request', avatar: 'https://i.pravatar.cc/30' }
  ],
  cancelled:[

  ]
};

const KanbanColumn = ({ title, tasks }) => {
  return (
    <div className="column">
      <div className="column-header">
        {title} <span>{tasks.length}</span>
      </div>
      {tasks.map(task => (
        <div className="card" key={task.id}>
          <div className="card-header">
            <span className="card-id">{task.id}</span>
            <span className="priority-label">{task.label}</span>
          </div>
          <div className="card-title">{task.title}</div>
          <div className="avatar">
            <img src={task.avatar} alt="user avatar" />
          </div>
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="kanban-board">
      <KanbanColumn title="create" tasks={tasks.create} />
      <KanbanColumn title="Todo" tasks={tasks.todo} />
      <KanbanColumn title="In Progress" tasks={tasks.inProgress} />
      <KanbanColumn title="Done" tasks={tasks.done} />
      <KanbanColumn title="cancelled" tasks={tasks.cancelled} />
    </div>
  );
}

export default App;


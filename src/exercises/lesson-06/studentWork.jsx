import { useState } from 'react';
import { filterTasks } from './utils/taskFiltering.js';
import FilterButtonGroup from './components/FilterButtonGroup.jsx';
import TaskItem from './components/TaskItem.jsx';
import UserProfile from './components/UserProfile.jsx';
import useDataFetch from './hooks/useDataFetch.jsx';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');

  //  #1: Data fetching + state + UI logic all mixed together
  const { tasks, loading } = useDataFetch();

  // #2: Filtering logic inside component
  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      {/* #3: Hardcoded UI, not reusable */}
      <UserProfile name="Student" />

      {/* #4: Repeated button JSX */}
      <FilterButtonGroup
        filter={filter}
        onSelect={(selected) => setFilter(selected)}
      />

      {/* #5: Inline list rendering */}
      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

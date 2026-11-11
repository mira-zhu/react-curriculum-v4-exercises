export default function FilterButtonGroup({ filter, onSelect }) {
  return (
    <div>
      <button onClick={() => onSelect('all')}>All</button>
      <button onClick={() => onSelect('completed')}>Completed</button>
      <button onClick={() => onSelect('pending')}>Pending</button>
      <p>Current filter: {filter}</p>
    </div>
  );
}

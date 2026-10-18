function SnackList() {
  const snackArray = [
    {
      rank: 4,
      name: 'cheez-its',
    },
    {
      rank: 3,
      name: 'potato chips',
    },
    {
      rank: 2,
      name: 'cheerios',
    },
    {
      rank: 1,
      name: 'apples',
    },
  ];

  const sortedSnackArray = snackArray.toSorted((a, b) => a.rank - b.rank);

  return (
    <ul>
      {sortedSnackArray.map((snack) => (
        <li key={snack.rank}>{snack.name}</li>
      ))}
    </ul>
  );
}

export default SnackList;

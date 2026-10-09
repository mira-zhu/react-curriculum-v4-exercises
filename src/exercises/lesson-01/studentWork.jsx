//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Mira Zhu';
  const age = 26;
  const hobbies = [
    { key: 1, item: 'Baking' },
    { key: 2, item: 'Reading' },
    { key: 3, item: 'Staring at the sun' },
  ];

  return (
    <div>
      <h1>{name}</h1>
      <p> I am {age} and eat a lot of cheese. </p>
      <h2>Hobbies:</h2>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby.key}>{hobby.item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function SetList({ sets }) {
  return (
    <ul>
      {sets.map(set => <li key={set.id}>{set.exercise} - {set.weight}kg x {set.reps}</li>)}
    </ul>
  );
}
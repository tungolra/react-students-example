function Score({ scores }) {
  return (
    <ul className="scores">
      {" "}
      Scores:
      {scores.map((s, idx) => (
        <li className="date" key={idx}>
          {s.date}: {s.score}
        </li>
      ))}
    </ul>
  );
}
export default Score;

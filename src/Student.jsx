import Score from "./Score";

function Student({ students }) {
  return (
    <ul className="students">
      {students.map((s, idx) => (
        <li className="name" key={idx}>
          {s.name}
          <div className="bio">Bio: {s.bio}</div>
          <div>
            <Score scores={s.scores} />
          </div>
        </li>
      ))}
    </ul>
  );
}
export default Student;

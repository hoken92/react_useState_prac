import Score from "./Score";

function Learner({ name, bio, scores }) {
  return (
    <>
      <h2>Learner:</h2>
      <p> {name}</p>
      <h3>Bio:</h3>
      <p> {bio}</p>
      <h4>Scores:</h4>
      <ul style={{ listStyleType: "none" }}>
        {scores.map((score, i) => {
          return <Score key={i} date={score.date} score={score.score} />;
        })}
      </ul>
    </>
  );
}

export default Learner;

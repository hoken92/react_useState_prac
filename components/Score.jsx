function Score({ date, score }) {
  return (
    <li>
      <span>{date}: </span>
      <span>{score} points</span>
    </li>
  );
}

export default Score;

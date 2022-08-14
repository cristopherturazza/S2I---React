export default function Instruction(props) {
  return (
    <div
      className={
        props.number % 2 != 0 ? "instruction-box dark" : "instruction-box"
      }
    >
      <div className="instruction-index">{props.number}</div>
      <div className="instruction-text">{props.text}</div>
    </div>
  );
}

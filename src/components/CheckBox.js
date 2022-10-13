export default function Checkbox({ className, text, background, ...rest }) {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} />{" "}
      {background ? (
        <span style={{ background: "green" }}>{text}</span>
      ) : (
        <span>{text}</span>
      )}
    </label>
  );
}

export default function Select(props) {
  return (
    <>
      <label htmlFor={props.name}>{props.name}</label>
      <select
        name={props.name}
        id={props.name}
        className="py-[11px] px-3 bg-transparent border-2 border-solid hover:cursor-pointer"
      >
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
      </select>
    </>
  );
}

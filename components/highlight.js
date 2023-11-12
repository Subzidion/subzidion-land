export default function Highlight(props) {
  return (
    <span className={"rounded-full p-1 px-4 whitespace-nowrap polka-" + props.mode}>
      {props.children}
    </span>
  )
}
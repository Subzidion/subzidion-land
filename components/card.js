export default function Card(props) {
  return (
    <div className="card border-solid border-black border-8 p-2 m-5 lg:m-10">
      {props.children}
    </div>
  )
}
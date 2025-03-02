const textColor = "beige";

function Greeting(props) {
  return (
    <>
        <h1>Hello {props.username}, Welcome to React!</h1>
        <p style={{color: "beige"}}>This text is {textColor}.</p>
    </>
  )
}

export default Greeting
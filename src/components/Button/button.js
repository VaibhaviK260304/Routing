import "./button.css"

function button({text}) {
  return (
    <button className='btn'>
        {text}
    </button>
  )
}

export default button
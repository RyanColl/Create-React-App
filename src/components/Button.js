/* const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )
 */
  const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
  export default Button
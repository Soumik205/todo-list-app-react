import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
  const onClick = () => {
    console.log('CLick')
  }

  return (
    <header className = 'header'>
      <h1>{title}</h1>
      <Button color = 'green' text = 'hello' onClick = {onClick} />
    </header>
  )
}

Header.defaultProps = {
  title : 'areh baby!',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
} 

//CSS in JS 
// <h1 style = {headingStyle}> {title} </h1>
// const headingStyle = {
//   color : 'red',
//   backgroundColor: 'black',
// }

export default Header
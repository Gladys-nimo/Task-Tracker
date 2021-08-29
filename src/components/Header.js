import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
       <header>
           <h1>{title}</h1>
       </header>  
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
// i faced an error because i didnt start with small p//


export default Header

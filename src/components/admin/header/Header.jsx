import PropTypes from 'prop-types'


const Header = ({ text, bgColor, textColor }) => {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
    }
    return (
        <header style={ headerStyles }>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'VEGGIE RESCUE ADMIN',
    bgColor: '#176C3E',
    textColor: '#fffcf2'
}

Header.propTypes = {
    text: PropTypes.string, 
    bgColor: PropTypes.string,
    textColor: PropTypes.string,

}
export default Header
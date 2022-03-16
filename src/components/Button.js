import PropTypes from 'prop-types'

const Button = ({ text, color, onClick }) => {
    const btnStyle = {
        backgroundColor: color
    }
    return <button onClick={onClick} className='btn' style={btnStyle}>{text}</button>
}

Button.defaultProps = {
    color: "steelblue"
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
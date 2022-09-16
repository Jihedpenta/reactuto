import React from 'react'
import PropTypes from 'prop-types'


const Button = ({color, text,onClick}) => {
    // const onClick = (e)=>{
    //     console.log(e);
    // }

    return <button className="btn" style={{backgroundColor: color}} onClick={onClick}>{text}</button>

}


Button.defaultProps = { 
    color : "steelblue",
}
Button.propTypes = {
    title : PropTypes.string.isRequired,
    color : PropTypes.string,
}
export default Button

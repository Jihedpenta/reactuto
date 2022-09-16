import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,newTask}) => {
    

    return (
        <header className='header'>
            <h1>
                {title}
            </h1>
            <Button color='green' text='Add task' onClick={newTask}/>
        </header>
    )
}

// Header.defaultProps = { 
//     title : "Default Header",
// }
Header.propTypes = {
    title : PropTypes.string.isRequired
}
export default Header

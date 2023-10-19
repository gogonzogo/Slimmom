//external
import {string} from 'prop-types'
//internal
import s from './Heading.module.css'

const Heading = ({heading}) => {
    
    return (
        <>
            <h1 className={s.heading}>{heading}</h1>
        </>
    )
};

Heading.propTypes= {
    heading: string.isRequired,
}

export default Heading;
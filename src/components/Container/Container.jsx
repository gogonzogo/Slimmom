import { node, string } from 'prop-types';

const Container = ({children, className}) => {
    return (
        <div className={className}>{children}</div>
    )
};

Container.propTopes = {
    children: node.isRequired,
    className: string
};

export default Container ;
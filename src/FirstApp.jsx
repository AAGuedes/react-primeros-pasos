import PropTypes from 'prop-types'

const newMessage = {
    message: 'Hello World!',
    title: 'FirstApp',
}

const getResult = (a, b) => {
    return a + b;
}

// Lo que está englobado por <></> puede hacerse también con Fragment
export const FirstApp = ({ title, subtitle, name }) => {

    // console.log(props);

    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            <p>{subtitle}</p>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    name: 'John Doe',
    subtitle: 'No subtitle',
}

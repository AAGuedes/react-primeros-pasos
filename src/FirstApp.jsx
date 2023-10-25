import PropTypes from 'prop-types'

const newMessage = {
    message: 'Hello World!',
    title: 'FirstApp',
}

const getResult = (a, b) => {
    return a + b;
}

// Lo que está englobado por <></> puede hacerse también con Fragment
export const FirstApp = ({ title, subtitle }) => {

    // console.log(props);

    return (
        <>
            <h1>{ title }</h1>
            <p>{ subtitle }</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

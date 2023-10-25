const newMessage = {
    message: 'Hello World!',
    title: 'FirstApp',
}

const getResult = (a, b) => {
    return a + b;
}

// Lo que está englobado por <></> puede hacerse también con Fragment
export const FirstApp = ({ title }) => {

    // console.log(props);

    return (
        <>
            <h1>{ title }</h1>
            {/* <h1>{ JSON.stringify( newMessage )}</h1> */}
            <p>Loren ipsun...</p>
        </>
    )
}

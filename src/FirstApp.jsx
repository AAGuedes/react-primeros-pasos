const newMessage = {
    message: 'Hello World!',
    title: 'FirstApp',
}

const getResult = (a, b) => {
    return a + b;
}

// Lo que está englobado por <></> puede hacerse también con Fragment
export const FirstApp = () => {
    return (
        <>
            <h1>FirstApp</h1>
            {/* <h1>{ JSON.stringify( newMessage )}</h1> */}
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, iste? Laboriosam nesciunt molestias saepe placeat ut debitis quos, ullam, soluta pariatur accusantium vero incidunt, iste omnis fugit rerum. Tempore, sapiente.</p>
        </>
    )
}

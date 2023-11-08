import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas de <FirstApp />', () => {

    test('Debe de coincidir con el Snapshot', () => {

        const title = `Hello, I'm John Doe`;

        render(<FirstApp title={title} />);

    });

});

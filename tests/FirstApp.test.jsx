import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas de <FirstApp />', () => {

    test('Debe de coincidir con el Snapshot', () => {

        const title = `Hello, I'm John Doe`;
        const { container } = render(<FirstApp title={title} />);

        expect(container).toMatchSnapshot();

    });

    test('Debe mostrar el título en un h1', () => {

        const title = `Hello, I'm John Doe`;
        const { container, getByText } = render(<FirstApp title={title} />);

        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);

    });

});

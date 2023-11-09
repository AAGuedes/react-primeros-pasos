import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas de <FirstApp />', () => {

    const title = `Hello, I'm John Doe`;
    const subtitle = 'No hay subtitulo';

    test('Debe de coincidir con el Snapshot', () => {
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    });

    test(`Debe mostrar el mensaje Hello, I'm John Doe`, () => {
        render(<FirstApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('Debe mostrar el título en un h1', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

    test('Debe mostrar el subtitulo enviado por props', () => {
        render(
            <FirstApp
                title={title}
                subtitle={subtitle}
            />
        );
        expect(screen.getAllByText(subtitle).length).toBe(2);
    });

});

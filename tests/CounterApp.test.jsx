import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Pruebas de <CounterApp />', () => {

    const initialValue = 100;

    test('Debe de coincidir con el Snapshot', () => {
        const snapshot = render(<CounterApp value={initialValue} />);
        expect(snapshot).toMatchSnapshot();
    });

    test('Debe de mostrar el valor inicial de 100', () => {
        render(<CounterApp value={initialValue} />);
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100');
    });

});

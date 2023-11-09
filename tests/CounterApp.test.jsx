import { fireEvent, render, screen } from "@testing-library/react";
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

    test('Debe incrementar el valor inicial con el botón +1', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        // screen.debug();
        expect(screen.getAllByText('101')).toBeTruthy();
        // expect(screen.getAllByText(initialValue + 1)).toBeTruthy();
    });

    test('Debe decrementar el valor inicial con el botón -1', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1'));
        // screen.debug();
        expect(screen.getAllByText('99')).toBeTruthy();
        // expect(screen.getAllByText(initialValue - 1)).toBeTruthy();
    });

    test('Debe de funcionar el botón de reset', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        // fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button', { name: "btn-reset" }));
        // screen.debug();
        expect(screen.getAllByText(initialValue)).toBeTruthy();
    });

});

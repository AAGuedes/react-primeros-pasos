import { getSaludo } from "../../src/base-pruebas/02-template-string";


describe('Prueba de 02-emplate-string', () => {

    test('getSaludo debe retornar "Hola John Doe"', () => {

        const name = 'John Doe';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
    });

})

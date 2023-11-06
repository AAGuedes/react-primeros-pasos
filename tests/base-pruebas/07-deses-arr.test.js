import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";


describe('Pruebas de 07-deses-arr', () => {

    test('Debe retornar un string y un number', () => {

        const [str, num] = retornaArreglo();

        expect(typeof str).toBe('string');

        expect(typeof num).toBe('number');

        expect(str).toStrictEqual(expect.any(String));

        expect(num).toStrictEqual(expect.any(Number));

    });

});

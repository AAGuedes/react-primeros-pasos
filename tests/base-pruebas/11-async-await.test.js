import { getImagen } from "../../src/base-pruebas/11-async-await";



describe('Pruebas en 11-async-await', () => {

    test('getImagen debe retornar un url de la imagen si tenemos ApiKey', async () => {

        const resp = await getImagen();

        expect(typeof resp).toBe('string');

    });

    test('getImagen debe retornar un error si no tenemos ApiKey', async () => {

        const resp = await getImagen();

        expect(resp).toEqual('No se encontro la imagen');

    });

});

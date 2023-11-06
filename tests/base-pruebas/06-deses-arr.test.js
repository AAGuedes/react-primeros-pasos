import { usContext } from "../../src/base-pruebas/06-deses-obj";


describe('Pruebas de 06-deses-arr', () => {

    test('usContext debe retornar un objeto', () => {

        const testPersonData = {
            clave: 'Ironman',
            edad: 45,
        }

        const testPerson = {
            nombreClave: testPersonData.clave,
            anios: testPersonData.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        const person = usContext(testPersonData);

        expect(person).toStrictEqual(testPerson);

    });

});
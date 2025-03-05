import { permutationsIi } from '../problems/permutations-ii';

describe('permutations-ii', () => {
    test('case 1', () => {
        const nums = [1, 1, 2];
        const expected = [[1, 1, 2], [1, 2, 1], [2, 1, 1]];
        expect(permutationsIi(nums).sort()).toEqual(expected.sort());
    });

    test('case 2', () => {
        const nums = [1, 2, 3];
        const expected = [
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1]
        ];
        expect(permutationsIi(nums).sort()).toEqual(expected.sort());
    });

    test('case 3', () => {
        const nums = [1];
        const expected = [[1]];
        expect(permutationsIi(nums)).toEqual(expected);
    });

    test('case 4', () => {
        const nums = [1, 1];
        const expected = [[1, 1]];
        expect(permutationsIi(nums)).toEqual(expected);
    });
});
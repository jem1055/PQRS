
import { FilterPipe } from './filter.pipe'

describe('FilderPipe', () => {
    it('create an instante', () => {
        const pipe = new FilterPipe();
        expect(pipe).toBeTruthy();
    });
});
import {handleSubmit} from '../client/js/formHandler';

/*https://stackoverflow.com/questions/12209582/the-describe-keyword-in-javascript*/
/*https://jasmine.github.io/2.0/introduction*/

describe('Form Handler Test', () => {
    it('It should be true if handleSubmit is defined', () => {
        expect(handleSubmit).toBeDefined();
    });

    it('It should be true if handleSubmit is a function', () => {
        expect(typeof handleSubmit).toBe('function');
    });
})


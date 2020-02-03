import {checkForName} from '../client/js/nameChecker';

/*https://stackoverflow.com/questions/12209582/the-describe-keyword-in-javascript*/
/*https://jasmine.github.io/2.0/introduction*/

describe('Check Name Test', () => {
    it('It should be true if checkForName is defined', () => {
        expect(checkForName).toBeDefined();
    });

    it('It should be true if checkForName is a function', () => {
        expect(typeof checkForName).toBe('function');
    });
})
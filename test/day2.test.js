import {expect} from 'chai';
import day2 from '../src/day2';

describe('day 2 tests', () => {
    it('should return undefined if no parameter passed', () => {
        expect(day2()).to.be.undefined;
    });

    it('should return a string when a string is passed', () => {
        expect(day2('some string')).to.be.a('string');
    })
});
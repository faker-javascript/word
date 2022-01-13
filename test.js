import test from 'ava';
import word from './index.js';

test('word return type to be string', t => {
    t.is(typeof word(), 'string');
});

test('word length is 3', t => {
    t.is(word().length, 3);
});

test('word length is 10', t => {
    t.is(word({length: 10}).length, 10);
});

test('word length with length 12 is unique', t => {
    const word1 = word({length: 12});
    const word2 = word({length: 12});
    t.false(word1 === word2);
});

test('word length -1', t => {
    t.is(word({length: -1}).length, 1);
});

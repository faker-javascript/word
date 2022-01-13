import {expectType} from 'tsd';
import word from './index.js';

expectType<string>(word());
expectType<string>(word({length: 3}));
expectType<string>(word({length: -1}));

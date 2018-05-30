#!/usr/bin/env node
import { questionOfName, questionOfNunber } from '..';

console.log(`
${'Welcome to the Brain Games'}!`);
console.log(`${'Answer "yes" if number even otherwise answer "no".'}
`);
questionOfNunber(questionOfName(), 2);

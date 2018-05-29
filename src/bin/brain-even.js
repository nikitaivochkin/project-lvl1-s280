#!/usr/bin/env node
import { questionOfName, game, questionOfNunber } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
questionOfName();
game(questionOfNunber(), 2);

install: 
	npm install

start: 
	npm run babel-node -- src/bin/gcd.js

publish:
	npm publish

lint:
	npm run eslint .
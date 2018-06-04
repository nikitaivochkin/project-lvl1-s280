install: 
	npm install

start: 
	npm run babel-node -- src/bin/balance.js

publish:
	npm publish

lint:
	npm run eslint .
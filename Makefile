install: 
	npm install

start: 
	npm run babel-node -- src/bin/even.js

publish:
	npm publish

lint:
	npm run eslint .
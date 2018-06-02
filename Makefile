install: 
	npm install

start: 
	npm run babel-node -- src/bin/progression.js

publish:
	npm publish

lint:
	npm run eslint .
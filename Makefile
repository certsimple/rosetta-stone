json/rosetta-stone.json: rosetta-stone.md node_modules
	npm run-script build

node_modules:
	npm install

install:
	npm install
	cd client && $(MAKE) install

start:
	node --es-module-specifier-resolution=node dist/server.js

build: install
	rm -rf dist
	npx tsc
	cd client && $(MAKE) build

rebuild:
	cd client && $(MAKE) rebuild

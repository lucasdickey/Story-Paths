clean:
	(cd StoryPaths && rm -rf node_modules/)

lint:
	(cd StoryPaths && npm run lint)

lint-fix:
	(cd StoryPaths && npm run lint -- --fix)

npm-install:
	(cd StoryPaths && npm install)

update-routes:
	(cd StoryPaths && ./scripts/generate-screens-barrels)

update-image-exports:
	(cd StoryPaths && ./scripts/generate-images-barrels)

reset-watchman:
	watchman watch-del $(shell pwd)/StoryPaths; watchman watch-project $(shell pwd)/StoryPaths

run-android: update-routes reset-watchman
	(cd StoryPaths && npm run android)

run-ios: update-routes reset-watchman
	(cd StoryPaths && npm run ios)

setup: clean npm-install update-routes update-image-exports

test:
	(cd StoryPaths && npm test)

tsc:
	(cd StoryPaths && npx tsc)

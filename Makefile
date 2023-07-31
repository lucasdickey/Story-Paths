clean:
	(cd StoryPaths && rm -rf node_modules/)

install:
	(cd StoryPaths && npm install)

lint:
	(cd StoryPaths && npm run lint)

lint-fix:
	(cd StoryPaths && npm run lint -- --fix)

run-android:
	(cd StoryPaths && npm run android)

run-ios:
	(cd StoryPaths && npm run ios)

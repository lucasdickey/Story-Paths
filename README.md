# Story-Paths

From the root directory of the project

1. `make clean` - deletes `nodes_module` folder
2. `make npm-install` - installs `npm` packages
3. `make lint` / `make lint-fix` - lints the source code
4. `make run-android` / `make run-ios` - runs the app
5. `make update-routes` - deletes and generates screens barrel files
6. `make setup` - runs `clean`, `npm-install`, and `update-routes` targets
7. `make test` - runs `jest` tests
8. `make tsc` - runs typescript type checker

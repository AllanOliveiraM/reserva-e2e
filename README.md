# reserva-e2e

Automated e2e tests for Reserva.

## Settings and environment

### Package Manager

Use the package manager [yarn](https://yarnpkg.com/getting-started/install) to install the dependencies.

**Important:** Make sure you have the yarn installed globally as it is necessary for use the project's features.

Install yarn with the following command:

```sh
npm install -g yarn
```

<br />

### Dependencies

Install dependencies with the following command:

```sh
yarn
```

The postinstall script will run automatically. If you notice that this has not occurred, run the following command:

```sh
yarn postinstall
```

This command will install the husky hooks in the git repository to control preprocessors for commits and pushes, such as code formatters and Eslint, and the required automatic project settings.

### Try to run!

```sh
yarn e2e:headless
```

### The 'cypress.env.json'

This file contains the settings of all cypress environments needed for testing.

- **timeMsToVisualWait**: The number of milliseconds to wait when 'useVisualSpeeddown' is true;
- **useVisualSpeeddown**: A boolean value indicating whether the system need to use waits on the tests for visually purposes.

### The 'cypress.json'

**INFO**: A more complete explanation you can find in the [cypress documentation](https://docs.cypress.io/guides/references/configuration).

- **baseUrl**: The adress of the application;

## Scripts

- **postinstall**: Runs automatically after installation of the yarn packages to set the husky git hooks;
- **reinstall**: Removes the node_modules folder recursively, recreate yarn.lock and reinstall all node/yarn packages again;
- **commit**: Start a commit with git-cz pattern cli tool;
- **type:check**: Checks all types of the project;
- **prettier**: Automatically check and format the code by pattern settings;
- **prettier:check**: Verify that the code is in the correct format;
- **eslint**: Automatically check and format the code with integrity settings;
- **eslint:check**: Verify the code integrity;
- **e2e:open**: Starts Cypress locally for manual testing;
- **e2e:headless**: Run all tests automatically locally in headless mode;

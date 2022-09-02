# reserva-e2e

Automated e2e tests for Reserva.

## Settings and environment

### The 'cypress.env.json'

This file contains the settings of all cypress environments needed for testing.

- **timeMsToVisualWait**: The number of milliseconds to wait when 'useVisualSpeeddown' is true;
- **useVisualSpeeddown**: A boolean value indicating whether the system need to use waits on the tests for visually purposes.

### The 'cypress.json'

**INFO**: A more complete explanation you can find in the [cypress documentation](https://docs.cypress.io/guides/references/configuration).

- **baseUrl**: The adress of the application 'Exam Online';

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

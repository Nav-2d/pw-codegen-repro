import { devices, defineConfig } from '@playwright/test';
export default defineConfig({
  workers: 4,
  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
      teardown: 'teardown',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'teardown',
      testMatch: /.*\.teardown\.ts/,
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
      dependencies: ['setup'],
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
      dependencies: ['setup'],
    },
  ],
});

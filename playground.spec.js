// @ts-check
import { test, expect } from '@playwright/test';
import { Playground } from '../pages/playground';


test.beforeEach(async ({ page }) => {
  const playground = new Playground(page);
  await playground.navigateTo();
});


// test('Button section - button displays correct status after clicking', async ({ page }) => {
//   const playground = new Playground(page);

//   await playground.clickButtonInGivenState(true);
//   await playground.clickButtonInGivenState(false);

// });


test('Button with timer - single click', async ({ page }) => {
  const playground = new Playground(page);


  const buttonLoadTimeout = 7000; // button can be updated in beetween 3 and 7 seconds

await expect(page.getByRole('heading', { name: 'Timer Button' })).toBeVisible();

  await playground.clickTimerButton(buttonLoadTimeout);

});


test('Button with timer - multiple click', async ({ page }) => {

  const playground = new Playground(page);
  const buttonLoadTimeout = 7000; // button can be updated in beetween 3 and 7 seconds

  await expect(page.getByRole('heading', { name: 'Timer Button' })).toBeVisible();

  await playground.clickTimerButton(buttonLoadTimeout);
  await playground.clickTimerButton(buttonLoadTimeout);

});

  await expect(page.getByTestId('timer-result')).toHaveText('Complete', { timeout: buttonLoadTimeout });

});

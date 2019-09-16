/* eslint-env detox/detox */

describe('Example (hello)', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show "Step One" at the begging', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
  });

  it('should not show "See Your Changes" at the begging', async () => {
    await expect(element(by.text('See Your Changes'))).not.toBeVisible();
  });

  it('should render "See Your Changes" in the second slide', async () => {
    await element(by.id('slides')).swipe('left');
    await expect(element(by.text('See Your Changes'))).toBeVisible();
  });

  it('should enable swiping back and forth', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
    await element(by.id('slides')).swipe('left');
    await element(by.id('slides')).swipe('right');
    await expect(element(by.text('Step One'))).toBeVisible();
  });

  it('should render "Debug" and have a Button to click in the third slide', async () => {
    await element(by.id('slides')).swipe('left');
    await element(by.id('slides')).swipe('left');
    await expect(element(by.text('Debug'))).toBeVisible();

    await element(by.text('Click here!')).tap();
    await expect(element(by.text('Clicked!'))).toBeVisible();
  });

  it('should render "Learn More" and change text in the fourth slide', async () => {
    await element(by.id('slides')).swipe('left');
    await element(by.id('slides')).swipe('left');
    await element(by.id('slides')).swipe('left');
    await expect(element(by.text('Learn More'))).toBeVisible();

    const docsInput = element(by.id('docsInput'));

    await expect(docsInput).toBeVisible();

    await docsInput.clearText();
    await docsInput.typeText('Maybe later!');

    await expect(docsInput).toHaveText('Maybe later!');
  });
});

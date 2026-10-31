import {test, expect} from '@playwright/test'

test('Sample Test Title Checks', async ({page})=>{

    await page.goto('https://commitquality.com/');
    console.log(await page.title());

    await expect(page).toHaveTitle('CommitQuality - Test Automation Demo');
})

test('Clicking Practice Site', async ({page})=>{

    await page.goto('https://commitquality.com/');

    await page.getByText('Practice').click();

    await expect(page).toHaveURL('https://commitquality.com/practice');

    const Links = await page.locator('a').count();

    console.log(`Total Links in this page ${Links}`);

     expect(Links).toBe(5);
})

test ('Handling Dynamic text', async ({page})=>{

    await page.goto('https://commitquality.com/practice');

    await page.getByTestId('practice-dynamic-text').click();

    await expect(page).toHaveURL('https://commitquality.com/practice-dyanmic-text');

    await page.getByRole('button', { name: 'Always visible' }).click();

    await expect(page.getByText('Loading')).toBeVisible();
    

    await expect(page.getByText('I am visible after 5 seconds')).toBeVisible({timeout:10000});


})
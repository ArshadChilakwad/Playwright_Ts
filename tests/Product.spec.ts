import { test, expect } from '@playwright/test'
import { POManager } from '../PageObjects/POManager'
const dataset = JSON.parse(JSON.stringify(require('../Utils/testdata.json')))

test.beforeEach(async ({ page, browser }) => {
	const poManager = new POManager(page)
	const loginPage = poManager.getLoginPage()
	await loginPage.validLogin(dataset.url, dataset.username, dataset.password)
})

test('User product sort test.', async ({ page }) => {
	const poManager = new POManager(page)
	const productsPage = poManager.getProductsPage()
	//To verify header
	expect(await productsPage.getTitle()).toBe('Products')

	//Select sorting by Name(A to Z)
	await productsPage.selectByValue('az')
	expect(await productsPage.getActiveOption()).toBe('Name (A to Z)')

	//Select sorting by Name(Z to A)
	await productsPage.selectByValue('za')
	expect(await productsPage.getActiveOption()).toBe('Name (Z to A)')
})

test('Click on product img and verify details', async ({ page }) => {
	const poManager = new POManager(page)
	const productsPage = poManager.getProductsPage()
	//Click on bagpack
	await page
		.locator('img[data-test="inventory-item-sauce-labs-backpack-img"]')
		.click()
	//To verify back to products btn is visible
	await expect(page.locator('#back-to-products')).toBeVisible()
	//To verify name of product
	expect(
		await page.locator('.inventory_details_name.large_size').innerText()
	).toBe('Sauce Labs Backpack')
	//To verify price of product
	expect(await page.locator('.inventory_details_price').innerText()).toContain(
		'29.99'
	)
	//To click on back to products
	await page.locator('#back-to-products').click()
	expect(await productsPage.getAllProcuctsCount()).toBe(6)
})

import { test, expect } from '@playwright/test'
import { POManager } from '../PageObjects/POManager'
const dataset = JSON.parse(JSON.stringify(require('../Utils/testdata.json')))

test.beforeEach(async ({ page }) => {
	const poManager = new POManager(page)
	const loginPage = poManager.getLoginPage()
	await loginPage.validLogin(dataset.url, dataset.username, dataset.password)
})
test('End to end test', async ({ page }) => {
	const poManager = new POManager(page)
	const productsPage = poManager.getProductsPage()
	const cartPage = poManager.getCartPage()
	const checkoutPage = poManager.getCheckoutPage()
	const overviewPage = poManager.getOverviewPage()
	await productsPage.addToCart(dataset.productName)
	//check that there is 1 element in the cart
	expect(await productsPage.isAddedToCart()).toBe(true)
	await productsPage.navigateToCart()
	expect(await cartPage.getTitle()).toBe('Your Cart')

	//check that element is in the cart
	expect(await cartPage.getItemQuantity()).toBe('1')
	expect(await cartPage.getItemName()).toBe('Sauce Labs Backpack')
	expect(await cartPage.continueShoppingBtn()).toBeVisible()
	;(await cartPage.checkoutBtn()).click()

	await checkoutPage.addInformation(
		dataset.information.firstName,
		dataset.information.lastName,
		dataset.information.postalCode
	)
	//Checkout Overview
	expect(await overviewPage.overviewHeader()).toBe('Checkout: Overview')
	//Item Name
	expect(await overviewPage.itemLabel()).toContain('Sauce Labs Backpack')
	//Item Quantity
	expect(await overviewPage.itemQuantity()).toBe('1')
	//Item Price
	expect(await overviewPage.itemPrice()).toContain('29.99')
	;(await overviewPage.finishBtn()).click()
	//Order Complete Page
	expect(await overviewPage.headerText()).toBe('Thank you for your order!')
	expect(await overviewPage.backHomeBtn()).toBeVisible()
})

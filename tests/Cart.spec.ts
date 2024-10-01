import { test, expect } from '@playwright/test'
import { POManager } from '../PageObjects/POManager'
const dataset = JSON.parse(JSON.stringify(require('../Utils/testdata.json')))

test.beforeEach(async ({ page }) => {
	const poManager = new POManager(page)
	const loginPage = poManager.getLoginPage()
	await loginPage.validLogin(dataset.url, dataset.username, dataset.password)
})

test.describe('Cart functionality test', () => {
	test('Standard user tries to add 1 product to the cart and remove.', async ({
		page
	}) => {
		const poManager = new POManager(page)
		const productsPage = poManager.getProductsPage()
		const cartPage = poManager.getCartPage()

		//add backpack to the cart
		await productsPage.addToCart(dataset.productName)
		//check that there is 1 element in the cart
		expect(await productsPage.isAddedToCart()).toBe(true)
		await productsPage.navigateToCart()
		expect(await cartPage.getTitle()).toBe('Your Cart')

		//check that element is in the cart
		expect(await cartPage.getItemQuantity()).toBe('1')
		expect(await cartPage.getItemName()).toBe('Sauce Labs Backpack')
		expect(await productsPage.getTextFromBackpackButton()).toEqual('Remove')

		//remove item from the cart
		await cartPage.removeItem(dataset.productName)
	})

	test('Standard user tries to add 2 products to the cart.', async ({
		page
	}) => {
		const poManager = new POManager(page)
		const productsPage = poManager.getProductsPage()
		//add backpack to the cart
		await productsPage.addToCart(dataset.productName)
		//check that there is element in the cart
		expect(await productsPage.isAddedToCart()).toBe(true)
		//check that there is 1 element in the cart
		expect(await productsPage.getCartItemsCount()).toBe('1')
		console.log(await productsPage.getCartItemsCount())

		//add second item to the cart
		await productsPage.addToCart(dataset.product2Name)
		//check that there are 2 elements in the cart
		expect(await productsPage.getCartItemsCount()).toBe('2')
		console.log(await productsPage.getCartItemsCount())
	})
})

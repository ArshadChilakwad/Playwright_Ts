import { Page, expect, Locator } from '@playwright/test'

export class ProductsPage {
	readonly page: Page
	constructor(page: Page) {
		this.page = page
	}

	async getAllProcuctsCount() {
		return await this.page.locator('.inventory_item_price').count()
	}
	async getTitle() {
		return await this.page.locator('.title').textContent()
	}

	async addToCart(product: string) {
		await this.page.locator("button[data-test*='" + product + "']").click()
	}

	async isAddedToCart() {
		return await this.page.locator('.shopping_cart_badge').isEnabled()
	}

	async getCartItemsCount() {
		return await this.page.locator('.shopping_cart_badge').textContent()
	}

	async navigateToCart() {
		await this.page.locator('.shopping_cart_link').click()
	}

	async getTextFromBackpackButton() {
		return await this.page
			.locator("button[data-test*='backpack']")
			.textContent()
	}

	async selectByValue(value: string) {
		const dropdown = this.page.locator('select.product_sort_container')
		await dropdown.selectOption(value)
	}

	async getProductsPrice() {
		const itemsPriceList = this.page.locator('.inventory_item_price')

		let pricesArray: string[] = []
		for (let i = 0; i < (await itemsPriceList.count()); i++) {
			const txt = await itemsPriceList.nth(i).textContent()
			if (txt) {
				pricesArray.push(txt)
			}
		}
		return pricesArray
	}

	async getActiveOption() {
		return await this.page.locator('.active_option').textContent()
	}
}
module.exports = { ProductsPage }

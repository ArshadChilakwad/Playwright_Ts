import { Page, expect, Locator } from '@playwright/test'
export class CartPage {
	readonly page: Page
	readonly checkout: Locator
	readonly continueShopping: Locator

	constructor(page: Page) {
		this.page = page
		this.checkout = page.locator('#checkout')
		this.continueShopping = page.locator('#continue-shopping')
	}

	async getTitle() {
		return await this.page.locator('.title').textContent()
	}

	async getItemQuantity() {
		return await this.page.locator('.cart_quantity').textContent()
	}

	async getItemName() {
		return await this.page.locator('.inventory_item_name').textContent()
	}

	async getItemPrice() {
		return await this.page.locator('.inventory_item_price').textContent()
	}

	async removeItem(product: string) {
		await this.page.locator("button[data-test*='" + product + "']").click()
	}

	async getShoppingCartBadge(): Promise<Locator> {
		return this.page.locator('.shopping_cart_badge')
	}
	async checkoutBtn(): Promise<Locator> {
		return this.checkout
	}
	async continueShoppingBtn(): Promise<Locator> {
		return this.continueShopping
	}
}
module.exports = { CartPage }

import { Page, expect, Locator } from '@playwright/test'
export class OverviewPage {
	readonly page: Page
	readonly finish: Locator
	readonly headerTxt: Locator
	readonly backToHom: Locator
	constructor(page: Page) {
		this.page = page
		this.finish = page.locator('#finish')
		this.headerTxt = page.locator('.complete-header')
		this.backToHom = page.locator('#back-to-products')
	}

	async finishBtn(): Promise<Locator> {
		return this.finish
	}
	async backHomeBtn(): Promise<Locator> {
		return this.backToHom
	}
	async headerText() {
		return await this.headerTxt.textContent()
	}
	async overviewHeader() {
		return await this.page.locator('.title').textContent()
	}
	async itemLabel() {
		return await this.page.locator('.cart_item_label').innerText()
	}
	async itemQuantity() {
		return await this.page.locator('.cart_quantity').innerText()
	}
	async itemPrice() {
		return await this.page.locator('.inventory_item_price').innerText()
	}
}

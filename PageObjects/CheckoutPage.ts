import { Page, expect, Locator } from '@playwright/test'
export class CheckoutPage {
	readonly page: Page
	readonly firstName: Locator
	readonly lastName: Locator
	readonly pinCode: Locator
	readonly continue: Locator

	constructor(page: Page) {
		this.page = page
		this.firstName = page.locator('#first-name')
		this.lastName = page.locator('#last-name')
		this.pinCode = page.locator('#postal-code')
		this.continue = page.locator('#continue')
	}

	async addInformation(fName: string, lName: string, pin: string) {
		await this.firstName.fill(fName)
		await this.lastName.fill(lName)
		await this.pinCode.fill(pin)
		await this.continue.click()
	}
}

import { Page, expect, Locator } from '@playwright/test'

export class LoginPage {
	readonly page: Page
	readonly signInbutton: Locator
	readonly userName: Locator
	readonly password: Locator
	readonly title: Locator
	readonly hamburgerIcon: Locator
	readonly logout: Locator
	constructor(page: Page) {
		this.page = page
		this.signInbutton = page.locator("[value='Login']")
		this.userName = page.locator('#user-name')
		this.password = page.locator('#password')
		this.title = page.locator('.login_logo')
		this.hamburgerIcon = page.locator('#react-burger-menu-btn')
		this.logout = page.locator('#logout_sidebar_link')
	}

	async goTo() {
		await this.page.goto('https://www.saucedemo.com/')
	}
	async verifyTitile() {
		await expect(this.title).toHaveText('Swag Labs')
	}
	async clickOnHamBurgerIcon() {
		await this.hamburgerIcon.click()
	}
	async clickOnLogout() {
		await this.logout.click()
	}
	async validLogin(url: string, username: string, password: string) {
		await this.page.goto(url)
		await this.userName.fill(username)
		await this.password.fill(password)
		await this.signInbutton.click()
		await this.page.waitForLoadState('networkidle')
	}
}
module.exports = { LoginPage }

import { Page, Locator } from '@playwright/test'
import { LoginPage } from '../PageObjects/LoginPage'
import { CartPage } from '../PageObjects/CartPage'
import { ProductsPage } from '../PageObjects/ProductsPage'
import { CheckoutPage } from './CheckoutPage'
import { OverviewPage } from './OverviewPage'

export class POManager {
	readonly page: Page
	readonly loginPage: LoginPage
	readonly cartPage: CartPage
	readonly productsPage: ProductsPage
	readonly checkoutPage: CheckoutPage
	readonly overviewPage: OverviewPage

	constructor(page: Page) {
		this.page = page
		this.loginPage = new LoginPage(this.page)
		this.cartPage = new CartPage(this.page)
		this.productsPage = new ProductsPage(this.page)
		this.checkoutPage = new CheckoutPage(this.page)
		this.overviewPage = new OverviewPage(this.page)
	}

	getLoginPage() {
		return this.loginPage
	}
	getOverviewPage() {
		return this.overviewPage
	}
	getCheckoutPage() {
		return this.checkoutPage
	}
	getProductsPage() {
		return this.productsPage
	}

	getCartPage() {
		return this.cartPage
	}
}
module.exports = { POManager }

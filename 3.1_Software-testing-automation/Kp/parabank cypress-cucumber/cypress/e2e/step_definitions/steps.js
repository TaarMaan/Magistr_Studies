import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import  mainPage  from "../../page-objects/MainPage";

Given('пользователь залогинен', () => {
    mainPage.login()
})

When('пользователь нажимает на кнопку {string} в боковом меню', (value) => {
    mainPage.sideMenuButtonClick(value)
})

When('вводит в поле "First Name" значение {string}', (value) => {
    mainPage.firstNameFieldFill(value)
})

When ('нажимает на кнопку {string}', (value) => {
    mainPage.buttonClick(value)
})

Then('отображается надпись {string}', (value) => {
    mainPage.inscriptionDisplayed(value)
})

Given('открыта главная страница', () => {
    mainPage.visitMainPage()
})

Given('открыта страница about', () => {
    mainPage.visitAboutPage()
})

When('пользователь нажимает на икноку дома в шапке страницы', () => {
    mainPage.mainPageIconClick()
})

Then('отображается главная страница', () => {
    mainPage.checkUrl('index')
})

When('пользователь нажимает на икноку письма в шапке страницы', () => {
    mainPage.contactIconClick()
})

When('заполняет поля обратной связи', () => {
    mainPage.contactFieldFill()
})

When('пользователь нажимает на кнопку "Register"', () => {
    mainPage.registerButtonClick()
})

When('заполняет все поля кроме "Username"', () => {
    mainPage.registerFieldFillWithoutUsername()
})

Then('отображается ошибка "Username is required"', () => {
    mainPage.registerErrorCheck()
})

When('заполняет поля регистрации', () => {
    mainPage.registerFieldFillWithoutUsername()
    mainPage.registerUsernameFieldFill()
})

When('пользователь заполняет поля авторизации верными данными', () => {
    mainPage.typeLoginUsername('Username4')
    mainPage.typeLoginPassword('Password')
})

Then('отображается страница overview', () => {
    mainPage.checkUrl('overview')
})

When('вводит в поле "Amount" значение "100"', () => {
    mainPage.amountFieldFill(100)
})

When('вводит в поле "Find by Amount" значение "100"', () => {
    mainPage.findByTransactionFieldFill()
})

When('нажимает на кнопку "Find transactions" поля "Amount"', () => {
    mainPage.findByTransactionButtonClick()
})

Then('в таблице отображаются записи', () => {
    mainPage.containsTableRows()
})

When('вводит в поле "Loan Amount" значение "100"', () => {
    mainPage.loanAmountFieldFill(100)
})

When('вводит в поле "Down Payment" значение "10"', () => {
    mainPage.downAmountFieldFill(10)
})

When('нажимает на ячейку в столбце "Account" таблицы пользователей', () => {
    mainPage.firstTableCellClick()
})

When('нажимает на ячейку в столбце "Transaction" таблицы транзакций', () => {
    mainPage.firstTableCellClick()
})

Then('отображаются поля авторизации', () => {
    mainPage.checkLogOut()
})
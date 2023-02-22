export class MainPage {

    login(){
        cy.visit('/index.htm')
        cy.get('input[name="username"]').type('Username4')
        cy.get('input[name="password"]').type('Password')
        cy.get('input[value="Log In"]').click()
    }

    sideMenuButtonClick(value){
        cy.get('li').contains(value).click()
    }

    firstNameFieldFill(value){
        cy.wait(500)
        cy.get('input[id="customer.firstName"]').clear().type(value)
    }

    buttonClick(value){
        cy.get("input[value=\""+value+"\"]").click()
    }

    inscriptionDisplayed(value){
        cy.contains(value)
    }
    
    visitMainPage(){
        cy.visit('/index.htm')
    }
    
    typeLoginUsername(value){
        cy.get('input[name="username"]').type(value)
    }
    
    typeLoginPassword(value){
        cy.get('input[name="password"]').type(value)
    }

    checkLoginError(){
        cy.get('.error').contains('The username and password could not be verified.')
    }

    visitAboutPage(){
        cy.visit('/about.htm')
    }

    mainPageIconClick(){
        cy.get('a').contains('home').click()
    }

    checkUrl(value){
        cy.url().should('contain',value)
    }

    contactIconClick(){
        cy.get('a').contains('contact').click()
    }

    contactFieldFill(){
        cy.get('#name').type('name')
        cy.get('#email').type('email')
        cy.get('#phone').type('phone')
        cy.get('#message').type('message')
    }

    registerButtonClick(){
        cy.get('a').contains('Register').click()
    }

    registerFieldFillWithoutUsername(){
        cy.get('input[id="customer.firstName"]').type('First Name')
        cy.get('input[id="customer.lastName"]').type('Last Name')
        cy.get('input[id="customer.address.street"]').type('Address')
        cy.get('input[id="customer.address.city"]').type('City')
        cy.get('input[id="customer.address.state"]').type('State')
        cy.get('input[id="customer.address.zipCode"]').type('Zip Code')
        cy.get('input[id="customer.phoneNumber"]').type('Phone')
        cy.get('input[id="customer.ssn"]').type('SNN')
        cy.get('input[id="customer.password"]').type('Password')
        cy.get('input[id="repeatedPassword"]').type('Password')
    }

    registerErrorCheck(){
        cy.get('span[id="customer.username.errors"]').contains('Username is required.')
    }

    registerUsernameFieldFill(){
        cy.get('input[id="customer.username"]').type('Username4')
    }

    amountFieldFill(value){
        cy.wait(1500)
        cy.get('#amount').type(value)
    }

    findByTransactionFieldFill(value){
        cy.get('input[id="criteria.transactionId"]').type('14476')
    }

    findByTransactionButtonClick(){
        cy.get('button[type="submit"]').eq(0).click()
    }

    containsTableRows(){
        cy.get('tr').contains('Funds Transfer Sent')
    }

    loanAmountFieldFill(value){
        cy.get('#amount').type(value)
    }

    downAmountFieldFill(value){
        cy.get('#downPayment').type(value)
    }

    firstTableCellClick(){
        cy.get('a[class="ng-binding"]').first().click()
    }

    checkLogOut(){
        cy.get('input[name="username"]').should('exist')
    }
}

export default new MainPage();
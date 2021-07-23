const { iteratee } = require("lodash");
const { hasUncaughtExceptionCaptureCallback, getMaxListeners } = require("process");

const usernameInput = () => cy.get('input[name="username"]')
const emailInput = () => cy.get('input[name="email"]')
const passwordInput = () => cy.get('input[name="password"]')
const termsOfServiceInput = () => cy.get('input[name="termsOfService"]')
const submitBtnInput = () => cy.get('button[name="submitBtn"]')

describe('Family App', () => {
    //tests in here
    beforeEach(() => {
        //code we want ran before our tests
        cy.visit('http://localhost:3000');
    });
    it('sanity test', () => {
        expect(1+2).to.equal(3)
        expect(2+2).not.to.equal(5)
    });
        it('The right elements are showing up', () => {
            usernameInput().should('exist')
            emailInput().should('exist')
            passwordInput().should('exist')
            termsOfServiceInput().should('exist')
            submitBtnInput().should('exist')
        })

        it('can text can be in the inputs', () => {
            usernameInput()
                .should('have.value', '')
                .type('HelloWorldMan')
                .should('have.value', "HelloWorldMan")
            
            emailInput()
                .should('have.value', '')
                .type('HelloWorld@gmail.com')
                .should('have.value', 'HelloWorld@gmail.com')

            passwordInput()
                .should('have.value', '')
                .type('password')
                .should('have.value', 'password')
            })

        it('submit button is disabled', () => {
            submitBtnInput().should('be.disabled')
        })

        it('can terms of service button be clicked', () => {
            termsOfServiceInput()
            .click()
            .should('have.value', 'true')
        })

        it('')

        
      
    })
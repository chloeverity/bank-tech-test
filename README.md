# Bank tech test

An app that simulates a bank account. Users can deposit, withdraw money to/from an account and print a bank statement.

### How to run
```
$ git clone git@github.com:chloeverity/bank_tech_test.git
$ cd bank_tech_test
$ open specrunner.html
```
select console in DeveloperTools

```
$ account = new Account()
$ account.deposit(10)
$ account.withdraw(5)
$ account // expect: Account {currentBalance: 5, transactions: Array(2)}, currentBalance: 5, transactions: (2) [Transaction, Transaction], __proto__: Object
$ statement = new Statement();
$ statement.print(account) // expect: 

date || credit || debit || balance
[today's date] || null || 5 || 5
[today's date] || 10 || null || 10
```

### How to test

```
$ npm test
```

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

### User Stories
```
As a user,
So that I can add money to my account,
I want to be able to deposit my money

As a user,
So that I can make purchases,
I want to be able to deposit money

As a user,
So that I don't spend money that I don't have,
I want to not be able to withdraw anything below 0

As a user,
So that I can see how much money I have,
I want to be able to check my balance

As a user,
So that I can detect fraud,
I want to see a date next to all of my bank activity

As a user,
So that I can track my finances,
I want to also be able to see a history or my recent bank activity

As a bank manager,
So that the bank isn't giving out free money,
I want all accounts to start with 0 currency
```





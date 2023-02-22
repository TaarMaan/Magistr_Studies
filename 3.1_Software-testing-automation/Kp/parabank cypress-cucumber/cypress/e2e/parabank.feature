Feature: parabank testing

Scenario: быстрый переход на главную страницу
Given открыта страница about
When пользователь нажимает на икноку дома в шапке страницы
Then отображается главная страница

Scenario: форма обратной связи
Given открыта главная страница
When пользователь нажимает на икноку письма в шапке страницы
When заполняет поля обратной связи
When нажимает на кнопку "Send to Customer Care"
Then отображается надпись "A Customer Care Representative will be contacting you."

Scenario: регистрация пользователя с ошибкой
Given открыта главная страница
When пользователь нажимает на кнопку "Register"
When заполняет все поля кроме "Username"
When нажимает на кнопку "Register"
Then отображается ошибка "Username is required"

Scenario: успешная регистрация пользователя
Given открыта главная страница
When пользователь нажимает на кнопку "Register"
When заполняет поля регистрации
When нажимает на кнопку "Register"
Then отображается надпись "Your account was created successfully. You are now logged in."

Scenario: успешная авторизация пользователя
Given открыта главная страница
When пользователь заполняет поля авторизации верными данными
When нажимает на кнопку "Log In"
Then отображается страница overview
Then отображается надпись "Accounts Overview"	

Scenario: обновление информации пользователя
Given пользователь залогинен
When пользователь нажимает на кнопку "Update Contact Info" в боковом меню
When вводит в поле "First Name" значение "usernamee"
When нажимает на кнопку "Update Profile"
Then отображается надпись "Profile Updated"

Scenario: перевод средств
Given пользователь залогинен
When пользователь нажимает на кнопку "Transfer Funds" в боковом меню
When вводит в поле "Amount" значение "100"
When нажимает на кнопку "Transfer"
Then отображается надпись "Transfer Complete!"

Scenario: поиск перевода
Given пользователь залогинен
When пользователь нажимает на кнопку "Find Transactions" в боковом меню
When вводит в поле "Find by Amount" значение "100"
When нажимает на кнопку "Find transactions" поля "Amount"
Then в таблице отображаются записи

Scenario: запрос кредита
Given пользователь залогинен
When пользователь нажимает на кнопку "Request Loan" в боковом меню
When вводит в поле "Loan Amount" значение "100"
When вводит в поле "Down Payment" значение "10"
When нажимает на кнопку "Apply Now"
Then отображается надпись "Loan Request Processed"

Scenario: открыть детальную информацию транзакции
Given пользователь залогинен
When пользователь нажимает на кнопку "Accounts Overview" в боковом меню
When нажимает на ячейку в столбце "Account" таблицы пользователей
When нажимает на ячейку в столбце "Transaction" таблицы транзакций
Then отображается надпись "Transaction Details"

Scenario: выход из системы
Given пользователь залогинен
When пользователь нажимает на кнопку "Log Out" в боковом меню
Then отображается главная страница
Then отображаются поля авторизации


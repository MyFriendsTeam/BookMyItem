# ChooseMyItem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## githib Pages

To upload angular app to git pages use `ng build --prod --base-href https://myfriendsteam.github.io/BookMyItem/`

## host your app

To host use command `sudo angular-cli-ghpages`


## Using angular snackbar


## Coding Standards

1. Should not use any strings in application. Every string should come from constants or helper classes
    a. All Routing urls should come from routingUrls class
    b. all validation related methods should be in utility class files
    c. every object should have a model defined in models folder
    d. All possible calculations should be in model object itself

2. Method should have documentation 
3. Methods should not exceed 10 lines of code
4. use ' instead of " through out application
5. All display names shold come from localization service
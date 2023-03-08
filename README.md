# PhoneInputField

A reusable custom react phone input component that renders the country flag, dial code and validates the number entered in the input field based on the country selected.

## Demo

[PhoneInputField](https://PhoneInputField.twikista.repl.co)

## Table of contents

- [Features](#implemented-features)
- [Tecnology and Libraries used](#technology-used)
- [Tools](#tools)
- [Setup](#setup)
- [Usage](#usage)

## Features

- updates country flag based selected country
- updates country dial code based selected country
- validates phone number based on country selected
- Responsive Web Design (RWD)

## Technology and Libraries Used

- React: To create reusable components
- Styled Components: To create re-usable styled elements & prevent name-space conflict
- React-phone-number-input: To create the country select and phone input elements. Also provides validation for the entered phone number
- Country-flag-emoji: To render the flags for the options in the options select drop down
- React-country-flag: To render the flag of the selected country

## Tools

- vite
- git & github

## Setup

To run this application locally:

1. Clone this repo

```bash
$ git clone https://github.com/twikista/PhoneInputField
```

2. Go the root of the cloned repo and install dependencies

```bash
$ cd PhoneInputField && npm install
```

## Usage

To start the application, run ` npm run dev` to start the development server at http://localhost:5173/

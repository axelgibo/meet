# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Meet App

## Project Overview

The Meet App is a progressive web application (PWA) built with React that utilizes the Google Calendar API to fetch and display upcoming events. It follows a Test-Driven Development (TDD) approach to ensure high-quality code. The app aims to provide users with a convenient way to view events, filter them by city, specify the number of events, access information offline, add a home screen shortcut, and see visualizations of event data.

## Key Features

- Filter Events by City
- Show/Hide Event Details
- Specify Number of Events
- Use the App When Offline
- Add an App Shortcut to the Home Screen
- Display Charts Visualizing Event Details

## User Stories

As a user, I want to be able to filter upcoming events by city so that I can see events happening in my preferred location.

As a user, I want to be able to show or hide the details of an event so that I can get more information when needed and keep the event list concise when browsing.

As a user, I want to be able to specify the number of upcoming events displayed so that I can control the amount of information I see at once.

As a user, I want to be able to use the app and see previously loaded events even when I am offline or have a poor internet connection so that I can stay informed.

As a user, I want to be able to add a shortcut to the Meet App on my home screen so that I can easily access it like a native app.

As a user, I want to see charts visualizing the number of events in different locations and the popularity of different event genres so that I can quickly understand event trends.

## Scenarios

### Feature 1: Filter Events By City

```gherkin
Scenario: When user hasn’t searched for a city, show upcoming events from all cities.
  Given user hasn’t searched for any city
  When the user opens the app
  Then the user should see a list of upcoming events

Scenario: User should see a list of suggestions when they search for a city.
  Given the main page is open
  When user starts typing in the city textbox
  Then the user should receive a list of cities (suggestions) that match what they’ve typed

Scenario: User can select a city from the suggested list.
  Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing
  When the user selects a city (e.g., “Berlin, Germany”) from the list
  Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city

Feature 2: Show/Hide Event Details

  Scenario: An event element is collapsed by default.
  Given the list of events has been loaded
  When the user views an event in the list
  Then the detailed information of that event should be hidden

Scenario: User can expand an event to see details.
  Given an event in the list has its details hidden
  When the user clicks on the event element
  Then the event details should be displayed

Scenario: User can collapse an event to hide details.
  Given an event in the list has its details displayed
  When the user clicks on the event element again (or a specific collapse button)
  Then the event details should be hidden

  Feature 3: Specify Number of Events

Scenario: When user hasn’t specified a number, 32 events are shown by default.
  Given the user opens the app
  Then the app should display 32 upcoming events

Scenario: User can change the number of events displayed.
  Given the user is viewing the list of events
  When the user enters a number (e.g., "10") in the "Number of events" input
  And the user submits the change
  Then the app should display 10 upcoming events

Feature 4: Use the App When Offline

  Scenario: Show cached data when there’s no internet connection.
  Given the user has previously loaded event data while online
  When the user opens the app with no internet connection
  Then the app should display the previously cached list of events

Scenario: Show error when user changes search settings (city, number of events).
  Given the user is offline
  When the user attempts to change the city or the number of events
  Then the app should display an error message indicating that changes cannot be made offline
```
Feature 5: Add an App Shortcut to the Home Screen

Scenario: User can install the meet app as a shortcut on their device home screen.
  Given the user is viewing the Meet App in a browser
  When the user uses the browser's "Add to Home Screen" functionality
  Then a shortcut to the Meet App should be added to the device's home screen

  Feature 6: Display Charts Visualizing Event Details

  Scenario: Show a chart with the number of upcoming events in each city.
  Given event data has been loaded
  When the user navigates to the "Analytics" or "Charts" view
  Then a chart should be displayed showing the count of upcoming events for each city
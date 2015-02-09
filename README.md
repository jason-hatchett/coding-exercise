# Coding Exercise for Front-End Developer candidates

## Introduction

This exercise will help the hiring team at Spredfast gauge your level of front-end coding experience (HTML, CSS & JavaScript).

Please budget about an hour of actual coding time to complete the project. We realize that's a tight constraint, but we'd like to be respectful of your time while still allowing you to produce enough code for us to make a fair assessment of your skills. Try to ensure that the finished product represents your coding abilities. You are not necessarily expected to fully finish within the hour. We'd much rather review high-quality, incomplete work than rushed, completed work.

We've created a few starter files that you should flesh out:

* [index.html](index.html)
* [style.css](css/style.css)
* [script.js](js/script.js)

and a [PSD](Leaderboard.psd) to use as a mockup.

## Requirements

You will build a "Hardcore Veggies" leaderboard, which is a list of the top five hardcore vegetable names paired with the number of times that those vegetables have been mentioned on Twitter or Facebook.

For simplicity's sake, we've stubbed out an API interface and polling functionality within a library (see [lib.js](js/lib.js)). The library provides a `Poller()` class that allows you to create a poller, set some options and provide a callback function that will be called when the poller returns data. It also has a `.start()` method that will start the poller.

Upon each poll, the API will send an array of objects to your callback function. Each object will contain a vegetable name and its associated count, sorted descending by count.

The leaderboard that you build should satisfy these basic requirements:

* Visually adhere to the provided [PSD](Leaderboard.psd).
* Every 15 seconds, update the leaderboard to show the latest vegetable names and counts, sorted descending by count.
* **Bonus:** Animate the leaderboard update in some way (fade/dissolve, sliding, etc.).

When you're finished, please send your work your Spredfast dev contact as a .zip file or (preferably) a link to a public repo on GitHub.

## Questions?

Please use your best judgment to interpret the requirements above. However, if you're stuck with a question(s), feel free to email your Spredfast dev contact. There are no bad questions (other than, "What does JavaScript mean?").

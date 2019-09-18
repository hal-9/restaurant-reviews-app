# Restaurant Reviews App (Stage 1)
**restaurant reviews app for the front-end web developer nanodegree at udacity**

## Instructions

* You can either visit the page here https://hal-9.github.io/restaurant-reviews-app or clone/download a local version to your computer.
* In the root folder of the project, start a simple HTTP server to run the page on your local computer. There are various ways to do this, an easy way however would be to use python. 
* You can check whether you have installed python and which version you might have already installed by typing in ```python -V```. (In case you dont have python installed yet, check out the following page to install it: [python website](https://www.python.org).)
* If you have python 2.x use the command ```python -m SimpleHTTPServer 8000``` (or some other port, if that port is already in use). In case you have python 3.x installed, use the command ```python3 -m http.server 8000```.
* when the server is runninng, just visit: http://localhost:8000 in your browser.

## Code

* the provided coded for a restaurant review app lacked accessibility features, was not at all responsive and had no offline features. 
* utilizing css rules and media queries I have made the page responsive for different viewports using flexbox among other things. the page runs optimized on mobile first, then tablets and laptop screen sizes.
* using a service worker to cache a static version of the page, I have made it possible that users can access the page while there is no connectivity to the internet, after the page was loaded once.

## License

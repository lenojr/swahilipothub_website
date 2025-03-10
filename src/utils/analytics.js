// analytics.js

// Load the Google Analytics library
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

// Initialize Google Analytics
ga('create', 'YOUR_TRACKING_ID', 'auto');

// Example function to track a page view
function trackPageView(page) {
    ga('set', 'page', page);
    ga('send', 'pageview');
}

// Example function to track an event
function trackEvent(category, action, label) {
    ga('send', 'event', category, action, label);
}

export { trackPageView, trackEvent };
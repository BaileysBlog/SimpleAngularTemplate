# Simple Angular Templates
A really basic Angular template using Angular 5, Material 5, Bootstrap 4.

# Features / Technology
- Angular 5
    - Angular Material 5
    - Ng-Bootstrap
- Bootstrap 4
- Service Workers
    - Notify when updates are available for installation

## How to test out the service worker
1) npm install
2) npm run production
3) Navigate to http://localhost:8080 (Keep tab open the whole time)
4) ctr+c the http-server
5) Make change to home.component.html
6) npm run production
7) Return to tab and see an update notification

*Note that service workers will only function in some browsers and require ssl connection for usage in production environments.

## Without main content in side-nav
This template follows the main structure however, the router-outlet is not inside the side-nav content. This allows for screens that cannot display the side-nav at all. This template can be used for applications that don't want to have the side-nav available on all pages.

## With main content in side-nav
This template follows the main structure as well the router-outlet is rendered inside the side-nav content area. This allows the side-nav to be displayed on all pages. Routes have the ability to display the side-nav but still the side-nav is present on all pages. This template is a general starting point and offers a good template for a wide variety of websites. 
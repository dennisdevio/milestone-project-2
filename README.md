# Helios Weather Forecast
This website called Helios is a real time weather forecast service that provides weather forecasts world-wide through an interactive map. The name Helios was the name of the sun god in ancient greek mythology. I chose the name Helios because it seemed quite fitting.
The purpose of this website is to provide easily accessible real-time weather information in an appealing and interactive way across all devices and screen sizes.

## Showcase
Click [here](https://dennisdevio.github.io/milestone-project-2/) to view the website and see the weather forecast in real-time.
![showcase_helios_weather_forecast](https://github.com/tetrapak-dev/milestone-project-2/blob/master/assets/images/showcase_helios_weather_forecast.png)

I additionally made a favicon icon for mobile devices

![favicon_icon_showcase](https://github.com/tetrapak-dev/milestone-project-2/blob/master/assets/images/favicon_icon_showcase.png)

## UX

### User Stories
My goal was to create an appealing and easily comprehensible website design that presents the latest weather forecast information no matter where you are, that is easy to use and works smoothly on all devices. As the data presented can be percieved as somewhat complex I felt it was important to present it in such a way that it is clear and easy to understand no matter who you are and what device you are using.

#### First Time User Goals
- As a first time user I want to be able to easily get the latest real-time weather info about my location wherever I am.
- As a first time user I want to be able to easily get the latest real-time weather info about other locations for my travel needs.
- As a first time user I want to be albe to find all the weather information you provide especially on mobile since my choices for the day or week may be affected depending on the weather.

#### Returning User Goals
- As a returning user I want to know your website is reliable on all devices I might use.
- As a returning user I want the information you provide to be presented in a clear way on all devices I might use.
- As a returning user I want to know the information you provide is reliable and accurate in any given situation.

### Wireframes
I decided to go with three wireframes, for large screens, medium size screens and small screens. Each wireframe contains two main sections, one with an interactive map and the other with weather forecast information such as sunny, cloudy or rainy weather, expected temperatures and so on.

The wireframes were created using - [InVision](https://www.invisionapp.com/). 

The wireframes for this website can be found [here](https://dennischmielewski323696.invisionapp.com/freehand/Helios-Weather-Forecast-bgy1wmerW)

### Structure
The structure of the website is laid out in such a way that the interactive map is the main feature of the website. The map itself provides information on the name and address as well as weather information of the place the user clicks on. The map data is presented in a about section. Additionally, weather information is presented underneath the map in a table. The data presented outside the map is highlighted in a yellow card to draw attention.
### Design
To create a pleasant "light and airy" feel of the website the color theme is white and blue and the font color is a type of gray. The headings font style is set to 'Noto Sans KR' and the paragraph text font style is set to 'Open Sans' which both contribute to that light and airy feel I was after.

To get the blue color blue background I wanted and the right font color in the navbar I had to overide the Bootstrap 5 default style with my own style rules by changing their default priorities.

Furthermore the logo is an animated sun which I think adds to that light and happy feeling and the name of the website comes from the sun god in ancient greek mythology which I found quite fitting to go with the theme.

To make the website responsive I initially set out to use CSS Grid but after running into problems with it and not fully understanding it yet, I decided to go with Bootstrap instead since I have prior experiece with it.

I added smooth scrolling behavior to the website to make the user experience more pleasant and seamless.

Due to time constraints I had left features unimplemented due to a too large scope.

## Features
- Responsive Design across all device sizes, including a hamburger menu button on smaller screens.
- A map that shows local weather information for the locaction you click on.
- Additional weather data that is presented below the map when clicked.
- A favicon that can be used as an app icon on mobile devices for convenience and a more professional impression.

To add the favicon to the mobile device I converted my logo image to a .ico file, then opened the website in my Firefox mobile browser and from the menu clicked the "Add to Home screen" option.

#### Features Left to Implement
I set out to implement a lot of features from the beginning. The two features I started to work on that I later on along the way discovered I had to discard for this release were a JavaScript modal instead of the existing about section and a searchbox where I wanted cities and countries to be searchable. The other features never made it past the idea stage. Due to time constraints I was not able to implement all the features I ideally wanted to implement.

The following is a full list of features that will be implemented on a future release:

- A JavaScript modal window that pops up with the 'about' info instead of the about section.
- A searchbox where the user can input their location of choice, either a country or a city, to get the weather information that way in addition to clicking the map.
- A contact form with the option to send an e-mail to the weather service.
- A dark mode button or slide to provide the option change the white background to a softer color.

## Technologies
The technologies used to build this website are the following

#### Development
- [Gitpod Online IDE](https://www.gitpod.io/) for all code editing.
- [Firefox Devtools](https://developer.mozilla.org/en-US/docs/Tools) for all functional testing throughout the development process.

#### Testing
- [Lighthouse](https://developers.google.com/web/tools/lighthouse/) for performance testing of the website.
- [The W3C Markup Validator](https://validator.w3.org/) for testing of all HTML code.
- [The W3C CSS Validator](https://jigsaw.w3.org/css-validator/) for testing of all CSS code.
- [JSHint](https://jshint.com/) for testing of all JavaScript code.

#### Images
- [Pixabay](https://pixabay.com/) for the image used in the Favicons. 
- [TinyPNG](https://tinypng.com/) for compressing the image downloaded from Pixabay to decrease load times of the website.

#### Fonts & Icons
- [favicon.io](https://favicon.io/) for converting the image compressed with TinyPNG, to '.ico' format to be used as the Favicon. 
- [Google Fonts](https://fonts.google.com/share?selection.family=Noto%20Sans%20KR%7COpen%20Sans) for the fonstyles 'Noto Sans KR' and 'Open Sans' used on the website. 
- [Font Awesome](https://fontawesome.com/start) for all website icons.

#### API's
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/examples/event-click-latlng) for getting the latitude and longitude coordinates on the map when clicked.
- [OpenWeather API](https://openweathermap.org/api) for getting the current weather data for the given position.

### Languages 
- [HTML5](https://en.wikipedia.org/wiki/HTML5) was utilized for laying the foundation and structuring the basis of the website content. 
- [CSS3](https://en.wikipedia.org/wiki/CSS#CSS_3) was utilized for the placement and styling of all HTML5 content on the website. 
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) was utilized for creating animations on the website as well as creating interactivity with, and generating real-time information for the user.

### Frameworks
- [Bootstrap v5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/) Bootstrap 5 was used to implement a responsive mobile-first design on the website.

## Testing
Due to time constraints and several difficulties along the way I had to minimize the scope several times. I would ideally have implemented more weather information such as humidity, cloudiness and wind. 
Ultimately the website achieved its purpose when tested for all user stories, it is live and working so I am pleased with the result.

Testing was done for all user stories on the following devices and operating systems:

- Manually tested on Android on a Fairphone 3,  
- Manually tested on Linux Mint on an Acer Swift 3 Laptop.
- Manually tested on Windows 10 on an Asus Desktop.

- Tested on Iphone 5, 6 and 'X' using Firefox Devtools.

- Test on an Ipad and Nexus Tablet using Firefox Devtools.


Results from Lighthouse performance test
![results_2021_06_08_lighthouse_report_viewer](https://github.com/tetrapak-dev/milestone-project-2/blob/master/assets/images/results_2021_06_08_lighthouse_report_viewer.png)

After doing the Lighthouse test the first time I got a score of 93% for best practices, which whas the lowest scored category. The report suggested that should implement a color theme meta tag which I did but it did not improve my score. I consequently removed it since I think it looks better without a color theme.
Furthermore I tried to improve the score of 93% by troubleshooting console.log errors that came up but those errors turned out to be due to the external style sheet for the Google Map on the site. I left it like it is in the end since I did not manage to fix that issue.
Overall the score I good so am okay with the result. 


Results from W3C Markup Validator test
![results_w3c_markup_validator](https://github.com/tetrapak-dev/milestone-project-2/blob/master/assets/images/results_w3c_markup_validator.png)

After doing the html validator test the first time the only issue was one stray </i> tag which I removed and then the test came back clear.

Results from W3C CSS Validator test
![results_w3c_css_validator](https://github.com/tetrapak-dev/milestone-project-2/blob/master/assets/images/results_w3c_css_validator.png)

The CSS validator test result came back clear with no issues at all.

Results from JSHint Validator test
![results_jshint_ javascript_validator.png](https://github.com/tetrapak-dev/milestone-project-2/blob/master/assets/images/results_jshint_%20javascript_validator.png)

The JavaScript validator test came back with one error at first, I had missed a semicolon at the end of a statement which I fixed. Several warnings came up about the new ES6 syntax but no major issues were present in the code.

#### Bugs Fixed
- The Font Awesome icons wouldn't work at first. I discovered that Font Awesome had changed their procedure so after insert a script to the HTML document it worked as expected.
- The hamburger menu button wouldn't work at first, it turned out to be missing script which I later implemented. In the newest Bootstrap 5 version there are scripts required that weren't needed in Bootstrap 4.

#### Bugs Left
- console log error that came from the google map external style sheet, as I did not knwo how to fix it.

## Deployment
The deployment of this project was accomplished using Gitpod and Git for version control. 
I used Gitpod to write all code and push all changes made to my Github Repository using Git from the Gitpod terminal.

### Repository
If you want to view this website locally on your computer:
- Click on your preferred clone method in the upper right-hand side corner of this repository.
- Open your cloned repository in your IDE of choice.
- Run the website on a local server from there.

This project reposity is hosted on  
- [GitHub](https://github.com/) - you can find it at [this link](https://github.com/dennisdevio/milestone-project-2)

### Hosting Platform
This website is hosted using [GitHub Pages](https://pages.github.com/) and is deployed directly from the 'master' branch. The deployed website will update automatically when new changes are committed to the master branch. 

To host this website:
- I clicked on this repository.
- Went into 'settings' at the top-right corner.
- Then I chose the 'Pages' tab on the left-hand side menu. 
- From there I chose the 'master' branch and the 'root' folder and clicked save. 
- After about 30 minutes or so, the site was live at Github Pages.

The website can be viewed [here](https://dennisdevio.github.io/milestone-project-2/)

## Credits
- [Font Awesome documentaion](https://fontawesome.com/start) on how to use kits on the new version, since the procedure had changed from the previous version
- [Bootstrap v5.0 documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/) especially on how to implement hamburger button using scripts and right aligning menu links using flex utilities, as the procedures had changed a bit since Bootstrap4 which I had experience with prior to this project.
- [Google Maps JavaScript API documentation](https://developers.google.com/maps/documentation/javascript/examples/event-click-latlng) on how to get latitude & longitude displayed on the map.
- [OpenWeather API documentation](https://openweathermap.org/appid) on how to get the current weather data for a given position.



### Acknowledgements
- My mentor [Akshat Garg](https://github.com/akshatnitd) for his very much appreciated and needed advice and support.
- [Code Institute](https://codeinstitute.net/)'s Student Care and Slack community.

#### This project was made as part of Code Institute's Full Stack Software Development Programme. 
#### This is for educational purposes only.
#### Created by Dennis Chmielewski.


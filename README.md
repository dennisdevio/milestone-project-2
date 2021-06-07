# Helios Weather Forecast
This website called Helios is a real time weather forecast service that provides weather forecasts world-wide through an interactive map. The name Helios was the name of the sun god in ancient greek mythology. I chose the name Helios because it seemed quite fitting.
The purpose of this website is to provide easily accessible real-time weather information in an appealing and interactive way across all devices and screen sizes.

## Showcase
Click [here](https://tetrapak-dev.github.io/milestone-project-2/) to view the website and see the weather forecast in real-time.

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
- As a returning user I want to know the information you provide is relaible and accurate in any given situation.

### Wireframes
I decided to go with three wireframes, for large screens, medium size screens and small screens. Each wireframe contains two main sections, one with an interactive map and the other with weather forecast information such as sunny, cloudy or rainy weather, expected temperatures and so on.

The wireframes were created using - [InVision](https://www.invisionapp.com/). 

The wireframes for this website can be found [here](https://dennischmielewski323696.invisionapp.com/freehand/Helios-Weather-Forecast-bgy1wmerW)

### Structure
The structure of the website is laid out in such a way that the interactive map is the main feature of the website. The map itself provides information on the name and address as well as weather information of the place the user clicks on. The map data is presented in a modal that pops up when clicked. Additionally, on larger and medium sized screens the current and coming weather information is presented next to the map in two tables. On smaller mobile devices all weather information is presented in tables underneath the map instead. The data presented outside the map is more extensive and is presented in a way where the current weather information is highlighted in a larger size and the coming weather forecast is presented below that in a smaller size.

### Design
To create a pleasant "light and airy" feel of the website the color theme is white and blue and the font color is a type of gray. The headings font style is set to 'Noto Sans KR' and the paragraph text font style is set to 'Open Sans' which both contribute to that light and airy feel I was after.

To get the blue color blue background I wanted and the right font color in the navbar I had to overide the Bootstrap 5 default style with my own style rules by changing their default priorities.

Furthermore the logo is an animated sun which I think adds to that light and happy feeling and the name of the website comes from the sun god in ancient greek mythology which I found quite fitting to go with the theme.

To make the website responsive I initially set out to use CSS Grid but after running into problems with it and not fully understanding it yet, I decided to go with Bootstrap instead since I have prior experiece with it.

I added smooth scrolling behavior to the website to make the user experience more pleasant and seamless.

## Features
- Responsive Design across all device sizes, including a hamburger menu button on smaller screens.
- A map that shows local weather information for the locaction you click on.
- Additional weather data that is presented below the map when clicked.
- A favicon that can be used as an app icon on mobile devices for convenience and a more professional impression.

To add the favicon to the mobile device I converted my logo image to a .ico file, then opened the website in my Firefox mobile browser and from the menu clicked the "Add to Home screen" option.

#### Features Left to Implement
Due to time constrains I was not able to implement all the features I ideally wanted to implement.
The following features will therefore be implemented on a future release:

- A searchbox where the user can input their location of choice, either a country or a city, to get the weather information that way in addition to clicking the map.
- A contact form with the option to send an e-mail to the weather service.
- A dark mode button or slide to provide the option change the white background to a softer color.

## Technologies
The technologies used to build this website are the following

- [Gitpod](https://www.gitpod.io/) IDE for all code editing.
- [Firefox Devtools](https://developer.mozilla.org/en-US/docs/Tools) for all testing throughout the development process.
- [Pixabay](https://pixabay.com/) for the image used in the Favicons. 
- [TinyPNG](https://tinypng.com/) for compressing the image downloaded from Pixabay to decrease load times of the website.
- [favicon.io](https://favicon.io/) for converting the image compressed with TinyPNG, to '.ico' format to be used as the Favicon. 
- [Google Fonts](https://fonts.google.com/share?selection.family=Noto%20Sans%20KR%7COpen%20Sans) for the fonstyles 'Noto Sans KR' and 'Open Sans' used on the website. 
- [Font Awesome](https://fontawesome.com/start) for all website icons.
- [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview) for getting the latitude and longitude coordinates on the map.
- [OpenWeather API](https://openweathermap.org/api) for getting the current weather data for a given position.

### Languages 
- [HTML5](https://en.wikipedia.org/wiki/HTML5) HTML5 was utilized for laying the foundation and structuring the basis of the website content. 
- [CSS3](https://en.wikipedia.org/wiki/CSS#CSS_3) CSS3 was utilized for the placement and styling of all HTML5 content on the website. 
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) was utilized for creating animations on the website as well as creating interactivity with, and generating real-time information for the user.



### Frameworks
- [Bootstrap v5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/) Bootstrap 5 was used to implement a responsive mobile-first design on the website.

### Libraries 


## Testing































#### Bugs Fixed
- The Font Awesome icons wouldn't work at first. I discovered that Font Awesome had changed their procedure so after insert a script to the HTML document it worked as expected.




#### Bugs Left






## Deployment
The deployment of this project was accomplished using Gitpod and Git. 
I used Gitpod to write all code and push all changes made to my Github Repository using Git from the Gitpod terminal.

If you want to view this website locally on your computer click on your preferred clone method in the upper right-hand side corner of this repository, open your cloned repository in your IDE of choice and run the website on a local server from there.

### Repository
This project reposity is hosted on  
- [GitHub](https://github.com/) - you can find it at [this link](https://tetrapak-dev.github.io/milestone-project-2/)

### Hosting Platform
This website is hosted using [GitHub Pages](https://pages.github.com/) and is deployed directly from the 'master' branch. The deployed website will update automatically when new changes are committed to the master branch. 

To host it I clicked on this repository, then went into setting at the top write corner and from there chose the 'Pages' tab on the left-hand side menu. From there I chose the 'master' branch and the 'root' folder and clicked save. After about 30 minutes or so, the site was live at Github Pages.

The website can be viewed [here](https://tetrapak-dev.github.io/milestone-project-2/)




## Credits



### Acknowledgements
- My mentor [Akshat Garg](https://github.com/akshatnitd) for his advice and support.
- [Code Institute](https://codeinstitute.net/)'s Slack community and Tutor Support.



#### This project was made as part of Code Institute's Full Stack Software Development Programme. 
#### This is for educational purposes only.
#### Created by Dennis Chmielewski.


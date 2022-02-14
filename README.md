# The Riddler's Riddles

The Riddler's Riddles is a Batman themed quiz to challange the user with some classic riddles.  

![Responsice Mockup](assets/images/media/responsive-mock-up.png)

## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to easily understand the main purpose of the site. 
        2. As a First Time Visitor, I want to be able to easily navigate throughout the site. 
        3. As a First Time Visitor, I want to be able to navigate through the quiz easily. 

-   ### Design
    -   #### Colour Scheme
        -   The three main colors used are green, black and pink for a easy to read contrast. 
    -   #### Typography
        -   Rock 3D and Barrio and the main fonts used in attempt to give the site a chaotic, comic book villian feel. 

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [Javascript](https://en.wikipedia.org/wiki/JavaScript) 

## **Features**

- **Front Page** 
  - The first thing that the user sees is a Riddler themed background with a welcome message/
  challenge, along with a let's play button to start the quiz. 

  ![Front Page](assets/images/media/front-page.png)

  - **Quiz Page**
  - The quiz has eight questions with four multiple choice answers to chose from. 
![Quiz Page](assets/images/media/quiz-page.png)

  - A correct answer displays a green background and message.
![Correct Answer](assets/images/media/correct.png)

  - An incorrect answer displays a red background and the correct answer.
![Incorrect Answer](assets/images/media/wrong.png)

- **Navigation**
  - For navigation the header will take the user back to the front page.

  - The "Next Riddle" button will take the user to the next riddle but only after they have selected an answer. An alert will be displayed if they try to move on without doing so. 

  - The button named 'Restart' will allow the user to start again.

  ![Alert](assets/images/media/media-display.png)

  ### Validator Testing
- HTML
    - No errors were found when passing through the official. Though a [warning](assets/images/media/warning.png) was. After some resarch on [stackoverflow](https://stackoverflow.com/questions/24155024/w3c-html-validation-error-section-lacks-heading-consider-using-h2-h6-elements)I have decided to ignore it 
    [W3C Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Famj-web.github.io%2FRiddlers-Riddles%2Friddles.html)

- CSS 

- No errors were found when passing through the official [CSS](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Famj-web.github.io%2FRiddlers-Riddles%2Friddles.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)


    - JavaScript
    - No errors were found when passing through the [JSHint Validator](https://jshint.com/) 
    - There are thirteen [warnings](assets/images/media/wa4rningjs.png) I have researched this an decided to ignore them also [stackoverflow] (https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const)

  
  ### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptops and Smart Devices.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.  
  
  ### Unfixed Bugs
No unfixed bugs

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:
    - In the GitHub repository, navigate to the Settings tab
    - From the source section drop-down menu, select the Master Branch
    - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here: [The Riddler's Riddles](https://amj-web.github.io/Riddlers-Riddles/)

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Content
- The code for the buttons was taken from [Brain Design](https://www.youtube.com/watch?v=f4fB9Xg2JEY)

- The code for the question array was taken from [SitePoint](https://www.sitepoint.com/simple-javascript-quiz/)

- The code for the function to reveal the correct answer was modified from Code Institute's "JavaScript Essentials" course.

### Media
- The background image was taken from [Deviant Art](https://www.deviantart.com/nazsha/art/Batman-Riddler-Wallpaper-199978287)  

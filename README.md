# Welcome to NC NEWS!

This repository is to walk you through the front-end app for the corresponding, NC NEWS API, which can be found linked below.

For an already hosted version of this app, head to
`https://nervous-pare-3099f1.netlify.app/`

and find the back-end api hosted at
`https://news-server-project.herokuapp.com/`

or the github repo at
`https://github.com/emilyb93/Backend-Project-Hosting`

# Installation on a local machine

You will first need to use the Command Line Interface to navigate to the directory you wish to install the app. Use either;
Github HTTPS

    git clone https://github.com/emilyb93/Front-end-project-hosting.git

Github SSH

    git clone git@github.com:emilyb93/Front-end-project-hosting.git

or if you have the Github CLI

    gh repo clone emilyb93/Front-end-project-hosting

After the files have been completely downloaded, navigate inside the folder `Front-end-project-hosting`
Once this is your working directory, run either the command`npm install` or `npm i`,
to install all the dependencies and packages needed to run this app. This may take a few minutes.

Once this is completed you can now run the app on a localhost:3000 using the command `npm start`.

`npm start` may take a minute to compile the app but once complete this will automatically open a functioning copy of the app on your default browser.

# Navigating the app

Upon opening the app, you will be greeted with a page with several elements that you can use to navigate the app.

## Header bar

In the header you will find the NC NEWS text which is also a link to the homepage that you can access at any point within the app. Along with this there is a profile avatar, at first it will appear as a common basic profile avatar, however when signed in, this will change to whatever the user has set their avatar to be. Next to this you will find a button with a triple bar **≡**, clicking this will open a dropdown menu which will be helpful to navigate to other parts of the app.

## Nav Menu

In this nav menu you will find 3 links;
Home - This will take you to the homepage.
Articles - This will take you to a page where you can view the rest of the articles and sort them with various queries.
Account - This will take you to the account details page where you can either log-in, or view your current details and log-out.

## Articles

On the articles page you will be greeted with a list of cards of all the articles currently in the API. You can sort these articles using the 2 dropdown selection boxes.
The first selection will be to choose what topic you wish to see articles from; the API creates this list and so will update if new topics are added into the database.
The second is a "sort-by" query. You can either sort these articles by the date they were created (the default) or by how many votes each article has. These sort by queries will work with whatever topic you have chosen.

From here if you wish to view one of these articles, you can click on the article card that interests you, this will take you to a single page view of that article.

## Single Page View

Here you will be greeted by the title of the article and a corresponding image for the article's topic, followed by the body of the article.

There is a voting system for each article in the form of an up-vote and down-vote button, on either side of a number which represents the current score for the article. The buttons to vote on articles and comments are disabled if you are not logged in to the app.

Under this you will see a form to post a comment. The button to post the comment is disabled if you are not logged in. Upon posting a comment, it will immediately be added to the current comments for the article as the latest comment.

## Account

The account page functions as both a log in page and a page to view the details of a logged in user.
You can navigate to this page by either clicking the avatar image next to the menu button, or selecting the "Account" link in the nav bar.
On this page, if not logged in, you will be prompted to log in. This will only accept users in the database. As there is no sign up functionality and no list of available usernames, you can log in as one of the following by typing it into the text input and submitting the form;

- weegembump
- jessjelly
- cooljmessy
- grumpy19
- tickle122
- happyamy2016

Once logged in, the page will re-render to show an avatar of the logged in user, the username, and the real name of the account holder.
As well as this, you are also presented with a log out button. This will log you out from all aspects of the site and any functionality that is disabled users not logged in.

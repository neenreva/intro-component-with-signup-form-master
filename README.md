# Frontend Mentor - Intro component with sign up form

![Design preview for the Intro component with sign up form coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge. I found the JS a bit tricky. I saw that the examples most likely used block elements/event listeners to toggle classes like 'hiddden'. At that time I thought it would be a better solution to inject some elements and position absolute them. I've seen it used in a tutorial in the past and it seemed like an easy way to add an element to be used for something like an error message. I should also mentioned that this tutorial briefly went over securtiy risks with it. So when I ran into a bit of difficulty wanting to remove the injected HTML I went down a rabbit hole of ways to safely inject HTML. Turns out it's just a really not good idea and should be avioded altogether if possible. So I went back to original thought and this is the solution I developed. 

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a basic understanding of HTML, CSS and JavaScript.**

## The challenge

Your challenge is to build out this introductory component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.

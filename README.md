# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./screenshot.jpg)

-- desktop view
![Alt text](images/desktop%20screenshot.png)

![Alt text](images/destop%20weekly%20preview.png)

![Alt text](images/desktop%20monthly%20preview.png)
-- mobile view

![Alt text](images/moblie%20screenshot.png)


### Links

- Solution URL: [Github repo](https://github.com/Abderaouf16/Frentend_mentor_challenge_9__Time-tracking-dashboard)
- Live Site URL: [Live website](https://abderaouf16.github.io/Frentend_mentor_challenge_9__Time-tracking-dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

1-Doing this challenge I learned abou The Document method querySelectorAll() which returns a node list of element, for exemple in this challenge to modify the textContent of that node list we need to loop over the node elements 'I used the forEach method'

2- The other thing that I learn is how to taget a label of a checked input, so when the user clicks on that label it color will change
    


```css
input[type="radio"]:checked + label {
  color: white;
}
```
```js
 previousTitleElments.forEach((previousTitle)=>{
                previousTitle.textContent = 'Yesterday - '
         })
```


## Author

- Github - [Abderaouf16](https://github.com/Abderaouf16)
- LinkdeDIN - [KHAMOUM Abderaouf](https://www.linkedin.com/in/abderaouf-khamoum-657527260/)
- Frontend Mentor - [@Abderaouf16](https://www.frontendmentor.io/profile/Abderaouf16)'
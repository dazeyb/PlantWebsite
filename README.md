# Project 1 // Leafly 

User Flow:


* Index Page/Searching

User starts at the home/index page.
They will see all the plants displayed on the right hand side, and a search filter dropdown menu with options on the left hand side.
If they change the filters, they will have to submit the changes via a button, and the page will refresh with the filtered results.
If they select a plant by clicking on it, it will take them to a new page with all the information about the plant.
Alternatively you can type a plant name into the search bar and it will take you directly to that page.


* Plant page/Commenting

From the plants page, you can view and create comments at the bottom of the page by clicking add comment/review.
This will bring up a modal that will ask for you to review the plant, and write a comment/review.
You will submit by pressing the submit.
You will then be able to delete said comment by clicking a "x" in the corner of the comment, which will bring up a confirmation window asking if you want to delete the comment or not.

========================================================================================================================================

# Stubbing it Up

* Index Page/Searching
    User starts at the home/index page.
HTML Page in EJS, with CSS styling
For every page we'll have a nav bar with "Find your plant" button that links you to index(home), 






and a search bar that takes them to the index with the given string filtering the results. 

The top will have a banner with a photo.



    They will see all the plants displayed on the right hand side, and a search filter dropdown menu with options on the left hand side.
CSS Grid or Flexbox to position elements into groups.
For the box, it will open a dropdown menu when clicked, showing:
* Temperature
    Number ranges

* Light
    Lightbulb options 1 - 5 

* H20 
    Water droplets 1 - 5

* Avg. Review 
    Stars 1 - 5

* Price Rating
    Dollar Signs 1 - 5

Check boxes on right hand side designating choices.
Can fill in multiple fields

Icons from fontawesome
Put font awesome link in in all views files

Dropdown menu moving up and down will be from the CSS lesson learning in class (hiding/unhiding)
(+) for dropdown, (-) for hiding

Query URL will include variables being passed in, it will look through DB to see what matches, and display those.
    Don't need a NEW route for this (I don't think)



     If they change the filters, they will have to submit the changes via a button, and the page will refresh with the filtered results.
Submit button, on click listener, refresh page with queried url

    If they select a plant by clicking on it, it will take them to a new page with all the information about the plant.
Show pg in view.
Populates with data from clicked plant
    Info below plant name: Outdoor/Indoor,H20, Review,Avg. price, Light
    
Description describing plant in a separate section.

* ===== * On DB: Collection for Plants 

<img class="fillerphoto" src="https://i.imgur.com/HFSGwS2.png"/>

* Name: string

* Temperature: string 45-65
    Remove (-) from string 45-65
    Remove space
    Convert to number
    Split into two groups of two.

* Light: 1 - 5 

* H20: 1 - 5

* Avg. Review: 1 - 5

* Price Ratin: 1 - 5

* Description: string

* Img: string

* Comments



    Alternatively you can type a plant name into the search bar and it will take you directly to that page.
<input type="text" placeholder="Search...">
Add listener, onclick, searches in DB for plants with that text, goes to that in index



    Plant page/Commenting
    From the plants page, you can view and create comments at the bottom of the page by clicking add comment/review.

Add comment button, onclick event listener, opens up a modal.
Modal must have text inputted which equals the text displayed on that plant page as a comment. 
    Modal also contains options to rate the plant for the Avg. Rating.
    Updates the Review collection with both of these new values (comment/rating)


This will bring up a modal that will ask for you to review the plant, and write a comment/review.

    You will submit by pressing the submit.

Comments & Ratings saved in arrays


    You will then be able to delete said comment by clicking a "x" in the corner of the comment, which will bring up a confirmation window asking if you want to delete the comment or not.

Delete button in top right off comment box, on click listener, opens modal "Do you want to delete this comment?"
Options yes or no. (Not sure how to close modal box)
Yes option onclick button deletes comment from database, and reload URL.


For Show page, it will be the same one for each plant, but will populate info with that plants key value pairs. 
    We'll need to write EJS that pulls all the info into the separate areas. 
Generic box to hold img.







* Growth/Features

Clear All button for search filter box
Page to keep checked search options after submitting
Ease of care as a new option in search filter box
Flex to fit (mobile)




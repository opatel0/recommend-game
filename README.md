# Recommend Game
[View deployed site here](https://recommend-game-ed418188de6f.herokuapp.com/)
## Route Table
| **URL** | **REST Route** | **HTTP Verb** | **CRUD Action** | **EJS Views** |
| --- | --- | --- | --- | --- |
| / | show | GET | presents landing page | home.ejs |
| /users | index | GET | either redirects to new user form or user dashboard | |
| /users/:id | show | GET | presents user dashboard | user.ejs |
| /users/new | new | GET | presents new user form | new-user.ejs |
| /users/new | create | POST | creates new user profile | |
| /users/:id/edit | edit | GET | read | edit-user | edit-user.ejs |
| /users/:id/edit | update | PUT | update user profile | |
| /users/:id | destroy | DELETE | deletes user account | |
| /recommendations | index | GET | displays public recommendation feed | rec-index.ejs | |
| /recommendations/:id | show | GET | show recommendation details page | rec.ejs | |
| /recommendations/new | new | GET | present new recommendation form | new-rec.ejs | |
| /recommendations/new | create | POST | create new recommendation | |
| /recommendations/:id | destroy | DELETE | delete recommendation | |
| /seed | | GET | reseed database with test data | |
| /about | | GET | | about.ejs |
| /* | | GET | | 404.ejs |

## Technologies Used
MongoDB/mongoose, Node.js, Express, EJS, CSS

## Installation Instructions
After cloning repo, simply run `npm i` and the project dependencies will auto install.

## User Stories
As a user, I want this application to recommend a game to me so I don't have to do a bunch of research to have fun.
As a user, I want this application to expose me to games similar to the one I just finished playing.

## Hurdles
Getting the seed route working to migrate game IDs from moby games was particularly challenging.

## Next Steps
I think I'd like to cut the user authentication stuff and leverage the powerful architecture I have here to develop the recommendation functionality out further.
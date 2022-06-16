# Plantis - Client

## Description
Plantis is an app where users can track the plants that have at home, you can choose the plant you have, add it to your profile and then add notes. Also as an admin you can delete plants, upload pictures and edit them.
 
## User Stories
 
- **Homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **Sign up** - As a user I want to sign up on the webpage so that I can see all the plants.
- **Login** - As a user I want to be able to log in on the webpage so that I can get back to my
account.
- **Logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **Login/Signup Validations** - As a user I want to see a well described message if I add wrong the login and signup.
- **404**- As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
- **My plants** - As a user I want to see my plants and add notes.
- **Add plants** - As an admin I want to upload an image and add a new plant into the database.
- **Edit plants** - As an admin I want to update the current plants.
- **Delete plants** - As an admin I want to delete the plants from the database.
 
## Technologies Used
- React
- CSS
- Javascript
- HTML

## Future Work
- Water calendar.
- Improve style.
 

## React Router Routes (React App)
| Path                      | Component            | Permissions                 | Behavior                                                                             |
| ------------------------- | -------------------- | --------------------------- | ------------------------------------------------------------------------------------ |
| `/`                       | HomePage             | public `<Route>`            | Home page                                                                            |
| `/signup`                 | SignupPage           | anon only  `<AnonRoute>`    | Signup form, link to login, navigate to login after signup                        |
| `/login`                  | LoginPage            | anon only `<AnonRoute>`     | Login form, link to signup, navigate to all plants after login                        |
| `/logout`                 | LogoutPage           | anon only `<AnonRoute>`     | Logout navigate to homepage                                              |
| `/generalplants`          | AllPlantsPage        | user only `<PrivateRoute>`  | Page that shows  plants options.                                                     |
| `/myplants`                | MyPlantPage          | user only  `<PrivateRoute>` | Shows the user plant profile, that also renders an edit form to add notes    |
| `/plans/:id`               | plantPage       | user only `<PrivateRoute>`  | Page with details of the plant.                                  |

                                         


## Components

- HomePage
 
- LoginPage

- SignupPage

- PlantPage
  * Plant details
  * AddPlantButton
 
- MyPlant page
  * EditNotesForm
  * DeletePlantButton
  

- Routes
  * AnonRoute
  * PrivateRoute

- Common
  * Navbar
  * Footer
  * ErroPage

  
<br>
  
  ## Resources
  - Google
  - Raymond & Shaun
  

  ## Links
 
### Trello

https://trello.com/b/VoT43A4O/plantis
 






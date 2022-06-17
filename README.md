# Plantis - Client

## Description
Plantis is an app where users can track the plants that have at home, you can choose the plant you have, add it to your profile and then add notes. Also as an admin you can delete plants, upload pictures and edit them.
 
 
## Technologies Used
- React
- CSS
- Javascript
- HTML


 

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
  
## Future Work
- Water calendar.
- Improve style.

  ## Resources
  - Google
  - Canva for creating logo
  - Color picker for CSS
  - Raymond & Shaun

  

  ## Links
 
### Trello

https://trello.com/b/VoT43A4O/plantis
 






import LoginPageImg from "../../../../../Resources/Images/GameProject/Zorkington-Login-Screen.PNG"
import FarmHouseImg from "../../../../../Resources/Images/GameProject/Zorkington-Farm-House.PNG"
import FieldImg from "../../../../../Resources/Images/GameProject/Zorkington-Field.PNG"
import ShopsImg from "../../../../../Resources/Images/GameProject/Zorkington-Shops.PNG"

export const slides = {
  Title:"Zorkington",
  sourceDescription: "Source Code",
  source:"https://github.com/tkilada/FarmGame",
  slideData:[
    {
    src:FieldImg,
    alt:"Field Page",
    description: "This project was a react web based expansion of a different project. I took a text based game I had completed during my bootcamp course and used react to make the game web based therfore more easily playable."
    },
    {
    src:FarmHouseImg,
    alt:"FarmHouse Page",
    description:"The game allows the user to navigate multiple rooms where they can pick up items, plant and harvest crops, and buy or sell what they collect to continue on."
    },
    {
    src:ShopsImg,
    alt:"I used this project to learn how to use React-Redux.",
    description:"The game is turn based and tracks turns in months and years."
    },
    {
    src:LoginPageImg,
    alt:"Login Page",
    description:"The project has a backend server to handle the user login and to store and saved games and load previous games connected to the users account."
    },
    
  ]
}


    

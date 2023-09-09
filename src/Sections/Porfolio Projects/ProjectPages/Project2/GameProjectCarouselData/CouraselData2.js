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
    src:LoginPageImg,
    alt:"LoginPage",
    description: "This project was a react web based expansion of a different project. I took a text based game and used react to make the game web based therfore more easily playable."
    },
    {
    src:FarmHouseImg,
    alt:"FarmHouse Page",
    description:"The game allows the user to navigate multiple rooms where they can plant crops or buy and sell what they grow."
    },
    {
    src:FieldImg,
    alt:"Field Page",
    description:"The project has a backend server to handle the login info and store saved games"
    },
    {
    src:ShopsImg,
    alt:"I used this project to learn how to use React-Redux.",
    }
  ]
}


    

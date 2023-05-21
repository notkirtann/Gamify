import React from 'react'
import Card from '../Components/Card'
import Aboutcard from './Aboutcard'
const games = [
  {src : " https://img.freepik.com/premium-vector/tic-tac-toe-game_97886-854.jpg?size=626&ext=jpg&ga=GA1.1.1000563714.1684657045&semt=ais",
  name : "Tic Tac Toe", 
  link : "/tic-tac-toe"
}, 
{
  src : "https://img.freepik.com/free-vector/alchemy-tarot-cards-sticker-vector-mystic-sticker-illustration-minimal_53876-140890.jpg?w=740&t=st=1684657369~exp=1684657969~hmac=4d5ea16c3ee4e72a8f7f2adc8268f5c26263943ac3a22c28ba570eccadfb3c1a", 
  name : "Make Pairs", 
  link : "/card-game"

}, {
  src : "https://img.freepik.com/free-vector/sweet-candy-background_24908-55001.jpg?size=626&ext=jpg&ga=GA1.1.1000563714.1684657045&semt=ais", 
  name : "Candy Hub",
  link : "/candycrush"
}, 
{
  src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5_w2y-1nwjcnrAF2UMIfoVhphASuiZtJyepE-FM5eA&s", 
  name : "Rock Paper Scissor", 
  link : "stone-paper-scissor"
}, 
{
  src : "https://img.freepik.com/free-vector/3d-effect-question-background_52683-30325.jpg?size=626&ext=jpg&ga=GA1.1.1000563714.1684657045&semt=ais", 
  name : "Quiz ", 
  link : "/quiz"
}, 
{
  src : "https://media.istockphoto.com/id/1146252014/photo/hangman-chalk-writing-on-old-grunge-chalkboard-background-with-space-for-text.jpg?s=612x612&w=0&k=20&c=4CsdY60xN3tEkoUMK8Vok_jI0ydASd8WBp50dsfcaC0=", 
  name : " Hang Man ", 
  link: "/hangman"
},
{ 
  src : "https://img.freepik.com/free-photo/aerial-view-basketball-court_23-2148393913.jpg?size=626&ext=jpg&ga=GA1.2.1000563714.1684657045&semt=ais",
  name : "Break Out",
  link : "/breakout"
}
]
export default function FeedCont() {
  return (
    <div className='feed-cont'>
        {
          games.map((e)=>{
            return <Card name={e.name} role ="The Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, arch" src = {e.src} link={e.link}> </Card>
          })
        }
    </div>
  )
}

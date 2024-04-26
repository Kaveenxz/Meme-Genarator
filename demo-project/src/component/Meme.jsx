import { useState } from 'react'
import memeData from '../memeData'

function Meme() {

    const [meme, setMeme] = useState({
      topText:"",
      bottomText:"",
      randomImage:"https://i.imgflip.com/30b1gx.jpg"
    })

    const [memeImgage, setMemeImage] = useState(memeData)

    const handleClick = ()=>{
        const memeArray = memeImgage.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url

        setMeme(pre => (
          {
            ...pre,
            randomImage:url
          }
        ))
    }

      const isOut = true
  return (
    <main>
        <div className="form">
            <input type="text" className='form--inputs' placeholder='top-text'/>
            <input type="text" className='form--inputs' placeholder='bottom-text'/>
            <button className='form--button' onClick={handleClick}>Get a new meme image</button>

        </div>

        <img src={meme.randomImage} alt="" className='meme--image'/>
        <h1>{isOut ? "yes":"no"}</h1>
    </main>
  ) 
}

export default Meme
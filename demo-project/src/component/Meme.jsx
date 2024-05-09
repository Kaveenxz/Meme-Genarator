import { useEffect, useState } from 'react'

function Meme() {

    const [meme, setMeme] = useState({
      topText:"",
      bottomText:"",
      randomImage:"https://i.imgflip.com/30b1gx.jpg "
    }) 
    

    useEffect(()=>{
      fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setMemeImage(data))
    },[])

    const [memeImgage, setMemeImage] = useState("")

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

    const handleChange= (e)=>{
      setMeme(pre =>{

        const {name, value} = e.target
        return{
          ...pre,
          [name] : value
        }
      })
    }

   return (
    <main>
        <div className="form">
            <input type="text" 
              className='form--inputs' 
              placeholder='top-text'
              name='topText'
              onChange={handleChange}
              value={meme.topText}
            />

            <input type="text" 
              className='form--inputs' 
              placeholder='bottom-text'
              name='bottomText'
              onChange={handleChange}
              value={meme.bottomText}
            />

            <button className='form--button' onClick={handleClick}>Get a new meme image</button>

        </div>

        <div className="meme">
        <img src={meme.randomImage} alt="meme-image" className='meme--image'/>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText }</h2>
        </div>

    </main>
  ) 
}

export default Meme
import memeData from '../memeData'

function Meme() {

    const handleClick = ()=>{
        const memeArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        console.log(url)
      }
  return (
    <main>
        <form className="form">
            <input type="text" className='form--inputs' placeholder='top-text'/>
            <input type="text" className='form--inputs' placeholder='bottom-text'/>
            <button className='form--button' onClick={handleClick}>Get a new meme image</button>
        </form>
    </main>
  ) 
}

export default Meme
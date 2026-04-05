import { useState } from "react";
import { MdImageSearch } from "react-icons/md";
import '../../App.css'

const Main = () => {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const handleChange=(e)=>{
        const {value, name} = e.currentTarget;
        // console.log(topText);
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return ( 
        <main>
            <div className="container mx-auto flex items-center justify-between gap-8 mt-8">
                <label htmlFor="">Top Text
                    <input type="text" 
                    name="topText" 
                    onChange={handleChange}
                    value={meme.topText}
                    placeholder="Are You" 
                    className="input input-neutral" />
                </label>
                <label htmlFor="">Bottom Text
                    <input type="text"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                    placeholder="Dumb?" className="input input-neutral" />
                </label>
            </div>

            <div className="container mx-auto flex justify-center mt-6">
                <button className="btn btn-soft w-full">
                    Get A Meme <MdImageSearch></MdImageSearch>
                </button>
            </div>

            <div className="meme">
                <img className="h-auto mx-w-[100%] rounded-md" src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span  className="bottom">{meme.bottomText}</span>
            </div>
        </main>
     );
}
 
export default Main;
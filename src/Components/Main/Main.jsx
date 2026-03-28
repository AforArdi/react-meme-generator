import { MdImageSearch } from "react-icons/md";

const Main = () => {
    return ( 
        <main>
            <div className="container mx-auto flex items-center justify-between gap-8 mt-8">
                <label htmlFor="">Top Text
                    <input type="text" placeholder="Are You" className="input input-neutral" />
                </label>
                <label htmlFor="">Bottom Text
                    <input type="text" placeholder="Dumb?" className="input input-neutral" />
                </label>
            </div>

            <div className="container mx-auto flex justify-center mt-6">
                <button className="btn btn-soft w-full">
                    Get A Meme <MdImageSearch></MdImageSearch>
                </button>
            </div>

            <div className="relative flex flex-col justify-center items-center">
                <img className="h-auto mx-w-[100%] rounded-md" src="http://i.imgflip.com/1bij.jpg" />
                <span className="">Walk into Mordor</span>
                <span  className="top">One does not simply</span>
            </div>
        </main>
     );
}
 
export default Main;
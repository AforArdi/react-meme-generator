import trollFace from '../../assets/Troll-Face.png'

const Header = () => {
    return ( 
        <header className='flex justify-center items-center gap-4 p-3 bg-blue-600'>
            <img className='w-10' src={trollFace} alt="" />
            <h2 className='text-2xl font-bold text-white'>Meme Generator</h2>
        </header>
     );
}
 
export default Header;
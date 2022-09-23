import React , {useState , useEffect} from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { AiFillCamera } from "react-icons/ai";
import Link from "next/link";
const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [bgcolor, setBgColor] = useState('')
  const [color, setColor] = useState('')
  const changeColor = () => {
    window.onscroll = () => {
      if(window.scrollY >= 100 ) {
        setColor('text-black');
        setBgColor('bg-white')
      } else {
        setColor('text-white')
        setBgColor('bg-transparent')
      }
    }
  }
  useEffect(() => {
    changeColor()
  },[])
  
  return (
  <>
    <nav className={`fixed left-0 top-0 w-full z-20 flex ${color} ${bgcolor} text-white px-16 py-5 justify-between duration-500`}>
      <Link href='/'>
        <span className="inline-block text-4xl font-bold cursor-pointer">Captur</span>
      </Link>
      <HiOutlineMenu className="relative z-[999] cursor-pointer" onClick={() => setIsOpened((prev) => !prev)} size={40} />
    </nav>
      <ul
        className={`${
          isOpened ? "top-0" : "top-[-150%]"
        } fixed z-50 w-full h-full overflow-hidden duration-500 text-white bg-black text-center text-4xl space-y-5 flex items-center justify-center flex-col`}
      >
        <AiFillCamera className="absolute top-[5%] right-[5%] z-[999] cursor-pointer" onClick={() => setIsOpened((prev) => !prev)} size={40} />
        <div className="hover:scale-110 duration-150" onClick={() => setIsOpened(false)} >
        <Link href='/'>Home</Link>
        </div>
        <div className="hover:scale-110 duration-150" onClick={() => setIsOpened(false)}>
        <Link href='/#gallery'>Gallery</Link>
        </div>
        <div className="hover:scale-110 duration-150" onClick={() => setIsOpened(false)}>
        <Link href='/work'>Work</Link>
        </div>
        <div className="hover:scale-110 duration-150" onClick={() => setIsOpened(false)}>
        <Link href='/contact'>Contact</Link>
        </div>
      </ul>
    </>
  );
};

export default Navbar;

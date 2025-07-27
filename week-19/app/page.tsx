import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className=" w-screen h-screen ">
        <div className="flex items-center justify-between h-20 p-5 bg-white">

          <div className="text-black text-2xl ml-10">Todo Application</div>
          <div className="flex justify-center items-center">
            <Link className="bg-black p-3 mx-3  rounded-xl cursor-pointer hover:bg-[#332b2b] " href="/signin"> Sign in</Link>
            <Link className="bg-black p-3 mx-3 rounded-xl cursor-pointer hover:bg-[#332b2b]" href="/signup"> Sign up</Link>

          </div>
        </div>
      </div>
    </>
  );
}

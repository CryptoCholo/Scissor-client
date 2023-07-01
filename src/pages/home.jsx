// import Img from '../assets/skin.jpg';
import InputComp from "../components/input"
// style={{ backgroundImage: `url(${Img})`}}
function Home() {

  return (
    <>
      <div className="pt-40 flex justify-center items-start h-full w-full bg-center bg-cover bg-no-repeat static top-0" >
       <div className='flex flex-col gap-5 h-24 justify-start items-center p-4 w-full'>
          <div className="text-center text-2xl font-bold">
            <p className="text-5xl">Optimize Your Online Experience with Our <br/>Advanced <span className=" text-violet-900">URL Shortening</span> Solution </p> 
            </div>
            <div className='flex flex-col items-center justify-start w-3/4'>
              <InputComp/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home

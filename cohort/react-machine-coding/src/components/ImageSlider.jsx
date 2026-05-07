import { useState } from "react";

const data = [
  " https://picsum.photos/400/300",
  "https://i.pinimg.com/736x/eb/c9/af/ebc9afde8c2b05bbf639cfc1c56dc59a.jpg",
  "https://loremflickr.com/400/300",
  "https://placebeard.it/400x300",
  "https://www.bas.ac.uk/wp-content/uploads/2015/03/10010588-edited-400x300.jpg",
];
// 0%5 = 0 (remainder)
// 1%5 = 1 (remainder)
export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center my-10">
        <button
          onClick={() => {
            setCurrentIndex(!currentIndex ? data.length -1 : currentIndex - 1)
            // if(currentIndex === 0){
            //     setCurrentIndex((data.length - 1));
            // }
            // else 
            // {
            //     setCurrentIndex(currentIndex - 1)
            // }
        
          }}
          className="mx-5 cursor-pointer bg-blue-400 px-2 py-1 rounded-md"
        >
          Prev
        </button>
        <img src={data[currentIndex]} alt="i1" />
        {/* {
        data.map((url)=>{
            return <img key={url} src={url} alt="fds" />
        })
    } */}
        <button
          onClick={() => {
            setCurrentIndex((currentIndex + 1) % data.length);
          }}
          className="mx-5 cursor-pointer bg-blue-400 px-2 py-1 rounded-md"
        >
          Next
        </button>
      </div>
      ;<p>current index : {currentIndex + 1}</p>
    </>
  );
}

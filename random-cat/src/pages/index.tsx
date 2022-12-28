import { useState } from "react";

const IndexPage = () => { 

  const imageURLs: string[] = [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1-1661325304.jfif?crop=1.00xw:0.670xh;0,0.0742xh&resize=980:*",
    "https://s.wowkorea.jp/upload/news/343557/20220413e5.jpg",
    "https://www.kpopmonster.jp/wp-content/uploads/2022/04/nmixx.jpg",
    "https://www.kpopmonster.jp/wp-content/uploads/2022/10/newjeans-4.jpg.webp",
    "https://www.moviecollection.jp/wp/wp-content/uploads/2022/01/4b031d7dc72525e96696330218c846d4-780x553.jpg",
  ];

  const [imageURL, setImageURL] = useState(
    "https://cdn2.thecatapi.com/images/bpc.jpg"
  );

  const randomImage = (): string => {
    const index = Math.floor(Math.random() * imageURLs.length);
    return imageURLs[index];
  };

  const handleClick = () => {
    setImageURL(randomImage);
  };
  
  return (
    <div>
      <button onClick={handleClick}>KPOP第4世代</button>
      <img src={imageURL} />
    </div>
  );  
};

export default IndexPage;
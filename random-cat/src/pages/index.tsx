import { useState } from "react";

const IndexPage = () => { 

  // const imageURLs: string[] = [
  //   "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1-1661325304.jfif?crop=1.00xw:0.670xh;0,0.0742xh&resize=980:*",
  //   "https://s.wowkorea.jp/upload/news/343557/20220413e5.jpg",
  //   "https://www.kpopmonster.jp/wp-content/uploads/2022/04/nmixx.jpg",
  //   "https://www.kpopmonster.jp/wp-content/uploads/2022/10/newjeans-4.jpg.webp",
  //   "https://www.moviecollection.jp/wp/wp-content/uploads/2022/01/4b031d7dc72525e96696330218c846d4-780x553.jpg",
  // ];

  const [imageURL, setImageURL] = useState(
    "https://cdn2.thecatapi.com/images/bpc.jpg"
  );

  // const randomImage = (): string => {
  //   const index = Math.floor(Math.random() * imageURLs.length);
  //   return imageURLs[index];
  // };

  // fetchで受け取る型を定義
  interface CatCategory {
    id: number;
    name: string;
  }
   
  interface SearchCatImage {
    breeds: string[];
    categories: CatCategory[];
    id: string;
    url: string;
    width: number;
    height: number;
  }

  // レスポンスのデータ構造をSearchCatImageResponseとして定義
  type SearchCatImageResponse = SearchCatImage[];

  const fetchImage = async (): Promise<SearchCatImage> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const result = (await res.json()) as SearchCatImageResponse;
    console.log(result);
    return result[0];
  };

  // fetchImage().then((image) =>{
  //   console.log(`猫の画像: ${image.url}`);
  // });

  const handleClick = async () => {
    const image = await fetchImage();
    setImageURL(image.url);
  };
  
  return (
    <div>
      <button onClick={handleClick}>KPOP第4世代</button>
      <div style={{ marginTop: 8 }}>
        <img src={imageURL} width={500} height="auto" />
      </div>
    </div>
  );  
};

export default IndexPage;
'use client';
import { useState } from "react";
import type { MouseEventHandler  } from "react";
import { NextPage } from "next";
import { LazyImage } from "./components/LazyImage";

const random = () => Math.floor(Math.random() * 123) + 1;
const generateId = () => Math.random().toString(36).substr(2,9);

const Home: NextPage = () => {

const [images, setImages] = useState<Array<IImageItem>>([]);

const addNewFox : MouseEventHandler<HTMLButtonElement> = (event) => {
  event.preventDefault();
  const newImageItem :IImageItem = {
    id:generateId(), url: `https://randomfox.ca/images/${random()}.jpg`
  };
  setImages([
    ...images,
    newImageItem
  ])
}

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="text-3xl font-bold mb-6">Random Images with Lazy Loading</h1>
      <button onClick={addNewFox} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Add new fox</button>
      { images.map(({id, url}) => (
        <div key={id} className="p-4">
          <LazyImage
               src={url}
                width={320} 
                height="auto" 
                className="mx-auto bg-gray-300 rounded-lg"
          />
        </div>
        ))}
    </main>
  );
}

export default  Home
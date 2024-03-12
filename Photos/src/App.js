import './index.scss';
import {useEffect, useState} from "react";
import {apiCategory, apiCollection} from "./Components/Api";
import Pagination from "./Components/Pagination";
import TopOfComponent from "./Components/TopOfComponent";
import BlockPhotos from "./Components/BlockPhotos";

function App() {
    const [cats, setCats] = useState([])
    const [categoryId, setCategoryId] = useState(1)
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const [searchValue, setSearchValue] = useState("")
    const [collections, setCollections] = useState([])

    useEffect(() => {
        setIsLoading(true)
        async function preload() {
            const collection = await apiCollection(categoryId, setIsLoading, page);
            setCollections(collection)
            const category = await apiCategory();
            setCats(category)
        }
        preload();
    }, [categoryId, setIsLoading, page]);


    return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>

      <TopOfComponent searchValue={searchValue} cats={cats} setSearchValue={setSearchValue} categoryId={categoryId} setCategoryId={setCategoryId}/>

      <BlockPhotos isLoading={isLoading} searchValue={searchValue} collections={collections} />

      <Pagination setPage={setPage} page={page} />
    </div>
  );
}

export default App;

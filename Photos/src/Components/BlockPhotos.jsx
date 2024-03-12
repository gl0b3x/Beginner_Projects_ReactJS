import Collection from "./Collection";

export default function BlockPhotos({isLoading, collections, searchValue}) {
    return (
        <div className="content">
            {isLoading ? <h1> Loading... </h1> :
                collections.filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((obj, index) => (
                        <Collection key={index} name={obj.name} images={obj.photos}/>
                    ))}
        </div>
    )
}
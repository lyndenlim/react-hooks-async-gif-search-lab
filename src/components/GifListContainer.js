import { useState, useEffect } from "react"
import GifList from "./GifList"
import GifSearch from "./GifSearch"

function GifListContainer() {
    const [gifList, setGifList] = useState([])
    const [search, setSearch] = useState("dolphins")

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=237nwyzCimWsg4wayeAytXHMSYJE4DJp&rating=g&limit=3`)
            .then(res => res.json())
            .then(data => setGifList(data.data))
    }, [search])

    const gifElements = gifList.map(gif => {
        return <GifList key={gif.id} image={gif.images.original.url} />
    })

    function handleSearchedAnimal(animal){
        setSearch(animal)
    }

    return (
        <div>
            <span style={{float:"right", paddingRight: "100px"}}>
                <GifSearch handleSearchedAnimal={handleSearchedAnimal}/>
            </span>
            <ul style={{listStyle:"none"}}>
                {gifElements}
            </ul>
        </div>
    )
}

export default GifListContainer
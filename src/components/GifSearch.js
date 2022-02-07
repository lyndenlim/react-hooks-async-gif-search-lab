import {useState} from "react"

function GifSearch({handleSearchedAnimal}) {
    const [animal, setAnimal] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        handleSearchedAnimal(animal)
        setAnimal("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter a Search Term</label>
            <br></br>
            <input onChange={e => setAnimal(e.target.value)} value={animal} placeholder="Search an animal" style={{ width: "150%" }}></input>
            <br></br>
            <button type="submit" style={{ backgroundColor: "green", color: "black" }}>Find Gifs</button>
        </form>
    )
}

export default GifSearch
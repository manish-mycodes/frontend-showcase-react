import { useState } from 'react'
import { data } from '../../data/auto-suggest-data'

export default function SearchBar() {
    const [searchText, setSearchText] = useState('')
    const [suggestionList, setSuggestionList] = useState([])

    const onChangeHandler = (e) => {
        console.log(e.target.value.length)
        const searchKey = e.target.value
        const updatedList = data.filter((item) =>
            item.title.toLowerCase().startsWith(searchKey.toLowerCase())
        )
        setSuggestionList(updatedList)
        setSearchText(searchKey)
    }

    return (
        <div className="container">
            <input type="text" value={searchText} onChange={onChangeHandler} />
            {suggestionList.length > 0 &&
                suggestionList.map((item) => {
                    return (
                        <div key={item.id}>
                            <img
                                src={require(
                                    `../../assets/images/${item.imageUrl}`
                                )}
                                alt={item.alt}
                                height={50}
                                width={50}
                            />
                            <label>{item.title}</label>
                        </div>
                    )
                })}
        </div>
    )
}

export default function TopOfComponent({cats, setCategoryId,searchValue, setSearchValue, categoryId}) {
    return (
        <div className="top">
            <ul className="tags">
                {
                    cats.map((obj, i) =>
                        <li onClick={() => setCategoryId(i)} className={categoryId === i ? "active" : ""}
                            key={obj.name}>
                            {obj.name}
                        </li>)
                }
            </ul>
            <input
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                className="search-input"
                placeholder="Поиск по названию"
            />
        </div>
    )
}
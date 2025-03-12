const movies = [
    {id : 110, title : "castle in the sky", director : "Hayao Miyazaki", year : "2024"},
    {id : 111, title : "Ninja scroll", director : "Yoshiaki Kawajiri", year : "2024"},
    {id : 112, title : "Paprika", director : "satosji kon", year : "2024"}
];

const Anime=()=>{
    return (
        <>
            {movies.map(e=>(
                <div key={e.id}>
                    <h1>Name: {e.title}</h1>
                    <h2>Director: {e.director}</h2>
                    <h2>Date released:{e.year} </h2>
                </div>
            )
            )}
        </>
    )
}
export default Anime
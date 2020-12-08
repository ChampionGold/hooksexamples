import React,{useEffect,state} from 'react'; 
import useFetch from './usefetch';

function NewFetch() {
    const data = useFetch("https://raw.githubusercontent.com/ChampionGold/rawjsonfiles/main/5ROWS_MOCKDATA.json");
    return(
        <div>
            <ul>
            {data.map(el => (
                <li key={el.id}>Name: {el.first_name} {el.last_name}, Email: {el.email} </li>
            ))}
            </ul>
        </div>
    );
}

export default NewFetch;
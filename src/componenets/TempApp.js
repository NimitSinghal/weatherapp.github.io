import React,{useEffect,useState} from 'react';
import './css/style.css'

export const TempApp = () => {
    const [city,setCity] = useState(null);
    const [search,setSearch] = useState('Mumbai');
    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`;
            const response = await fetch(url);
            const respJson = await response.json()
            setCity(respJson.main);
        }
        fetchApi();
    }, [search])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="seatch" className="inputField" onChange={(e) => setSearch(e.target.value)} />
                </div>  
                {!city ? 

                <h1 style={{marginTop:'30px'}}>No data found</h1>          

                :
                <>
                <div className="info">
                    <h2 className="location">
                        <i className="fas fa-street-view"></i><span>{search}</span>
                    </h2>
                    <h1 className="temp" >
                       {city.temp} °Cel
                    </h1>
                    <h3 className="tempmin_max">
                    Min : {city.temp_min} °Cel | Max : {city.temp_max} °Cel
                    </h3>
                </div>
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>    
                </>
                }                    
            </div>
        </>
    )
}

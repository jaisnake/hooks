import React,{useState,useEffect} from "react";
import axios from 'axios';

//functional component.
const Search =()=>{
    const[term,setTerm]=useState('programming');
    //set useState for api request.
    const[result,setResult]=useState([]);
   

    //making api request
    useEffect(()=>{
       const searchWiki = async()=>{

           const {data}= await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:term,
                },
            });
            setResult(data.query.search);
        };
       searchWiki();
    },[term]);
    //render result data
    const renderedResult=result.map(()=>{
        return(
            <div className="item">
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {result.snippet}
                </div>
            </div>
        )
    });
    return(
        <div>
            <div className="ui form">
                <div className="ui field">
                    <label>Enter the search term</label>
                    <input 
                        value={term}
                        onChange={(e)=>setTerm(e.target.value)}
                        className="input"
                     
                     />
                </div>
            </div>
            <div className="">
                <h2>{renderedResult}</h2>
        
            </div>
        </div>
    )
    
    
}
export default Search;
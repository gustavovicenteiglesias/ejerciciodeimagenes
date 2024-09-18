import axios from 'axios';
import { useEffect, useState } from 'react';


const VerImagenes=()=>{
    const [imagenes,setImagenes]=useState([]);

    useEffect(()=>{
        axios.get("https://picsum.photos/v2/list")
        .then((res)=>{
            console.log(res);
            setImagenes(res.data);
        })
    },[])

    return(
        <>
        <h1>Imagenes</h1>
        <div className="imagenes">
           {imagenes.map((data,i)=>{
            return(
                <div key={i}>
                    <h2>{data.url}</h2>
                    <img src={data?.download_url} alt={data.autor} width="200px" />
                </div>
            )
           })}
        </div>
        </>
    )
}
export default VerImagenes;
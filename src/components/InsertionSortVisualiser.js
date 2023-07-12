import {useEffect,useState} from 'react';
import "./InsertionSortVisualizer.css"
import { useNavigate } from 'react-router-dom';

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);
const InsertionSortVisualizer=()=>{
const [data, setData] = useState([]);
const navigate = useNavigate();
const home = () => {
  navigate('/', { state: { from: 'merge' } });
};

  useEffect(() => {
    setData(generateData(10));  
  },[]);

  const generateData = (numBars) => {
    const data=[];
    for (let i = 0; i < numBars; i++) {
      data.push(Math.floor(Math.random() *47)+4);
    }
    return data;
  };
  const insertion = async() => {
    const arr = [...data];
    const n = arr.length;
    let key,j;
    for (let i = 1; i< n; i++) {
        key=arr[i];
        j=i-1;
        while(j>=0&&arr[j]>key){
            arr[j+1]=arr[j];
            j=j-1;
            setData([...arr]);
            await delay(600);
        }
        arr[j+1]=key;
    }
  };
  const solve=()=>{
    setData(generateData(10));  
  }
  return(
    <>
    <center>
    <div className='main'>
 {
 data.map((value, index) => ( 
    <div key={index} className="sub" style={{height:`${value}vh` }}>{value}</div>
))
}
</div> 
</center>
<button onClick={home} >Home</button>
<button   onClick={insertion}>Insertion Sort</button>
<button  onClick={solve}>Reset Chart</button>
  
</>
  )}
  export default InsertionSortVisualizer;
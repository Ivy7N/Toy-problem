// ✅ Use correct import 👇️
import axios from 'axios';

import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function AllBots() {
  const [bots, setBots] = useState([]);
  const navigate = useNavigate();

  async function fetchData() {
    try{
        const res = await axios.get(' http://localhost:8001/bots ');
        console.log(res.data);
        setBots(res.data);
    }catch (error) {
        console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>ALL BOTS</h1>
      {bots.length === 0 ? <h1>Loading Bots</h1> : null}
      <div style={{display: "flex", flexWrap: "wrap"}}>
        {bots.map((bot) => {
            return(
                <div key={bot.id} className='card' style={{width : "150px", margin: "10px", cursor: "pointer"}} 
                onClick={() => navigate(`view/${bot.id}`)}
                >
                    <img src={bot.avatar_url} alt={'Avatar of' + bot.name}/>
                    <h3>{bot.name}</h3>
                </div>
            );
        })}
      </div>
    </div>
  );
}

export default AllBots;

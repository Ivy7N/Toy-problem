import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewBot() {
    const {id} =useParams();

    console.log(useParams());
    
    const [bot, setBots] =useState({
        name: "",
        health: "",
        avatar_url: "",
    })
    useEffect(() => {
        axios({method: "GET", url: ` http://localhost:8001/bots/${id} `})
        .then((res) => {
            setBots(res.data);
        })
    .catch((e) => {
        console.log(e);
        alert("Bot not found");
    });
},[id]);
    return (
        <div className="card">
            <img src={bot.avatar_url} alt=""/>
            <h3>Name: {bot.name}</h3>
            <h3>Health: {bot.name}</h3>
        </div>
    );
}
export default ViewBot;
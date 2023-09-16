import React from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header.component.jsx";
import RoomCard from "../components/shared/RoomCard/RoomCard.component.jsx";
import PageSelector from "./shared/PageSelector/PageSelector.component.jsx";
import Cookies from "universal-cookie";

export default function Root()
{
    var cookie = new Cookies();
    const [roomsList, setRoomsList] = useState([]);
    const [page, setPage] = useState(1);
    var urlParams = new URLSearchParams({page:page});
    var headers;
    if(cookie.get("jwt") != null)
    {
        headers = new Headers({
            "Authorization" : "Bearer " + cookie.get("jwt")
        })
    }
    useEffect(() => {
        fetch("http://localhost:8080/main/get-room-cards-list?" + urlParams,
        {
            method: "GET",
            headers: headers
        }).then(async(response) => {
            setRoomsList(JSON.parse(await response.text().then(response=>response)));
        });
    }, [page]);
    return (
        <div className="App">
            <Header/>
            {
                roomsList.map((component, index) => (
                    <React.Fragment key={index}>
                        <RoomCard room={component}/>
                    </React.Fragment>
                ))
            }
            <PageSelector setPageHook={setPage} page={page}/>
            <div id="detail">
                <Outlet/>
            </div>
        </div>
    );
}
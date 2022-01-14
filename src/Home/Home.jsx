import React from "react"; 
import TopicList from "../Components/Topic/TopicList";


export default function Home() {

    return (
        <div>
            <h3>React Topics</h3>
            <TopicList name={"react"}/>
        </div>
    )
}
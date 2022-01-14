
import React from "react"; 
import {useQuery} from "@apollo/client"
import { TOPIC } from "../../Graphql/Queries";
import Topic from "../Topic/Topic";



export default function DetailComponent({name}){

    const {loading, data, error } = useQuery(TOPIC, {
        variables: {name}
    })

    if(loading) return (<p>Loading</p>)
    if(error) return (<p>Loading</p>)


    const {topic} = data;
    
    return (
        <div data-testid="DetailComponent">
            <h1>{topic.name}</h1>
            <p>Stargazer Count {topic.stargazerCount}</p>
            <h2>Related Topics</h2>
            {topic.relatedTopics.map((topic) => (
                <Topic key={topic.id} data={topic}/>
            ))}
        </div>
        
    )
}
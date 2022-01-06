
import React from "react"; 
import {gql, useQuery} from "@apollo/client"
import Topic from "../Topic/Topic";

const TOPIC = gql`
  query topic ($name:String!){
    topic(name:$name){
        id
        name
        stargazerCount
        relatedTopics(first: 10) {
            id
            name
        }
    

    }
  }
`;

export default function DetailComponent({name}){
    console.log(name)

    const {loading, data, error } = useQuery(TOPIC, {
        variables: {name}
    })

    if(loading) return (<p>Loading</p>)
    if(error) return (<p>Loading</p>)
    console.log(data.topic)

    let {topic} = data;
    
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
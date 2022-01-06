import React from "react"; 
import {gql, useQuery} from "@apollo/client"
import Topic from "../Components/Topic";

const TOPICS = gql`
  query topics ($name:String!){
    topic(name:$name){
        id
        name
        relatedTopics(first: 10) {
            id
            name
        }
    }
  }
`;

export default function Home() {

    const TopicList = ({name}) => {
        const {loading, data, error } = useQuery(TOPICS, {
            variables: {name}
        })

        if(loading) return (<p style={{color:"white"}}>Loading</p>)
        if(error) return (<p style={{color:"white"}}>Loading</p>)
        
        return data.topic.relatedTopics.map((topic) => (
           <Topic key={topic.id} data={topic} />
        ))
    }
    

    return (
        <div>
            <h3>React Topics</h3>
            <TopicList name={"react"}/>
        </div>
    )
}
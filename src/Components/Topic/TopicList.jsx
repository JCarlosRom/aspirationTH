import Topic from "./Topic"
import {useQuery} from "@apollo/client"
import { TOPICS } from "../../Graphql/Queries"

export default function TopicList({name}){
    const {loading, data, error } = useQuery(TOPICS, {
        variables: {name}
    })

    if(loading) return (<p style={{color:"white"}}>Loading</p>)
    if(error) return (<p style={{color:"white"}}>Error...</p>)
    
    return data.topic.relatedTopics.map((topic) => (
       <Topic key={topic.id} data={topic} />
    ))

}
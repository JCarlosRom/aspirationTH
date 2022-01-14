import {gql} from "@apollo/client"
export const TOPIC = gql`
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

export const TOPICS = gql`
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
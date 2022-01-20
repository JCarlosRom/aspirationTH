import {MockedProvider} from '@apollo/client/testing'
import {mount} from 'enzyme'
import TopicList from './TopicList'
import { TOPICS } from '../../Graphql/Queries'
import React from 'react'
import { act } from 'react-dom/test-utils'
import wait from 'waait'


const mockSpeakerData ={
    request:{
        query: TOPICS
    },
    data:{
        topics:{
            id:1,
            name: 'Topic 1',
            stargazerCount: 12,
            relatedTopics:[
                {
                    id:2,
                    name:'Related Topics'
                }
            ]
               
        }
    }
}


it("renders topic data", async() =>{
    let wrapper;
    await act(async()=>{
        wrapper = mount(
            <MockedProvider addTypename={false} mocks={mockSpeakerData}>
                <TopicList/>
            </MockedProvider>
        )
    })

    await act(()=>wait(0))
    wrapper.update()
    expect(wrapper).toBeTruthy()
    expect(wrapper.find("topic")).toHaveText(
        "Topic 1"
    )

})
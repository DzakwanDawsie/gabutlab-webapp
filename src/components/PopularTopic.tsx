'use server'

import { getHotTopics } from "@/libs/ApiRequest"
import PopularTopicItem from "./PopularTopicItem";

async function PopularTopic() {
  const topics = await getHotTopics();
  return (
    <div className="popular-topic">
      <div className="popular-topic-header">
        <span>Hot Topics</span>
      </div>
      <div id="popular-topic" className="popular-topic-body">
      <ul>
        {topics.map(topic => {
          return <PopularTopicItem key={topic.id} topic={topic}/>
        })}
      </ul>
      </div>
    </div>
  )
}

export default PopularTopic
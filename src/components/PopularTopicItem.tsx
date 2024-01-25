'use client'

type Props = {
  topic: Topic
}

function PopularTopicItem({ topic }: Props) {
  const onClickTopic = () => {
    window.location.href = `/?topic=${topic.name}`
  }

  return (
    <li key={topic.id} onClick={onClickTopic}>
      <span className="title">#{topic.name}</span>
      <span className="detail"></span>
    </li>
  )
}

export default PopularTopicItem
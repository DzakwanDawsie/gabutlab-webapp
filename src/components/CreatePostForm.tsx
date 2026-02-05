'use client'

import { createPostAction } from "@/actions/create-post"
import { useFormState } from "react-dom"
import { useState, useRef, useMemo } from "react"
import Toast from "./Toast"
import LoginDialog from "./LoginDialog"
import dynamic from "next/dynamic"
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

type Props = {
  topics: Topic[]
}

const initialState = {
  initial: true,
  success: false,
  message: ''
}

function CreatePostForm({ topics }: Props) {
  const [state, formAction] = useFormState(createPostAction, initialState);
  const [content, setContent] = useState('');
  const [selectedTopics, setSelectedTopics] = useState<number[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const modules = useMemo(() => ({
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link'],
      ['clean']
    ],
  }), []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleTopic = (topicId: number) => {
    setSelectedTopics(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  if (!state.initial && state.success) {
    window.location.href = '/';
  }

  return (
    <>
      <form ref={formRef} action={formAction} className="create-post-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            placeholder="Enter post title..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <ReactQuill 
            theme="snow"
            value={content}
            onChange={setContent}
            modules={modules}
            placeholder="Write your post content..."
          />
          <input type="hidden" name="content" value={content} />
        </div>

        <div className="form-group">
          <label htmlFor="photo">Photo</label>
          <input 
            type="file" 
            id="photo" 
            name="photo" 
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Preview" />
            </div>
          )}
        </div>

        <div className="form-group">
          <label>Topics</label>
          <div className="topics-selector">
            {topics.map(topic => (
              <button
                key={topic.id}
                type="button"
                className={`topic-btn ${selectedTopics.includes(topic.id) ? 'selected' : ''}`}
                onClick={() => toggleTopic(topic.id)}
              >
                #{topic.name}
              </button>
            ))}
          </div>
          <input type="hidden" name="topic_ids" value={selectedTopics.join(',')} />
        </div>

        <button type="submit" className="submit-btn">Create Post</button>
      </form>

      {
        (!state.initial
        ? <Toast key={Math.random()} message={state.message}/>
        : '')
      }

      {
        (!state.initial && !state.success && state.message == 'Session Expired'
        ? <LoginDialog/>
        : '')
      }
    </>
  )
}

export default CreatePostForm

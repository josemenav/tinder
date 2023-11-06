'use client'
import '../ChatContainer/ChatContainer.styles.css'
import { useState } from "react";


const ChatInput = () => {
    const [textarea, setTextarea] = useState(null)
    return (
        <div className="chat-input">
            <textarea value={textarea} onChange={(e) => setTextarea(e.target.value)}></textarea>
            <button className="secondary-button">Submit</button>
        </div>
    )
}

export default ChatInput; 
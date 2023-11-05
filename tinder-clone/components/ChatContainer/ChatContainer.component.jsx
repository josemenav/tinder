'use client'
import ChatDisplay from "../ChatDisplay/ChatDisplay.component";
import ChatHeader from "../ChatHeader/ChatHeader.component";
import MatchesDisplay from "../MatchesDisplay/MatchesDisplay.component";
import './ChatContainer.styles.css'

const ChatContainer = () => {
    return (
        <div className="chat-container">
            <ChatHeader/>
            <div>
                <button className="option">Matches</button>
                <button className="option">Chat</button>
            </div>
            <MatchesDisplay/>
            <ChatDisplay/>
        </div>
    )
}

export default ChatContainer; 
'use client'
import '../ChatContainer/ChatContainer.styles.css'
import ChatInput from '../ChatInput/ChatInput.component'
import Chat from '../Chat/Chat.component'
import { Fragment } from 'react'


const ChatDisplay = () => {
    return (
        <Fragment>
            <Chat/>
            <ChatInput/>
        </Fragment>
    )
}

export default ChatDisplay; 
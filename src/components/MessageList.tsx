import { MessageItem } from "./MessageItem";

export function MessageList() {
    return (
        <div className="message-list">
            <ul>
                <MessageItem
                    senderId={654231}
                    senderName="Cecilia Sassaki"
                    timestamp={new Date('2023-01-25T11:30:00').toString()}
                    body="Tive uma ideia incrível para um projeto! 😍"
                />
                <MessageItem
                    senderId={123456}
                    senderName="Meu nome"
                    timestamp={new Date('2023-01-25T11:32:00').toString()}
                    body="Sério? Me conta mais."
                />
                <MessageItem
                    senderId={654231}
                    senderName="Cecilia Sassaki"
                    timestamp={new Date('2023-01-25T11:34:00').toString()}
                    body="E se a gente fizesse um chat moderno e responsivo em apenas uma semana?"
                />

                <MessageItem
                    senderId={123456}
                    senderName="Meu nome"
                    timestamp={new Date('2023-01-25T11:36:00').toString()}
                    body="#boraCodar! 🚀"
                />
            </ul>
        </div>
    )
}
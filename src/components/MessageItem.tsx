import clsx from "clsx"
import parse from 'html-react-parser';

interface MessageItemProps {
    senderId: number
    senderName: string
    timestamp: string
    body: string
}

export function MessageItem(message: MessageItemProps) {
    const boldTextExp = /(\*\*)(.*?)(\*\*)/g
    const boldTextSubstitution = '<b>$2</b>'

    const messageBody = message.body.replace(boldTextExp, boldTextSubstitution)

    const date = new Date(Date.parse(message.timestamp))

    return (
        <li className={clsx('message-item', {
            ['outgoing']: message.senderId === 123456,
            ['incoming']: message.senderId !== 123456,
        })}>
            <div className="info">{
                `${message.senderId === 123456 ?
                    "Você" :
                    message.senderName
                } - ${date.toLocaleTimeString('pt-br', { hour: "numeric", minute: "2-digit" })} `
            }
            </div>
            <div className="message">{parse(messageBody)}</div>
        </li>
    )
}
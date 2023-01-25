import sendIcon from '../assets/icons/send.svg'

export function MessageInput() {
    return (
        <div className="message-input">
            <span
                role="textbox"
                contentEditable
            />
            <button className="button" type="button">
                <img src={sendIcon} alt="Botão" />
            </button>
        </div>
    )
}
import closeIcon from '../assets/icons/close.svg'
import { HeaderProfile } from './HeaderProfile'

export function Header() {
    return (
        <header>
            <HeaderProfile
                name='Cecilia Sassaki'
                picturePath='/profile/cecilia.jpg'
            />
            <div className="trailing">
                <button className="button" type="button">
                    <img src={closeIcon} alt="Botão" />
                </button>
            </div>
        </header>

    )
}
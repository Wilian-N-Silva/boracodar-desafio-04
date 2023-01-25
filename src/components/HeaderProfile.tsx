
interface ProfileProps {
    name: string
    picturePath: string
}

export function HeaderProfile(profile: ProfileProps) {
    return (
        <div className="profile">
            <div className="avatar">
                <img
                    src={profile.picturePath}
                    alt={`Imagem de perfil de ${profile.name}`}
                />
            </div>
            <div className="headline">
                <h1 className="name">{profile.name}</h1>
                <div className="status online">
                    <span>Online</span>
                </div>
            </div>
        </div>
    )
}
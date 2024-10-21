interface UserProps {
    name: string;
    age: number;
    online: boolean;
}

const User = (props: UserProps) => {
    return (
        <div>
            
                <div className='carte'>
                    <h1>{props.name}</h1>
                    <p>{props.age}</p>
                    <p className={props.online ? 'online' : 'offline'}>{props.online ? 'En ligne' : 'Hors ligne'}</p>
                </div>
            </div>
            )
}
            export default User;
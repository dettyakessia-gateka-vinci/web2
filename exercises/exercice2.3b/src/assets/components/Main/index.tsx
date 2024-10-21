import { User } from "../../../types";

interface TabUser {
    users: User[];
}

const Main = (props: TabUser) => {
    return (
        <div>
            {props.users.map((user) =>
                <div>
                    <h2>{user.name}</h2>
                    <p>Age:{user.age}</p>
                </div>
            )}
        </div>

    );
}
export default Main;
import './Profile.css';
import { useHistory } from "react-router-dom";

function Profile() {
    return (
        <div className="Profile">
            <h1>Profile</h1>

            <div className="Profile__container">
                <div className="Profile__pic"></div>
                <form className="Profile__info">
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="date" name="DOB" />
                    <input type="text" name="religion" placeholder="Religion" />
                    <input type="number" name="height" placeholder="Height" />
                </form>
            </div>
        </div>
    )
}

export default Profile

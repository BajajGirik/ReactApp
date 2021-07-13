import './Profile.css';
import { useHistory } from "react-router-dom";

function Profile() {
    return (
        <div className="Profile">
            <h1>Profile</h1>

            <div className="Profile__container">
                <div className="Profile__pic"></div>
                <form className="Profile__info">
                    <div>
                        <p className="fa fa-user"></p>
                        <input type="text" name="name" placeholder="Name"/>
                    </div>
                    <div>

                        <input type="date" name="DOB" />
                    </div>
                    <div>

                        <input type="text" name="religion" placeholder="Religion" />
                    </div>

                    <div>

                        <input type="number" name="height" placeholder="Height" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile

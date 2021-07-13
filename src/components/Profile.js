import Header from './Header';
import './Profile.css';

function Profile() {
    return (
        <div className="Profile">
            <div className="Header">
                <NavLink to="/"
                activeStyle={{
                    fontWeight: "700",
                    color: "red"
                }}>Profile</NavLink>
                
                <NavLink to="/profile/update"
                activeStyle={{
                    fontWeight: "700",
                    color: "red"
                }}>Edit Profile</NavLink>
            </div>
            
        </div>
    )
}

export default Profile

import './UpdateProfile.css';
import { useHistory } from "react-router-dom";
import { useRef, useState } from 'react';
import Header from './Header';

function Profile() {

    const imgref = useRef(null);
    const [img, setImg] = useState(null);
    const [name, setName] = useState(null);
    const [dob, setDob] = useState(null);
    const [rel, setRel] = useState(null);
    const [height, setHeight] = useState(null);

    const saveIt = (e) => {
        e.preventDefault();

    };

    const addImage = (e) => {
        const reader = new FileReader();
        const f = e.target.files[0];
        if (f) {
            reader.readAsDataURL(f);
            reader.onload = (readerevent) => {
                setImg(readerevent.target.result);
            };
        }
        e.target.value = '';
    };

    return (
        <div className="UpdateProfile">
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

            <h1>Edit Profile</h1>

            <input ref={imgref} type="file" name="userimage"
                accept="image/*" onChange={addImage} hidden />
            
            <div className="UpdateProfile__container">
                <div className="UpdateProfile__pic">
                    <p className="fa fa-plus" onClick={() => imgref.current.click()}></p>
                    {img ? (
                        <img src={img} alt="User Image" />
                    ): (
                        <img src={process.env.PUBLIC_URL + '/user.png'} alt="User Image" />
                    )
                    }
                </div>
                <form className="UpdateProfile__info" onSubmit={saveIt}>
                    <div>
                        <p className="fa fa-user"></p>
                        <input type="text" name="name" placeholder="Name" required
                            value={name} onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <p className="fa fa-calendar"></p>
                        <input type="text" name="DOB" placeholder="Date Of Birth" required
                            onFocus={(e) => {
                                e.currentTarget.type = "date";
                                e.currentTarget.click();
                            }}
                            onBlur={(e) => e.currentTarget.type = "text"}
                            value={dob} onChange={(e) => setDob(e.target.value)}
                        />
                    </div>
                    <div>
                        <p className="fa fa-moon-o"></p>
                        <input type="text" name="religion" placeholder="Religion" required
                            value={rel} onChange={(e) => setRel(e.target.value)}
                        />
                    </div>

                    <div>
	                    <p className="fa fa-bar-chart"></p>
                        <input type="number" name="height" placeholder="Height" required
                            value={height} onChange={(e) => setHeight(e.target.value)}
                        />
                    </div>
                    <button>Save</button>
                </form>
            </div>
        </div>
    )
}

export default Profile

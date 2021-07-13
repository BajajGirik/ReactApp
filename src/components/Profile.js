import './Profile.css';
import { useHistory } from "react-router-dom";
import { useRef, useState } from 'react';

function Profile() {
    const [img, setImg] = useState(null);
    const imgref = useRef(null);

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
        <div className="Profile">
            <h1>Profile</h1>

            <input ref={imgref} type="file" name="userimage"
                accept="image/*" onChange={addImage} hidden />
            
            <div className="Profile__container">
                <div className="Profile__pic">
                    <p className="fa fa-plus" onClick={() => imgref.current.click()}></p>
                    {img ? (
                        <img src={img} alt="User Image" />
                    ): (
                        <img src={process.env.PUBLIC_URL + '/user.png'} alt="User Image" />
                    )
                    }
                </div>
                <form className="Profile__info">
                    <div>
                        <p className="fa fa-user"></p>
                        <input type="text" name="name" placeholder="Name"/>
                    </div>
                    <div>
                        <p className="fa fa-calendar"></p>
                        <input type="date" name="DOB" />
                    </div>
                    <div>
                        <p className="fa fa-moon-o"></p>
                        <input type="text" name="religion" placeholder="Religion" />
                    </div>

                    <div>
	                    <p className="fa fa-bar-chart"></p>
                        <input type="number" name="height" placeholder="Height" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile

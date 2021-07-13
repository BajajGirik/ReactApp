import './UpdateProfile.css';
import { useRef, useState } from 'react';


function Profile() {
    const [update, setUpdate] = useState(true);
    const imgref = useRef(null);
    const [img, setImg] = useState('');
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [rel, setRel] = useState('');
    const [height, setHeight] = useState('');

    const saveIt = (e) => {
        e.preventDefault();
        setUpdate(!update);
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
            { update ? 
                <h1>Update Profile</h1> :
                <h1>Profile</h1> 
            }
            <input ref={imgref} type="file" name="userimage"
                accept="image/*" onChange={addImage} hidden />
            
            <div className="UpdateProfile__container">
                <div className="UpdateProfile__pic">
                    { update && 
                        <p className="fa fa-plus" onClick={() => imgref.current.click()}></p>
                    }
                    {img ? (
                        <img src={img} alt="User Image" />
                    ): (
                        <img src={process.env.PUBLIC_URL + '/user.png'} alt="User Image" />
                    )
                    }
                </div>
                {update ?
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
                            <input type="number" name="height" placeholder="Height(in cm)" required
                                value={height} onChange={(e) => setHeight(e.target.value)}
                            />
                        </div>
                        <button type="submit">Save</button>
                    </form>
                :
                    <div className="UpdateProfile__info">
                        <div className="jsb">
                            <p>Name</p>
                            <p>{name}</p>
                        </div>
                        <div className="jsb">
                            <p>Date Of Birth</p>
                            <p>{dob}</p>
                        </div>
                        <div className="jsb">
                            <p>Religion</p>
                            <p>{rel}</p>
                        </div>
                        <div className="jsb">
                            <p>Height</p>
                            <p>{height} </p>
                        </div>
                        <button onClick={saveIt}>Edit</button>

                    </div>
                }
            </div>
        </div>
    )
}

export default Profile

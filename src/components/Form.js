import React, {useState} from 'react'
import { UseUserContext } from '../context/userContext';

const Form = () => {
    const [username, setUsername] = useState("");
    const {fetchUser} = UseUserContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchUser(username);
    }

    return (
        <div className="form">
          <div className="form-Control">
            <input type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)} placeholder="Github Username" />
          </div>
          <div className="submit-button">
            <button type="submit" className="btn" onClick={e=> handleSubmit(e)}>View Profile</button>
          </div>
        </div>
    )
}

export default Form

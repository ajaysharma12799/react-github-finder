import {createContext, useState, useContext} from 'react'
import axios from 'axios'

const userContext = createContext({
    user: null,
    fetchUser: () => {}
});

const User = { // Initial State
    user: null
}

const UseUserContext = () => {
    const {user, fetchUser, clearUser} = useContext(userContext);
    return {user, fetchUser, clearUser};
}

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(User);

    const fetchUser = async (username) => { // Function to Fetch Github User
        const resp = await axios.get(`https://api.github.com/users/${username}`);
        setUser({user: resp.data})
    }

    return (
        <userContext.Provider value={{user, fetchUser}}>
            {children}
        </userContext.Provider>
    );
}

export {userContext, UserContextProvider, UseUserContext};


import { userDB, IUser }   from './userDB';


async function getUser (id: number) {
    
    try {
        let user = userDB.filter( user => user._id === id);
        return user;
    } catch (error) {
        throw new Error(`${error}`);
    }
}

getUser(0)
.then(console.log);


import './App.css';
import React, {useEffect, useState} from 'react';
import {Hub, Auth} from 'aws-amplify';
import {Loader} from 'skylight-react';
import './App.css';
import 'skylight-react/dist/skylight.css';

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getUser() {
        try {
            const token = await Auth.currentAuthenticatedUser();
            setLoading(false);
            setUser(token);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }

    useEffect(() => {
        Hub.listen('auth', ({payload}) => {
            if (payload.event === 'signIn') {
                return getUser();
            }
            if (payload.event === 'signOut') {
                setUser(null);
                return setLoading(false);
            }
        });
        getUser();
    }, []);

    if(loading) return <Loader/>

    return (
        <div className="App">

            {
                user
                ?
                <header className="App-header">
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                :
                <div>Loading...</div>
            }
        </div>
    );
}

export default App;

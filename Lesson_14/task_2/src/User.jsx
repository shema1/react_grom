import React from 'react';
import { getUserList } from './userGateway.js';

class User extends React.Component {
    state= {
        userData: null
    };

    componentDidMount() {
        getUserList().then(userData => 
            this.setState({
                userData,
            }),
        );
    };

    render() {
        const { userData } = this.state;
        if (!userData) {
            return null;
        }
        const { name, location, avatar_url } = userData;
        return (
            <div className="user">
                <img
                    alt="User Avatar"
                    src={avatar_url}
                    className="user__avatar"
                />
                <div className="user__info">
                    <span className="user__name">{name}</span>
                    <span className="user__location">{location}</span>
                </div>
            </div>
        );
    }
}

export default User;
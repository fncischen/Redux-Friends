import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Friend } from "./Friend";

class FriendsList extends Component {
    render() {
        return (
            <div className="friends-list">
            {
                this.props.friendslist.map(a_friend => 
                        <Friend friend={a_friend}/>
                )
            }
            </div>
        )
    }
}
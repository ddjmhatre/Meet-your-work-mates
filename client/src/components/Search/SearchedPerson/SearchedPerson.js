import React from 'react';
import styles from './SearchedPerson.module.css';
import axios from 'axios';



const SearchedPerson = (props) => {
    const newMeetup = {
        inviter: JSON.parse(localStorage.getItem('currentUser')).email,
        invitee: props.email,
        meetupTime: "2021-02-12T13:15:00",
        meetupPlace: "Mojo Coffee",
        confirmed: false
    }
    return (
        <div className={styles.Person}>
            <p>{props.name}</p>
            <p>{props.role}</p>
            <p>{props.location}</p>
            <button class="btn btn-pendingtile" onClick={()=>
                axios.post('https://api-dot-meet-work-mates.ts.r.appspot.com/meetup_invites/add', newMeetup)
                    .then(res => console.log(res.data))
            }>Send Invite</button>
        </div>
    )
}

export default SearchedPerson

import propTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css"


export default function FriendList({friends}) {
    return (
        <ul className={css.friendList}>
            {friends.map(friend => <li key={friend.id} className={css.item}>
            <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
            </li>)}
            </ul>
    )
}

FriendList.propTypes = {
    avatar: propTypes.string,
    name: propTypes.string,
    isOnline: propTypes.bool,
}
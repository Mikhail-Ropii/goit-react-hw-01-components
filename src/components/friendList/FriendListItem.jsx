import css from "./FriendListItem.module.css"
import { IsOnline } from "./FriendListItem.styled"

export default function FriendListItem({ avatar, name, isOnline }) {
    return (<>
        <IsOnline isOnline={isOnline}></IsOnline>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
        </>
    )
}
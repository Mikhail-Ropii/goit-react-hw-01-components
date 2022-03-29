import css from "./FriendListItem.module.css"

export default function FriendListItem({ avatar, name, isOnline }) {
    return (<>
            <span className={css.status}
                style={isOnline === true ? { backgroundColor: "#0baf0b" } : { backgroundColor: "#d31c1c" }}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
        </>
    )
}
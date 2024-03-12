import { Skeleton } from './Skeleton';
import { User } from './User';
import {useEffect, useState} from "react";
import apiUsers from "../../api";

export const Users = ({ invites, setInvites, setSuccess}) => {
    const [searchValue,setSearchValue] = useState("")
    const [isLoading, setLoading] = useState(true)
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function preload() {
            const usersData = await apiUsers();
            setUsers(usersData.data)
            setLoading(false)
        }
        preload();
    }, []);

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value)
    }

    const onClickInvite = (id) => {
        if(invites.includes(id)){
            setInvites(prev => prev.filter(_id => _id !== id ))
        } else {
            setInvites(prev => [...prev, id])
        }
    }

    const onClickSentInvites = () => {
        setSuccess(true)
    }

  return (
    <>
        <div className="search">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
            <input value={searchValue} onChange={onChangeSearchValue} type="text" placeholder="Find user..." />
        </div>
        {isLoading ? (
            <div className="skeleton-list">
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
        ) : (
            <ul className="users-list">
                {
                    users.filter(obj => {
                        return obj.first_name.toLowerCase().includes(searchValue.toLowerCase()) || obj.last_name.toLowerCase().includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase())
                    }).map(obj => <User onClickInvite={onClickInvite} isInvited={invites.includes(obj.id)} key={obj.id} {...obj}/>)
                }
            </ul>
        )}

        <button disabled={invites.length < 1} onClick={onClickSentInvites} className="send-invite-btn">Send invite to {invites.length} users</button>
    </>
  );
};

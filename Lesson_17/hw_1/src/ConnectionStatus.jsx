import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=>{
        const offlineStatus =()=>{
            setIsOnline(false)
        }
        const onlineStatus= ()=>{
            setIsOnline(true)
        }
        window.addEventListener("offline", offlineStatus);
        window.addEventListener("online", onlineStatus)

        return()=>{
            window.removeEventListener("offline", offlineStatus)
            window.removeEventListener("online", onlineStatus)
        }
    })
    return (
       <div className={isOnline?"status":"status status_offline"}>
           {isOnline?"online":"offline"}
       </div>
    );
};

export default ConnectionStatus;
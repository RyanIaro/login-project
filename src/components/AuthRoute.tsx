import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from "react-router";
import { Loading } from "./Loading";

export function AuthRoute(props: any):React.ReactElement {
    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [ loading, setLoading ] = useState<boolean>(false);

    useEffect(() => {
        Authcheck();
        return () => Authcheck();
    }, [auth]);

    const Authcheck = onAuthStateChanged(auth, (user) => {
        if(user) {
            setLoading(false);
        } else {
            alert('You are not logged in');
            console.log('unauthorized');
            navigate('/login')
        }

    });

    if (loading){
        return (
            <Loading/>
        );
    } else {
        return (
            <>{children}</>
        );
    }
}
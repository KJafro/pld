import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Context } from './Context';

export function useIsAdmin() {
    const { user } = useContext(Context);
    const [isAdmin, setIsAdmin] = useState(null);
  
    useEffect(() => {
      if (user) {
        setIsAdmin(user.isAdmin && user);
      }
    }, [user]);
  
    useEffect(() => {
      if (!user || user === null) {
        setIsAdmin(null);
      }
    }, [user]);
  
    return isAdmin;
  }
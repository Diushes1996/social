import { useState, useEffect } from "react"
import axios from "axios";

export const useFetchProfile = () => {

    const [isLoading, setIsLoading] = useState(false);

    const [profile, setProfile] = useState();

    useEffect(() => {
        setIsLoading(true);
    
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/31312`
          )
          .then((response) => response.data)
          .then((res) => {
            setIsLoading(false);
            setProfile(res.photos.large);
          })
          .catch(() => setIsLoading(false));
    
      }, [profile]);
    
      return { isLoading, profile };

}
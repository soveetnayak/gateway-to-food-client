import axios from "axios";
import { useState, useEffect } from "react";

const Profile = (props) => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios
      .get("https://gateway-to-food.herokuapp.com/profile") // unimplemented
      .then((response) => {
        setDetails(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return <div></div>;
};

export default Profile;

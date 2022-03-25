import "./widgetSm.css";
import React, { useEffect, useState } from 'react'
import { Visibility } from "@material-ui/icons";
import { UserRequest } from "../../requestMethods";

export default function WidgetSm() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async() => {
      try {
        const res = await UserRequest.get('users/?new=true');
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {
          users.map((user) => (
            <li className="widgetSmListItem" key={user._id}>
              <img
                src={user.img || "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"}
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{ user.username }</span>
                {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

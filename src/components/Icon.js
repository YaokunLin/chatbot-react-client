import React from 'react';

// mui
import Avatar from '@mui/material/Avatar';

// assets
import bot from '../assets/bot.svg';
import user from '../assets/user.svg';



const Icon = ({sender}) => {

  if (sender === "bot"){
    return (
      <div className="profile">
        <img src={bot} alt={sender} />
      </div>
    )
  }

  if (sender === "user"){
    return (
      <div className="profile">
        <img src={user} alt={sender} />
      </div>
    )
  }

  // impersonation
  return (
      <Avatar 
        {...stringAvatar(sender)} 
        variant="square" 
        />
    )
  }

export default React.memo(Icon);

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar (name){
  const avatarString = name
    .split(" ")
    .reduce((initials, currentStr) => {
      if (currentStr.length > 0 && initials.length <= 2) {
        return initials + "" + currentStr[0];
      } else {
        return initials;
      }
    }, "");

  return {
    sx: {
      bgcolor: stringToColor(name),
      borderRadius:"5px",
      width:"36px",
      height:"36px",
    },
    children: avatarString,
  };
};
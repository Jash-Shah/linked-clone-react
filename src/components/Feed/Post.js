import React, { forwardRef } from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import { InputOptions } from './InputOptions';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import SendIcon from '@mui/icons-material/Send';

export const Post = forwardRef(({ name, description, message, photoURL }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoURL}>
          {description[0]}
        </Avatar>
        <div className="post__info">
          <h2> {name} </h2>
          <p> {description} </p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOptions Icon={ThumbUpOutlinedIcon} title="Like" color="#808080" />
        <InputOptions Icon={ChatRoundedIcon} title="Comment" color="#808080" />
        <InputOptions Icon={RepeatRoundedIcon} title="Repost" color="#808080" />
        <InputOptions Icon={SendIcon} title="Send" color="#808080" />
      </div>
    </div>
  )
})

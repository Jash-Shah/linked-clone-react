import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import { InputOptions } from './InputOptions';
import { Post } from './Post.js';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import { db } from '../../firebase';
import { collection, getDocs, addDoc, Timestamp, query, orderBy } from 'firebase/firestore/lite';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';

export const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  const user = useSelector((state) => state.user.user);

  const queryPostsRef = query(collection(db, "posts"), orderBy('timestamp', 'desc'));

  const getPosts = async () => {
    try {
      const data = await getDocs(queryPostsRef);
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

      
      setPosts(filteredData);
    } catch (err) {
      console.log(err);
    }
  }

  const onSendPost = (e) => {
    e.preventDefault();

    const sendPost = async () => {
      try {
        await addDoc(collection(db, "posts"),{
        name: user.displayName,
        description: user.email,
        message: {input},
        photoURL: user.photoURL || "",
        timestamp: Timestamp.now().toDate()
      })
      
      getPosts();
    } catch (err) {
      console.error(err);
    }
    };

    sendPost();
    setInput('');
  }
  
  useEffect(() => {  
    getPosts();
  }, []);

  console.log(posts);

  
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
            <button onClick={onSendPost} type='Submit'>Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOptions Icon={YouTubeIcon} title="Video" color="#7FC15E" />
          <InputOptions Icon={EventIcon} title="Event" color="#E7A33E" />
          <InputOptions Icon={NewspaperOutlinedIcon} title="Write Article" color="#E16745" />
        </div>
      </div>

      <FlipMove>
        {
          posts.map(({id, data: { name, description, message, photoURL }}) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message.input}
            photoURL={photoURL}
          />
        ))}
      </FlipMove>

    </div>
  )
}

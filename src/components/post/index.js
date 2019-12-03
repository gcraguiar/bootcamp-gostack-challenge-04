import React, { Component } from 'react';

import Comment from '../comment/index';

import './styles.css'


class Post extends Component {
    
  render() {
    const { data } = this.props;

    return (
      <div className="post">
        <div className="postContent">
          <div className="postHeader">
            <img src={data.author.avatar} alt={data.author.name}/>
            <div>
              <strong>{data.author.name}</strong>
              <span>{data.date}</span>
            </div>
          </div>          
          <p>{data.content}</p>  
          <div className="postImage">
            { data.image
              ? <img src={data.image}/>
              : <p></p>
            }
          </div>                  
        </div>             
        <p> {data.comments.map(comment => <Comment key={comment.id} data={comment}/> )} </p>        
      </div>
    );
  };
}
export default Post;
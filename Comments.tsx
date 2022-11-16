import * as React from 'react';
import { useRef, useState } from 'react';

const Comments = (props) => {
  const text = props && props.text ? props.text : '';
  const textRef = useRef<HTMLTextAreaElement>(null);

  const commentStyle = {
    position: 'relative',
    left: '20px',
    width: '300px',
    height: '100px',
    backgroundColor: '#fafafa',
  };

  const buttonStyle = {
    position: 'relative',
    top: '40px',
    left: '-80px',
  };

  const update = () => {
    if (props.onChange) {
      const txt = textRef.current?.value;
      props.onChange(txt);
    }
  };

  return (
    <div>
      <textarea ref={textRef} style={commentStyle}>
        {text || ''}
      </textarea>
      <button
        style={buttonStyle}
        onClick={() => {
          update();
        }}
      >
        Save Comment
      </button>
    </div>
  );
};

export default Comments;

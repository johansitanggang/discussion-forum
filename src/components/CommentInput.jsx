import React from 'react';
import { Label, Textarea, Button } from 'flowbite-react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function CommentInput({ addComment }) {
  const [content, onContentChange] = useInput('');
  return (
    <div className="flex flex-col gap-y-2 w-1/2 ">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Add Comment" />
      </div>
      <Textarea id="comment" placeholder="Leave a comment..." required rows={4} value={content} onChange={onContentChange} />
      <Button className="w-fit px-4" pill onClick={() => addComment({ content })}>
        Send
      </Button>
    </div>
  );
}
CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;

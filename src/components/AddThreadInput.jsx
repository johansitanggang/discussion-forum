import React from 'react';
import { Label, TextInput, Textarea, Button } from 'flowbite-react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function AddThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  return (
    <form className="flex flex-col gap-6">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Title" />
        </div>
        <TextInput id="title" type="text" placeholder="" value={title} onChange={onTitleChange} required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="category" value="Category" />
        </div>
        <TextInput id="category" type="text" placeholder="" value={category} onChange={onCategoryChange} required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="body" value="Content" />
        </div>
        <Textarea id="body" value={body} onChange={onBodyChange} required rows={4} />
      </div>

      <Button type="button" onClick={() => addThread({ title, body, category })} disabled={!title || !category || !body}>
        Create Thread
      </Button>
    </form>
  );
}

AddThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default AddThreadInput;

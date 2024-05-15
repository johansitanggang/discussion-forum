import React from 'react';
import { Card } from 'flowbite-react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddThreadInput from '../components/AddThreadInput';
import { asyncAddThread } from '../states/threads/action';

function AddThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  return (
    <section className="create-thread-page">
      <Card className="max-w-xl mx-auto mt-20">
        <h2 className="text-center text-2xl font-bold text-cyan-800">Create New Thread</h2>
        <AddThreadInput addThread={onAddThread} />
      </Card>
    </section>
  );
}

export default AddThreadPage;

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncAddThreadComment, asyncReceiveThreadDetail } from '../states/threadDetail/action';
import ThreadDetail from '../components/ThreadDetail';
import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onAddComment = ({ content }) => {
    dispatch(asyncAddThreadComment({ id, content }));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <section className="detail-page ">
      <div className="mx-auto max-w-6xl bg-gray-100 p-6 flex flex-col gap-y-4 mt-10">
        <ThreadDetail {...threadDetail} />
        <CommentInput addComment={onAddComment} />
        <div className="flex flex-col gap-y-2">
          <h3 className="text-gray-500 text-xl  font-bold">
            Comment(
            {threadDetail.comments.length})
          </h3>
          <CommentList comments={threadDetail.comments} />
        </div>
      </div>
    </section>
  );
}

export default DetailPage;

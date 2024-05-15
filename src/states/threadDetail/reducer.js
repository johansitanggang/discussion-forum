import { ActionType } from './action';

function threadDetailReducer(detailThread = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.ADD_COMMENT:
      return {
        ...detailThread,
        comments: [...detailThread.comments, action.payload.comment],
      };
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    default:
      return detailThread;
  }
}

export default threadDetailReducer;

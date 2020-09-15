import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // console.log('About to fetch posts!');
  await dispatch(fetchPosts());
  // console.log('Fetched posts!');
  // console.log('All posts:', getState().posts);
  // 'map' gets only userId property from all posts. then 'uniq' filters output:
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // console.log('All unique IDs:', userIds);
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
// // one time memoization
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });

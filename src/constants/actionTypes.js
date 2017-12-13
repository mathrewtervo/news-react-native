import keyMirror from 'keymirror';

const actionTypes = keyMirror({
  GET_SOURCES_SUCCESS: null,
  GET_SOURCES_FAILURE: null,
  GET_ARTICLES_FAILURE: null,
  GET_ARTICLES_SUCCESS: null,
  CHANGE_CATEGORY: null,
  SET_CURRENT_USER: null,
  BEGIN_AJAX_CALL: null,
  RESET_ERROR_MESSAGE: null,
  SEARCH_ARTICLES_SUCCESS: null,
  SEARCH_ARTICLES_FAILURE: null,
  START_SEARCH_ARTICLES: null,
  RESET_SEARCH_ARTICLES: null
});

export default actionTypes;

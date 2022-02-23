
export const GET_ARTICLES_REQUEST = 'ARTICLES::GET_ARTICLES_REQUEST';
export const GET_ARTICLES_SUCCESS = 'ARTICLES::GET_ARTICLES_SUCCESS';
export const GET_ARTICLES_FAILURE = 'ARTICLES::GET_ARTICLES_FAILURE';

export const getArticlesRequest = () => ({
    typr: GET_ARTICLES_REQUEST,
});

export const getArticlesSuccess = (articles) => ({
    typr: GET_ARTICLES_SUCCESS,
    payload: articles,
});

export const getArticlesFailure = (error) => ({
    typr: GET_ARTICLES_FAILURE,
    payload: error,
});

export const getArticles = () => async (dispatch) => {
    dispatch(getArticlesRequest());

    try {
        const respose = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const result = await response.json();
        dispatch(getArticlesSuccess(result));
    } catch (err) {
        dispatch(getArticlesFailure(err));
        console.warn(err);
    }
};
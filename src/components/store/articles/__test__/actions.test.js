import { getArticles, getArticlesSuccess, GET_ARTICLES_SUCCESS } from "../actions";


describe('getArticlesSuccess tests', () => {
   it('retuns obj with type and payload', () => {
    const payload = []; 
    const expected = {
          type: GET_ARTICLES_SUCCESS,
          payload,
      };
      const received = getArticlesSuccess(payload);
      expect(expected).toEqual(received);
   });
});

describe('getArticlesTest', () => {
    it.skip('calls fn passed as an arg with getArticlesReq', () => {
        const mockDispatch = jest.fn();

        getArticles()(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledWith(getArticlesRequested());
    });

    it('calls fn passed as an arg with getArticlesSuc if fetch was successful', async (done) => {
        const mockDispatch = jest.fn();
        const result = ['test'];
        fetchMock.mockResponseOnce(JSON.stringify(result));
        await getArticles()(mockDispatch);
        expect(mockDispatch).toHaveBeenLastWith(getArticlesSuccess(result));
    });

    it('calls fn passed as an arg with getArticlesFail if fetch was unsuccessful', async (done) => {
        const mockDispatch = jest.fn();
        const result = ['test'];
        const error = new Error('some fetch error');
        fetchMock.mockRejectOnce(error);

        await getArticles()(mockDispatch);

        expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesFailure(error));
    });
});
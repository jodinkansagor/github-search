import { isLoadingUserInfo, getFetchedUserInfo } from './userInfoSelector';


describe('user info selectors', () => {
  it('selects the userinfo loading state', () => {
    const state = {
      loading: true,
      userinfo: null
    }

    const loading = isLoadingUserInfo(state);
    expect(loading).toEqual(true);
  });

  it('selects the userinfo from state', () => {
    const state = {
      loading: true,
      userInfo: {
        name: 'JBJ',
        repos: 'lots'
      }
    };

    const userInfo = getFetchedUserInfo(state);

    expect(userInfo).toEqual(
      {
        name: 'JBJ',
        repos: 'lots'
      }
    );
  });
});

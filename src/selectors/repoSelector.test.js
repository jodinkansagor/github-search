import { isLoadingUserRepos, getFetchedRepoInfo } from './repoSelector';


describe('repo selector', () => {
  it('selects the userRepos loading state', () => {
    const state = {
      loading: true
    };

    const loading = isLoadingUserRepos(state);
    expect(loading).toEqual(true);
  });

  it('selects the user repos from state', () => {
    const state = {
      userRepos: [{ id: '123', name: 'adventure' }, { id: '234', name: 'good times' }]
    };
    const userRepos = getFetchedRepoInfo(state);
    expect(userRepos).toEqual(
      [{ id: '123', name: 'adventure' }, { id: '234', name: 'good times' }]
    );
  });
});


import React, { Component } from 'react'
import fetchFromGithubApi from '../utils/fetchFromAPI';
import { connect } from 'react-redux';
import { setRepositories } from '../redux/slices/repositories';

class ProjectList extends Component {
  async componentDidMount() {
    try {
      const { setRepositories } = this.props;
      const repositories = await fetchFromGithubApi();
      setRepositories(repositories);
    } catch(err) {
      console.error(err);
    }
  }

  render() {
    const { repositories } = this.props;
    return (
      <section>
        <table>
          <tbody>
            { repositories.map((repo, index) => (
            <tr key={index}>
              <td>
                {repo.name}
              </td>
              <td>
                {repo.description}
              </td>
              <td>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.html_url}
                </a>
              </td>
            </tr>
        ))}
          </tbody>
        </table>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  repositories: state.repositories,
});

const mapDispatchToProps = { setRepositories };

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);

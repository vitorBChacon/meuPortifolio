import React, { Component } from 'react'
import fetchFromGithubApi from '../utils/fetchFromAPI';
import { connect } from 'react-redux';
import { setRepositories } from '../redux/slices/repositories';

class ProjectList extends Component {
  constructor() {
    super();
    this.state = {
      repositories: [],
    }
  }

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
    const { repositories } = this.state;
    return (
      <section>
        { repositories.map((repo, index) => (
          <tr
            key={index}
          >
            <td>{repo.html_url}</td>
          </tr>
        ))}
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  repositories: state.repositories,
});

const mapDispatchToProps = { setRepositories };

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);

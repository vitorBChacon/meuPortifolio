import React, { Component } from 'react'
import fetchFromGithubApi from '../utils/fetchFromAPI';
import { connect } from 'react-redux';
import { setRepositories } from '../redux/slices/repositories';
import styles from '../css/ProjectList.module.css';
import localization from '../text.json';

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
    const { repositories, selectedLanguage } = this.props;
    return (
      <section>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>{localization[selectedLanguage].ProjectName}</th>
              <th>{localization[selectedLanguage].Repository}</th>
            </tr>
          </thead>
          <tbody>
            { repositories.map((repo, index) => (
            <tr key={index}>
              <td>
                {repo.name}
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
  selectedLanguage: state.language.selectedLanguage,
});

const mapDispatchToProps = { setRepositories };

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);

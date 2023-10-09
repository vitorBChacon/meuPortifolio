import React, { Component } from 'react';
import test from '../test.json';
import styles from '../css/ProjectList.module.css'

class ProjectList extends Component {

  render() {
    return (
      <section>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Project name</th>
              <th>Project URL</th>
            </tr>
          </thead>
          <tbody>
            { test.dummy.map((repo, index) => (
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

export default ProjectList;
import React, { Component } from 'react'

class ProjectList extends Component {

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

export default ProjectList;
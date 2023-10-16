import React, { Component } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from '../css/Bottom.module.css';

export default class Bottom extends Component {
  render() {
    return (
      <footer className={styles.container}>
        <a className={styles.icon} href="https://www.linkedin.com/in/vitor-chacon" target="_blank" rel="noopener noreferrer"> <FaLinkedin/> </a>
        <a className={styles.icon} href="https://github.com/vitorBChacon" target="_blank" rel="noopener noreferrer"> <FaGithub/> </a>
      </footer>
    )
  }
}

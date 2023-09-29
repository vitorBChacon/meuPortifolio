import React, { Component } from "react";
import styles from "../css/About.module.css"

class About extends Component {
  render() {
    return (
      <section className={styles.container}>
        <p className={styles.paragraph}>
          lorem Ipsum <br/>
          lorem Ipsum <br/>
          lorem Ipsum
        </p>
      </section>
    )
  }
}

export default About;
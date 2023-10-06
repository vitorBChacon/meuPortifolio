import React, { Component } from "react";
import { connect } from 'react-redux';
import styles from "../css/About.module.css"
import localization from "../text.json"

class About extends Component {
  render() {
    const { selectedLanguage } = this.props;
    return (
      <section className={styles.container}>
        <p className={styles.paragraph}>
          {localization[selectedLanguage].Paragraph}
        </p>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedLanguage: state.language.selectedLanguage,
});

export default connect(mapStateToProps)(About);
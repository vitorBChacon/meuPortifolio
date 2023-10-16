import React, { Component } from "react";
import { connect } from 'react-redux';
import styles from "../css/About.module.css"
import localization from "../text.json"

class About extends Component {
  render() {
    const { selectedLanguage, isDarkThemeOn } = this.props;
    return (
      <section className={isDarkThemeOn ? styles.dark : styles.light}>
        <p className={styles.paragraph}>
          {localization[selectedLanguage].Paragraph1}
        </p>
        <p className={styles.paragraph}>
          {localization[selectedLanguage].Paragraph2}
        </p>
        <p className={styles.paragraph}>
          {localization[selectedLanguage].Paragraph3}
        </p>
        <p className={styles.paragraph}>
          {localization[selectedLanguage].Paragraph4}
        </p>
        <p className={styles.paragraph}>
          {localization[selectedLanguage].Paragraph5}
        </p>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  isDarkThemeOn: state.theme.isDarkThemeOn,
  selectedLanguage: state.language.selectedLanguage,
});

export default connect(mapStateToProps)(About);
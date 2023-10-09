import React, { Component } from "react";
import { connect } from 'react-redux';
import styles from "../css/About.module.css"
import localization from "../text.json"

class About extends Component {
  render() {
    const { selectedLanguage, isDarkThemeOn } = this.props;
    return (
      <section className={styles.container}>
        <p className={isDarkThemeOn ? styles.dark : styles.light}>
          {localization[selectedLanguage].Paragraph}
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
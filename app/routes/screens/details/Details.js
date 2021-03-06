import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text, Image } from "react-native";
import { Icon } from "react-native-elements";

import { connect } from "react-redux";
import { isFaulty, getDefect, Loading } from "../../../dataDefinitions/defects";

import selector from "./selector";
import styles from "./styles";

class Details extends Component {
  static propTypes = {
    athlete: PropTypes.shape({
      firstname: PropTypes.string,
      lastname: PropTypes.string,
      profil: PropTypes.string
    }).isRequired
  };

  render() {
    const { athlete } = this.props;
    if (athlete === Loading)
      return (
        <View style={styles.container}>
          <Icon name="cached" color="#FC4C02" size={50} />
          <Text style={styles.text}>fetching data</Text>
        </View>
      );

    if (isFaulty(athlete))
      return (
        <Text>
          Fuck it, there is an issue: {getDefect(athlete)}
        </Text>
      );

    return (
      <View style={styles.home}>
        <Image source={{ uri: athlete.profile }} style={styles.image} />
        <Text style={styles.text}>
          {athlete.firstname}
        </Text>
        <Text style={styles.text}>
          {athlete.lastname}
        </Text>
      </View>
    );
  }
}

export default connect(selector)(Details);

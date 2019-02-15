import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';


class App extends Component {
  constructor() {
    super();
    this.state = { ms: 0, hg: 0, imt: 0, diag: '', stat: false }
  }

  klik = () => {
    let mass = parseInt(this.state.ms);
    let hgt = parseInt(this.state.hg) / 100;
    let imtl = mass / Math.pow(hgt, 2);
    let diagl = '';
    if (imtl < 18.5) {
      diagl = 'Berat badan Anda kurang';
    } else if (imtl >= 18.5 && imtl <= 24.9) {
      diagl = 'Berat badan Anda ideal';
    } else if (imtl >= 25.0 && imtl <= 29.9) {
      diagl = 'Berat badan Anda berlebih';
    } else if (imtl >= 30.0 && imtl <= 39.9) {
      diagl = 'Berat badan Anda sangat berlebih'
    } else {
      diagl = 'Anda obesitas';
    }
    this.setState({
      ms: mass,
      hg: hgt,
      imt: imtl,
      diag: diagl,
      stat: true
    })
  }
  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <TextInput onFocus={() => {
          var st = this.state.stat
          if (st) {
            this.setState({ stat: !this.state.stat })
          }
        }} onChangeText={(angka1) => this.setState({ ms: angka1 })} style={{ height: 40, width: 250, backgroundColor: 'lightblue', justifyContent: 'center' }} placeholder='Masukkan Berat Anda (dalam kg)' value={this.state.ms} />
        <Text>{'\n'}</Text>
        <TextInput onFocus={() => {
          var st = this.state.stat
          if (st) {
            this.setState({ stat: !this.state.stat })
          }
        }} onChangeText={(angka2) => this.setState({ hg: angka2 })} style={{ height: 40, width: 250, backgroundColor: 'lightblue' }} placeholder='Masukkan Tinggi Anda (dalam cm)' value={this.state.hg} />
        <Text>{'\n'}</Text>
        <Button onPress={() => { this.klik(); }} title="Hitung IMT" color="blue" style={{ width: 250, height: 100 }} />
        {this.state.stat &&
          <View style={styles.welcome} hidden="true">
            <Text style={styles.text}>Berat Badan:</Text>
            <Text style={styles.text2}>{this.state.ms} kg</Text>
            <Text style={styles.text}>Tinggi Badan:</Text>
            <Text style={styles.text2}>{this.state.hg} m</Text>
            <Text style={styles.text}>Index massa tubuh:</Text>
            <Text style={styles.text2}>{this.state.imt}</Text>
            <Text style={styles.text}>Diagnosa:</Text>
            <Text style={styles.text2}>{this.state.diag}</Text>
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#00AAFF'
  },
  welcome: {
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: 'violet',
  },
  image: {
    width: 290,
    height: 350
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  text2: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default App;
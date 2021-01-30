/*
 * Personnage page
 *
 * List all the personnages marvel
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import H1 from 'components/H1';
import messages from './messages';
import TablePerso from './TablePerso';
import CardPerso from '../../components/CardPerso';
import GridPerso from './GridPerso';
import GridComics from './GridComics';

const MY_HEADER = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});
const INIT = {
  method: 'GET',
  headers: MY_HEADER,
  mode: 'cors',
};
const APIKEY = 'b3fab34862bf0d0b22d42b586e788b1f';
export default class PersonnagesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persoTyped: 'spider-man',
      checked: false,
      personnages: [],
      comics: [],
    };
  }

  componentDidMount = () => {
    this.callPersoApi(this.state.persoTyped);
  };

  handelChange = e => {
    const text = e.target.value;
    this.setState({ persoTyped: text });
  };

  handelClick = () => {
    this.state.persoTyped
      ? this.callPersoApi(this.state.persoTyped)
      : ''
  };

  handelChangeCheck = e => {
    const check = e.target.checked;
    this.setState({ checked: check });
    this.callComicApi();
  };

  callPersoApi = name => {
    const URL = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&limit=12&apikey=${APIKEY}`;
    fetch(URL, INIT).
    then(response => response.json()).then(json => {
        const myData = json.data.results;
        this.setState({ personnages: myData });
      })
      .catch(error => console.error('erreur', error));
  };

  callComicApi = () => {
    const URL = `https://gateway.marvel.com:443/v1/public/comics?startYear=2021&apikey=${APIKEY}`;
    fetch(URL, INIT).
    then(response => response.json())
      .then(json => {
        const myData = json.data.results;
        this.setState({ comics: myData });
      })
      .catch(error => console.error('erreur', error));
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Personnage Page</title>
          <meta name="description" content="Personnage page" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <form noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Name"
            onChange={this.handelChange}
            defaultValue={this.state.persoTyped}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this.handelClick}
          >
            <FormattedMessage {...messages.search} />
          </Button>
          <Checkbox color="primary" onChange={this.handelChangeCheck} />
          <label style={{ color: 'purple' }}>Display comics 2021</label>
        </form>
        <br />
        {this.state.checked ? (
          <GridComics comics={this.state.comics} />
        ) : (
          <div />
        )}
        <GridPerso persos={this.state.personnages} />
      </div>
    );
  }
}

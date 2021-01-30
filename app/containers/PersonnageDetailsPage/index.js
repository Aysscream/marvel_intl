/*
 * Personnage page
 *
 * List all the personnages marvel
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import messages from './messages';
import CardPerso from '../../components/CardPerso';

const MY_HEADER = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});
const INIT = {
  method: 'GET',
  headers: MY_HEADER,
  mode: 'cors',
};
export default class PersonnageDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personnage: null,
      persoId: props.match.params.id,
    };
  }

  componentDidMount = () => {
    this.callPersoApi(this.state.persoId);
  };

  callPersoApi = id => {
    const APIKEY = 'b3fab34862bf0d0b22d42b586e788b1f';
    const URL = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${APIKEY}`;
    fetch(URL, INIT).
    then(response => response.json())
      .then(json => {
        const myData = json.data.results;
        this.setState({ personnage: myData[0] });
      })
      .catch(error => console.error('erreur', error));
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Personnage Détails page</title>
          <meta name="description" content="Personnage details page" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Button variant="outlined" color="primary">
          <Link style={{ textDecoration: 'none' }} to="/search">
            <FormattedMessage {...messages.back} />
          </Link>
        </Button>
        <div style={{ height: '20px' }} />
        {this.state.personnage ? (
          <CardPerso perso={this.state.personnage} />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

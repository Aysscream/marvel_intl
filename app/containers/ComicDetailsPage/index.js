/*
 * comic details page
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
import CardComic from '../PersonnagesPage/CardComic';

const MY_HEADER = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});
const INIT = {
  method: 'GET',
  headers: MY_HEADER,
  mode: 'cors',
};
export default class ComicDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comic: null,
      comicId: props.match.params.id,
    };
  }

  componentDidMount = () => {
    console.log('propsMATch??', this.props.match.params.id);
    this.callComicApi(this.state.comicId);
  };

  callComicApi = id => {
    const APIKEY = 'b3fab34862bf0d0b22d42b586e788b1f';
    const URL = `https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=${APIKEY}`;
    fetch(URL, INIT).
    then(response => response.json())
      .then(json => {
        const myData = json.data.results;
        this.setState({ comic: myData[0] });
      })
      .catch(error => console.error('erreur', error));
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Comics Détails page</title>
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
        {this.state.comic ? <CardComic comic={this.state.comic} /> : <div />}
      </div>
    );
  }
}

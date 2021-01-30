/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.PersonnageDetailsPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Détails of a comic',
  },
  back: {
    id: `${scope}.back`,
    defaultMessage: 'Back to the homepage',
  },
});

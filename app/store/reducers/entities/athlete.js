// constants
import {
    RETRIEVE_ATHLETE_DETAILS,
    RETRIEVE_ATHLETE_ACTIVITIES,
    RETRIEVE_ATHLETE_CLUBS,
    RETRIEVE_ATHLETE_GEAR,
} from '../../constants/actionTypes';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case RETRIEVE_ATHLETE_DETAILS:

      return Object.assign({}, state,
            action.details,
        );

    case RETRIEVE_ATHLETE_ACTIVITIES:

      return Object.assign({}, state,
            action.activities,
        );

    case RETRIEVE_ATHLETE_CLUBS:

      return Object.assign({}, state,
            action.clubs,
        );

    case RETRIEVE_ATHLETE_GEAR:

      return Object.assign({}, state,
            action.gear,
        );

    // ...other actions

    default:
      return state;
  }
}

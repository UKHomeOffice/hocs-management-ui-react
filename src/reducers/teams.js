import unionWith from 'lodash/unionWith';

export const teams = (state = [], {type, teams}) => {
    const teamEquality = (a = {}, b = {}) => {
        return a.team_uuid == b.team_uuid;
    };

    if (type === "FETCHED_TEAMS") {
        state = unionWith(state, teams, teamEquility)
    }

    return state;
}

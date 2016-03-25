import _ from 'lodash';

export const TRAITS_KEY = /^traits_/;

export function getUserData(user) {
  return _.omitBy(user, (v,k) => {
    return k.match(/^_/) || k.match(TRAITS_KEY)
  })
}

export function getUserTraits(user) {
  return _.reduce(user, (traits, v,k)=> {
    if (k.match(TRAITS_KEY)) {
      traits[k.replace(TRAITS_KEY, '')] = v;
    }
    return traits;
  }, {})
}

export function getUserPayload(user, segments) {
  return {
    traits: getUserTraits(user),
    segments: segments,
    user: getUserData(user)
  }
}

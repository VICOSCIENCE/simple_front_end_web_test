export function getLink(linkKey) {
  var arrLink = [];
  arrLink['GuiaDeGestionIntro'] = '/guia_de_gestion/intro';
  arrLink['XXXX'] = 'YYYY';

  return arrLink[linkKey];
}

export function getSitePath() {
  return '/guia';
}
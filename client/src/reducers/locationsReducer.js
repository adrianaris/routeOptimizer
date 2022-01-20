/**
 * init 10 locations for testing purposes
 */
//eslint-disable-next-line
const initState = [{"id":"poi.326417589071","type":"Feature","place_type":["poi"],"relevance":1,"properties":{"foursquare":"4ea31868a17c50a15cc4501d","landmark":true,"address":"Tervuurselaan","category":"rail station, train station","maki":"rail"},"text":"Brusselsesteenweg (MIVB / STIB)","place_name":"Brusselsesteenweg (MIVB / STIB), Tervuurselaan, Tervuren, Flemish Brabant 3080, Belgium","center":[4.499122,50.822624],"geometry":{"coordinates":[4.499122,50.822624],"type":"Point"},"context":[{"id":"postcode.13407561609715040","text":"3080"},{"id":"place.13407561610831000","wikidata":"Q456544","text":"Tervuren"},{"id":"region.14934905837170020","wikidata":"Q1118","short_code":"BE-VBR","text":"Flemish Brabant"},{"id":"country.1494593798110250","wikidata":"Q31","short_code":"be","text":"Belgium"}]},{"id":"place.12911868262163970","type":"Feature","place_type":["place"],"relevance":1,"properties":{"wikidata":"Q1296"},"text_en-GB":"Ghent","language_en-GB":"en","place_name_en-GB":"Ghent, East Flanders, Belgium","text":"Ghent","language":"en","place_name":"Ghent, East Flanders, Belgium","bbox":[3.579786,50.979496,3.849331,51.188767],"center":[3.7250121,51.0538286],"geometry":{"type":"Point","coordinates":[3.7250121,51.0538286]},"context":[{"id":"region.6677865445789420","wikidata":"Q1114","short_code":"BE-VOV","text_en-GB":"East Flanders","language_en-GB":"en","text":"East Flanders","language":"en"},{"id":"country.1494593798110250","wikidata":"Q31","short_code":"be","text_en-GB":"Belgium","language_en-GB":"en","text":"Belgium","language":"en"}]},{"id":"place.9859149257410700","type":"Feature","place_type":["place"],"relevance":1,"properties":{"wikidata":"Q3992"},"text_en-GB":"Liège","language_en-GB":"en","place_name_en-GB":"Liège, Liège, Belgium","text":"Liège","language":"en","place_name":"Liège, Liège, Belgium","bbox":[5.523376,50.561076,5.675214,50.688182],"center":[5.5734203,50.6451381],"geometry":{"type":"Point","coordinates":[5.5734203,50.6451381]},"context":[{"id":"region.6169599463410700","wikidata":"Q1127","short_code":"BE-WLG","text_en-GB":"Liège","language_en-GB":"en","text":"Liège","language":"en"},{"id":"country.1494593798110250","wikidata":"Q31","short_code":"be","text_en-GB":"Belgium","language_en-GB":"en","text":"Belgium","language":"en"}]},{"id":"country.12466398881545690","type":"Feature","place_type":["country"],"relevance":1,"properties":{"wikidata":"Q32","short_code":"lu"},"text_en-GB":"Luxembourg","language_en-GB":"en","place_name_en-GB":"Luxembourg","text":"Luxembourg","language":"en","place_name":"Luxembourg","matching_text":"LUX","matching_place_name":"LUX","bbox":[5.73575925716974,49.4477590174783,6.5309909999999,50.1827379941161],"center":[6.08781366657564,49.7706279766425],"geometry":{"type":"Point","coordinates":[6.08781366657564,49.7706279766425]}},{"id":"place.5534145854492300","type":"Feature","place_type":["place"],"relevance":1,"properties":{"wikidata":"Q81046"},"text_en-GB":"Charleroi","language_en-GB":"en","place_name_en-GB":"Charleroi, Hainaut, Belgium","text":"Charleroi","language":"en","place_name":"Charleroi, Hainaut, Belgium","bbox":[4.347774,50.352892,4.507566,50.492962],"center":[4.4436244,50.4120332],"geometry":{"type":"Point","coordinates":[4.4436244,50.4120332]},"context":[{"id":"region.10359670837171810","wikidata":"Q1129","short_code":"BE-WHT","text_en-GB":"Hainaut","language_en-GB":"en","text":"Hainaut","language":"en"},{"id":"country.1494593798110250","wikidata":"Q31","short_code":"be","text_en-GB":"Belgium","language_en-GB":"en","text":"Belgium","language":"en"}]},{"id":"place.3651905630676300","type":"Feature","place_type":["place"],"relevance":1,"properties":{"wikidata":"Q12995"},"text_en-GB":"Kortrijk","language_en-GB":"en","place_name_en-GB":"Kortrijk, West Flanders, Belgium","text":"Kortrijk","language":"en","place_name":"Kortrijk, West Flanders, Belgium","bbox":[3.200615,50.731007,3.35903,50.874623],"center":[3.2659884,50.8276429],"geometry":{"type":"Point","coordinates":[3.2659884,50.8276429]},"context":[{"id":"region.2038775234976150","wikidata":"Q1113","short_code":"BE-VWV","text_en-GB":"West Flanders","language_en-GB":"en","text":"West Flanders","language":"en"},{"id":"country.1494593798110250","wikidata":"Q31","short_code":"be","text_en-GB":"Belgium","language_en-GB":"en","text":"Belgium","language":"en"}]},{"id":"place.8604436528586080","type":"Feature","place_type":["place"],"relevance":1,"properties":{"wikidata":"Q45797"},"text_en-GB":"Dunkirk","language_en-GB":"en","place_name_en-GB":"Dunkirk, Nord, France","text":"Dunkirk","language":"en","place_name":"Dunkirk, Nord, France","bbox":[2.239647,50.975725,2.446396,51.060803],"center":[2.37639,51.03778],"geometry":{"type":"Point","coordinates":[2.37639,51.03778]},"context":[{"id":"region.11247701177881300","wikidata":"Q12661","short_code":"FR-59","text_en-GB":"Nord","language_en-GB":"en","text":"Nord","language":"en"},{"id":"country.19008108158641660","wikidata":"Q142","short_code":"fr","text_en-GB":"France","language_en-GB":"en","text":"France","language":"en"}]},{"id":"place.8836228170979400","type":"Feature","place_type":["place"],"relevance":1,"properties":{"wikidata":"Q12996"},"text_en-GB":"Ostend","language_en-GB":"en","place_name_en-GB":"Ostend, West Flanders, Belgium","text":"Ostend","language":"en","place_name":"Ostend, West Flanders, Belgium","bbox":[2.84034,51.184557,3.004327,51.243614],"center":[2.919496,51.2258565],"geometry":{"type":"Point","coordinates":[2.919496,51.2258565]},"context":[{"id":"region.2038775234976150","wikidata":"Q1113","short_code":"BE-VWV","text_en-GB":"West Flanders","language_en-GB":"en","text":"West Flanders","language":"en"},{"id":"country.1494593798110250","wikidata":"Q31","short_code":"be","text_en-GB":"Belgium","language_en-GB":"en","text":"Belgium","language":"en"}]},{"id":"place.13854421078813520","type":"Feature","place_type":["place"],"relevance":1,"properties":{"wikidata":"Q12892"},"text_en-GB":"Antwerp","language_en-GB":"en","place_name_en-GB":"Antwerp, Antwerp, Belgium","text":"Antwerp","language":"en","place_name":"Antwerp, Antwerp, Belgium","bbox":[4.240662,51.143438,4.497881,51.377641],"center":[4.3997081,51.2211097],"geometry":{"type":"Point","coordinates":[4.3997081,51.2211097]},"context":[{"id":"region.9941923600813520","wikidata":"Q1116","short_code":"BE-VAN","text_en-GB":"Antwerp","language_en-GB":"en","text":"Antwerp","language":"en"},{"id":"country.1494593798110250","wikidata":"Q31","short_code":"be","text_en-GB":"Belgium","language_en-GB":"en","text":"Belgium","language":"en"}]},{"id":"place.13407561610831000","type":"Feature","place_type":["place"],"relevance":1,"properties":{"wikidata":"Q456544"},"text_en-GB":"Tervuren","language_en-GB":"en","place_name_en-GB":"Tervuren, Flemish Brabant, Belgium","text":"Tervuren","language":"en","place_name":"Tervuren, Flemish Brabant, Belgium","bbox":[4.447652,50.793791,4.586422,50.867819],"center":[4.5138824,50.8241883],"geometry":{"type":"Point","coordinates":[4.5138824,50.8241883]},"context":[{"id":"region.14934905837170020","wikidata":"Q1118","short_code":"BE-VBR","text_en-GB":"Flemish Brabant","language_en-GB":"en","text":"Flemish Brabant","language":"en"},{"id":"country.1494593798110250","wikidata":"Q31","short_code":"be","text_en-GB":"Belgium","language_en-GB":"en","text":"Belgium","language":"en"}]}]

const locationsReducer = (state = initState, action) => {
  switch(action.type) {
  case 'ADD_DEPOT':
    return action.data // TO DO
  case 'ADD_LOCATION': {
    return [...state, ...action.data]
  }
  case 'REMOVE_LOCATION': {
    const id = action.data
    return state.filter(loc => loc.id !== id)
  }
  case 'OPTIMIZE_LOCATIONS':{
    const array = action.data
    let orderedLocations = []
    for (let i in array) {
      orderedLocations.push(state[array[i]])
    }

    return orderedLocations
  }
  default:
    return state
  }
}

export const addDepot = coordinates => {
  return {
    type: 'ADD_DEPOT',
    data: coordinates
  }
}
export const addLocation = coordinates => {
  return {
    type: 'ADD_LOCATION',
    data: coordinates
  }
}

export const removeLocation = id => {
  return {
    type: 'REMOVE_LOCATION',
    data: id
  }
}

export const optimLocations = orderedIndexArray => {
  return {
    type: 'OPTIMIZE_LOCATIONS',
    data: orderedIndexArray
  }
}

export default locationsReducer

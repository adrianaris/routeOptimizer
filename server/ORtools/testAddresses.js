const testAddresses = [
{
query: {
text: "210 brusselsesteenweg, 3080 tervuren, belgium",
parsed: {
housenumber: "210",
street: "brusselsesteenweg",
postcode: "3080",
city: "tervuren",
country: "belgium",
expected_type: "building"
}
},
country_code: "be",
housenumber: "210",
street: "Brusselsesteenweg",
country: "Belgium",
county: "Vlaams-Brabant",
datasource: {
sourcename: "openaddresses",
attribution: "© OpenAddresses contributors",
license: "BSD-3-Clause License"
},
postcode: "3080",
state: "Flemish Region",
district: "Tervuren",
city: "Tervuren",
lon: 4.49693,
lat: 50.82203,
formatted: "Brusselsesteenweg 210, 3080 Tervuren, Belgium",
address_line1: "Brusselsesteenweg 210",
address_line2: "3080 Tervuren, Belgium",
result_type: "building",
rank: {
popularity: 5.986314254601628,
confidence: 1,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "full_match"
},
place_id: "51e99ac937dbfc1140595a2a6f4738694940c00203"
},
{
query: {
text: "184 beiaardstraat, 8860 kortrijk, belgium",
parsed: {
housenumber: "184",
street: "beiaardstraat",
postcode: "8860",
city: "kortrijk",
country: "belgium",
expected_type: "building"
}
},
datasource: {
sourcename: "openstreetmap",
attribution: "© OpenStreetMap contributors",
license: "Open Database License",
url: "https://www.openstreetmap.org/copyright"
},
name: "Beiaardstraat",
street: "Beiaardstraat",
city: "Lendelede",
county: "Kortrijk",
state: "West Flanders",
postcode: "8860",
country: "Belgium",
country_code: "be",
lon: 3.2210619,
lat: 50.8798561,
formatted: "Beiaardstraat, 8860 Lendelede, Belgium",
address_line1: "Beiaardstraat",
address_line2: "8860 Lendelede, Belgium",
result_type: "street",
rank: {
importance: 0.41000000000000003,
popularity: 5.118919140587263,
confidence: 0.5,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "match_by_street"
},
place_id: "510b22f719bcc4094059d257eb1f9f704940f00102f9017e6c310300000000c0020492030d42656961617264737472616174"
},
{
query: {
text: "33 vaartdijkstraat 2235, antwerp, belgium",
parsed: {
housenumber: "33",
street: "vaartdijkstraat",
postcode: "2235",
city: "antwerp",
country: "belgium",
expected_type: "building"
}
},
datasource: {
sourcename: "openstreetmap",
attribution: "© OpenStreetMap contributors",
license: "Open Database License",
url: "https://www.openstreetmap.org/copyright"
},
housenumber: "33",
street: "Vaartdijkstraat",
district: "Hulshout",
city: "Hulshout",
county: "Turnhout",
state: "Antwerp",
postcode: "2235",
country: "Belgium",
country_code: "be",
lon: 4.80458746812217,
lat: 51.066446799999994,
formatted: "Vaartdijkstraat 33, 2235 Hulshout, Belgium",
address_line1: "Vaartdijkstraat 33",
address_line2: "2235 Hulshout, Belgium",
category: "building",
result_type: "building",
rank: {
importance: 0.21100000000000002,
popularity: 4.818853660738992,
confidence: 0.95,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "full_match"
},
place_id: "51b66cf9c6e5371340594076285481884940f00102f901c1bf311a00000000c00203"
},
{
query: {
text: "36a av commandant lothaire, 1040 brussels, belgium",
parsed: {
street: "36a av commandant lothaire",
postcode: "1040",
city: "brussels",
country: "belgium",
expected_type: "street"
}
},
country_code: "be",
housenumber: "36A",
street: "Avenue Commandant Lothaire",
country: "Belgium",
datasource: {
sourcename: "openaddresses",
attribution: "© OpenAddresses contributors",
license: "BSD-3-Clause License"
},
postcode: "1040",
state: "Brussels",
suburb: "La Chasse",
lon: 4.40572,
lat: 50.82892,
city: "Etterbeek",
formatted: "Avenue Commandant Lothaire 36A, 1040 Etterbeek, Belgium",
address_line1: "Avenue Commandant Lothaire 36A",
address_line2: "1040 Etterbeek, Belgium",
result_type: "building",
rank: {
popularity: 7.2009554971985015,
confidence: 0.5249999999999999,
confidence_city_level: 1,
confidence_street_level: 0.5249999999999999,
match_type: "inner_part"
},
place_id: "511d554d10759f1140590a80f10c1a6a4940c00203"
},
{
query: {
text: "106 rue robier, 7804 hainaut, belgium",
parsed: {
housenumber: "106",
street: "rue robier",
postcode: "7804",
state: "hainaut",
country: "belgium",
expected_type: "building"
}
},
datasource: {
sourcename: "openstreetmap",
attribution: "© OpenStreetMap contributors",
license: "Open Database License",
url: "https://www.openstreetmap.org/copyright"
},
name: "Rue Robier",
street: "Rue Robier",
district: "Rebaix",
city: "Ath",
county: "Ath",
state: "Hainaut",
postcode: "7804",
country: "Belgium",
country_code: "be",
lon: 3.7878559,
lat: 50.6644484,
state_code: "WHT",
formatted: "Rue Robier, 7804 Ath, Belgium",
address_line1: "Rue Robier",
address_line2: "7804 Ath, Belgium",
result_type: "street",
rank: {
importance: 0.51,
popularity: 4.5726205313753985,
confidence: 0.5,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "match_by_street"
},
place_id: "5167afe364874d0e405994f029a50c554940f00102f9012d65250400000000c0020492030a52756520526f62696572"
},
{
query: {
text: "58 volkers, 2460 antwerp, belgium",
parsed: {
housenumber: "58",
street: "volkers",
city: "antwerp",
country: "belgium",
expected_type: "building"
}
},
country_code: "be",
name: "Engel & Völkers",
country: "Belgium",
county: "Antwerpen",
datasource: {
sourcename: "openstreetmap",
attribution: "© OpenStreetMap contributors",
license: "Open Database License",
url: "https://www.openstreetmap.org/copyright"
},
state: "Flemish Region",
district: "Antwerpen",
city: "Antwerp",
lon: 4.407284,
lat: 51.213935,
formatted: "Engel & Völkers, Antwerpen, Antwerp, Belgium",
address_line1: "Engel & Völkers",
address_line2: "Antwerpen, Antwerp, Belgium",
result_type: "amenity",
rank: {
popularity: 8.995467104553104,
confidence: 0.475,
confidence_city_level: 1,
confidence_street_level: 0.95,
match_type: "inner_part"
},
place_id: "517bbc900e0fa1114059213cda38629b4940f00103f9016abee27901000000c00201920310456e67656c20262056c3b66c6b657273"
},
{
query: {
text: "74605 jaren oval, 6741 luxembourg, belgium",
parsed: {
housenumber: "74605",
street: "jaren oval",
postcode: "6741",
city: "luxembourg",
country: "belgium",
expected_type: "building"
}
},
datasource: {
sourcename: "openstreetmap",
attribution: "© OpenStreetMap contributors",
license: "Open Database License",
url: "https://www.openstreetmap.org/copyright"
},
name: "Vance",
city: "Vance",
county: "Virton",
state: "Luxembourg",
postcode: "6741",
country: "Belgium",
country_code: "be",
lon: 5.667734419560099,
lat: 49.670637903986744,
state_code: "WLX",
distance: 0,
formatted: "6741 Vance, Belgium",
address_line1: "Vance",
address_line2: "6741 Vance, Belgium",
result_type: "postcode",
rank: {
importance: 0.435,
popularity: 4.128395326440986,
confidence: 0.25,
confidence_city_level: 1,
match_type: "match_by_postcode"
},
place_id: "5159b25992c2ab164059608a7c76d7d54840c0020792030556616e6365"
},
{
query: {
text: "12 e40, 94520 erpe-mere, belgium"
},
datasource: {
sourcename: "openstreetmap",
attribution: "© OpenStreetMap contributors",
license: "Open Database License",
url: "https://www.openstreetmap.org/copyright"
},
name: "E40",
street: "E40",
city: "Erpe-Mere",
county: "Aalst",
state: "East Flanders",
postcode: "9420",
country: "Belgium",
country_code: "be",
lon: 3.9678229,
lat: 50.9263217,
formatted: "E40, 9420 Erpe-Mere, Belgium",
address_line1: "E40",
address_line2: "9420 Erpe-Mere, Belgium",
result_type: "street",
rank: {
importance: 0.5,
popularity: 4.995635951082017,
confidence: 0,
confidence_city_level: 1,
match_type: "full_match"
},
place_id: "511c8fbeee19be0f40599e899fb591764940f00102f90183429e0700000000c00204920303453430"
},
{
query: {
text: "2, rue d'en bry, 5377 namur, dinant, belgium",
parsed: {
housenumber: "2",
street: "rue d'en bry",
postcode: "5377",
city: "namur",
county: "dinant",
country: "belgium",
expected_type: "building"
}
},
datasource: {
sourcename: "openstreetmap",
attribution: "© OpenStreetMap contributors",
license: "Open Database License",
url: "https://www.openstreetmap.org/copyright"
},
name: "Rue D'En Bry",
street: "Rue D'En Bry",
suburb: "Le Pierreux",
city: "Heure",
county: "Dinant",
state: "Namur",
postcode: "5377",
country: "Belgium",
country_code: "be",
lon: 5.2804223,
lat: 50.3026245,
state_code: "WNA",
formatted: "Rue D'En Bry, 5377 Heure, Belgium",
address_line1: "Rue D'En Bry",
address_line2: "5377 Heure, Belgium",
result_type: "street",
rank: {
importance: 0.71,
popularity: 3.983148949688962,
confidence: 0.5,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "match_by_street"
},
place_id: "51c246fe05271f154059f33b4d66bc264940f00102f9019e298b1200000000c0020492030c527565204427456e20427279"
},
{
query: {
text: "45 's boschstraat, 2320 antwerp, belgium",
parsed: {
housenumber: "45",
street: "'s boschstraat",
city: "antwerp",
country: "belgium",
expected_type: "building"
}
},
datasource: {
sourcename: "openstreetmap",
attribution: "© OpenStreetMap contributors",
license: "Open Database License",
url: "https://www.openstreetmap.org/copyright"
},
name: "'s Boschstraat",
street: "'s Boschstraat",
district: "Hoogstraten",
city: "Hoogstraten",
county: "Turnhout",
state: "Antwerp",
postcode: "2320",
country: "Belgium",
country_code: "be",
lon: 4.7634672,
lat: 51.4038946,
formatted: "'s Boschstraat, 2320 Hoogstraten, Belgium",
address_line1: "'s Boschstraat",
address_line2: "2320 Hoogstraten, Belgium",
result_type: "street",
rank: {
importance: 0.61,
popularity: 6.185767064356779,
confidence: 0,
confidence_city_level: 0,
confidence_street_level: 0,
match_type: "match_by_street"
},
place_id: "5157467e58ca0d134059f80379d1b2b34940f00102f90182d5d81b00000000c0020492030e277320426f736368737472616174"
}
]

module.exports = testAddresses

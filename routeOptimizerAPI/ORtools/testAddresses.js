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
},
{
query: {
text: "Straat, Postcode, Stad, Belgium"
},
datasource: {
sourcename: "openstreetmap",
attribution: "© OpenStreetMap contributors",
license: "Open Database License",
url: "https://www.openstreetmap.org/copyright"
},
name: "Facebook Belgium",
housenumber: "35",
street: "Boulevard du Régent - Regentlaan",
suburb: "Pentagon",
district: "Brussels",
city: "City of Brussels",
county: "Brussels-Capital",
state: "Brussels-Capital",
postcode: "1000",
country: "Belgium",
country_code: "be",
lon: 4.3678337,
lat: 50.8455398,
formatted: "Facebook Belgium, Boulevard du Régent - Regentlaan 35, 1000 City of Brussels, Belgium",
address_line1: "Facebook Belgium",
address_line2: "Boulevard du Régent - Regentlaan 35, 1000 City of Brussels, Belgium",
result_type: "amenity",
rank: {
importance: 0.7926175944206113,
popularity: 8.995467104553104,
confidence: 0,
confidence_city_level: 0,
match_type: "full_match"
},
place_id: "517a77bf65a978114059b23beea53a6c4940f00103f901cd967d9600000000c0020192031046616365626f6f6b2042656c6769756d"
},
{
query: {
text: "RUE DU VINDICTIVE 6 BUS 31, 1040, ETTERBEEK, Belgium",
parsed: {
housenumber: "6",
street: "rue du vindictive",
postcode: "1040",
city: "etterbeek",
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
housenumber: "6",
street: "Rue du Vindictive - Vindictivestraat",
city: "Etterbeek",
county: "Brussels-Capital",
state: "Brussels-Capital",
postcode: "1040",
country: "Belgium",
country_code: "be",
lon: 4.3966262,
lat: 50.8333295,
formatted: "Rue du Vindictive - Vindictivestraat 6, 1040 Etterbeek, Belgium",
address_line1: "Rue du Vindictive - Vindictivestraat 6",
address_line2: "1040 Etterbeek, Belgium",
result_type: "building",
rank: {
importance: 0.411,
popularity: 7.672234976267278,
confidence: 0.95,
confidence_city_level: 1,
confidence_street_level: 0.95,
match_type: "full_match"
},
place_id: "5170f2b62d259611405961a5828aaa6a4940f00103f9010c7d198e00000000c00203"
},
{
query: {
text: "NIEUWELAAN 147, 1040, BRUSSEL, Belgium",
parsed: {
housenumber: "147",
street: "nieuwelaan",
postcode: "1040",
city: "brussel",
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
housenumber: "147",
street: "Avenue Nouvelle - Nieuwelaan",
city: "Etterbeek",
county: "Brussels-Capital",
state: "Brussels-Capital",
postcode: "1040",
country: "Belgium",
country_code: "be",
lon: 4.3861147,
lat: 50.8256288,
formatted: "Avenue Nouvelle - Nieuwelaan 147, 1040 Etterbeek, Belgium",
address_line1: "Avenue Nouvelle - Nieuwelaan 147",
address_line2: "1040 Etterbeek, Belgium",
result_type: "building",
rank: {
importance: 0.21100000000000002,
popularity: 7.5355867779665955,
confidence: 0.9025,
confidence_city_level: 1,
confidence_street_level: 0.95,
match_type: "full_match"
},
place_id: "51f804e4a6618b1140595f515b34ae694940f00103f901e51e288b00000000c00203"
},
{
query: {
text: "fritz toussaintstraat 14 , 1050, Elsene, Belgium",
parsed: {
housenumber: "14",
street: "fritz toussaintstraat",
postcode: "1050",
city: "elsene",
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
housenumber: "14",
street: "Rue Fritz Toussaint - Fritz Toussaintstraat",
suburb: "Usquare",
city: "Ixelles - Elsene",
county: "Brussels-Capital",
state: "Brussels-Capital",
postcode: "1050",
country: "Belgium",
country_code: "be",
lon: 4.384041273474137,
lat: 50.82210915,
formatted: "Rue Fritz Toussaint - Fritz Toussaintstraat 14, 1050 Ixelles - Elsene, Belgium",
address_line1: "Rue Fritz Toussaint - Fritz Toussaintstraat 14",
address_line2: "1050 Ixelles - Elsene, Belgium",
category: "building",
result_type: "building",
rank: {
importance: 0.31100000000000005,
popularity: 7.638672729681773,
confidence: 0.95,
confidence_city_level: 1,
confidence_street_level: 0.95,
match_type: "full_match"
},
place_id: "51de8a971d4289114059067f64df3a694940f00102f90149e2dc0700000000c00203"
},
{
query: {
text: "Kroonlaan 165 , 1050, Elsene, Belgium",
parsed: {
housenumber: "165",
street: "kroonlaan",
postcode: "1050",
city: "elsene",
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
housenumber: "165",
street: "Avenue de la Couronne - Kroonlaan",
suburb: "Flagey",
city: "Ixelles - Elsene",
county: "Brussels-Capital",
state: "Brussels-Capital",
postcode: "1050",
country: "Belgium",
country_code: "be",
lon: 4.3843333,
lat: 50.8252107,
formatted: "Avenue de la Couronne - Kroonlaan 165, 1050 Ixelles - Elsene, Belgium",
address_line1: "Avenue de la Couronne - Kroonlaan 165",
address_line2: "1050 Ixelles - Elsene, Belgium",
result_type: "building",
rank: {
importance: 0.21100000000000002,
popularity: 7.52279789911396,
confidence: 0.95,
confidence_city_level: 1,
confidence_street_level: 0.95,
match_type: "full_match"
},
place_id: "51160e29ab8e8911405996671481a0694940f00103f901311bb99200000000c00203"
},
{
query: {
text: "Kroonlaan 159 Receptie Kroonlaan 165, 1050, Brussel, Belgium"
},
country_code: "be",
housenumber: "165",
street: "Kroonlaan",
country: "Belgium",
datasource: {
sourcename: "openaddresses",
attribution: "© OpenAddresses contributors",
license: "BSD-3-Clause License"
},
postcode: "1050",
state: "Brussels",
suburb: "Ter Kameren",
lon: 4.38433,
lat: 50.82521,
formatted: "Kroonlaan 165, 1050 Brussels, Belgium",
address_line1: "Kroonlaan 165",
address_line2: "1050 Brussels, Belgium",
result_type: "building",
rank: {
popularity: 7.52279789911396,
confidence: 0,
confidence_city_level: 0,
match_type: "full_match"
},
place_id: "519a7cb3cd8d89114059842a357ba0694940c00203"
},
{
query: {
text: "CLOS DE LA GLAISIERE 24, 1140, EVERE, Belgium",
parsed: {
housenumber: "24",
street: "clos de la glaisiere",
postcode: "1140",
city: "evere",
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
housenumber: "24",
street: "Clos de la Glaisière - Leemputgaarde",
suburb: "Paduwa",
city: "Evere",
county: "Brussels-Capital",
state: "Brussels-Capital",
postcode: "1140",
country: "Belgium",
country_code: "be",
lon: 4.41906845155947,
lat: 50.85702275,
formatted: "Clos de la Glaisière - Leemputgaarde 24, 1140 Evere, Belgium",
address_line1: "Clos de la Glaisière - Leemputgaarde 24",
address_line2: "1140 Evere, Belgium",
category: "building.residential",
result_type: "building",
rank: {
importance: 0.411,
popularity: 6.8832681501131745,
confidence: 0.95,
confidence_city_level: 1,
confidence_street_level: 0.95,
match_type: "full_match"
},
place_id: "51e2eeb84720ad114059c896e5ebb26d4940f00102f9014aff9a1d00000000c00203"
},
{
query: {
text: "RUE PIERRE VAN OBBERGHEN 96 BUS 204, 1140, EVERE, Belgium",
parsed: {
housenumber: "96",
street: "rue pierre van obberghen",
postcode: "1140",
city: "evere",
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
housenumber: "96",
street: "Rue Pierre Van Obberghen - Pieter Van Obberghenstraat",
suburb: "Picardie",
city: "Evere",
county: "Brussels-Capital",
state: "Brussels-Capital",
postcode: "1140",
country: "Belgium",
country_code: "be",
lon: 4.3981894,
lat: 50.8727609,
formatted: "Rue Pierre Van Obberghen - Pieter Van Obberghenstraat 96, 1140 Evere, Belgium",
address_line1: "Rue Pierre Van Obberghen - Pieter Van Obberghenstraat 96",
address_line2: "1140 Evere, Belgium",
result_type: "building",
rank: {
importance: 0.511,
popularity: 7.115762496310886,
confidence: 0.95,
confidence_city_level: 1,
confidence_street_level: 0.95,
match_type: "full_match"
},
place_id: "5198744af6be97114059205d11a1b66f4940f00103f901eb216acc01000000c00203"
},
{
query: {
text: "Avenue du Destrier 8 , 1140, BRUXELLES, Belgium",
parsed: {
housenumber: "8",
street: "avenue du destrier",
postcode: "1140",
city: "bruxelles",
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
housenumber: "8",
street: "Avenue du Destrier - Strijdroslaan",
suburb: "Paduwa",
city: "Evere",
county: "Brussels-Capital",
state: "Brussels-Capital",
postcode: "1140",
country: "Belgium",
country_code: "be",
lon: 4.410684903921892,
lat: 50.85881635,
formatted: "Avenue du Destrier - Strijdroslaan 8, 1140 Evere, Belgium",
address_line1: "Avenue du Destrier - Strijdroslaan 8",
address_line2: "1140 Evere, Belgium",
category: "building.residential",
result_type: "building",
rank: {
importance: 0.411,
popularity: 6.964264469403545,
confidence: 0.9025,
confidence_city_level: 1,
confidence_street_level: 0.95,
match_type: "full_match"
},
place_id: "51c2385d958aa41140599242b4b1ed6d4940f00102f901b018ba0d00000000c00203"
},
{
query: {
text: "Genèvestraat 113 b11, 1140, Evere, Belgium",
parsed: {
housenumber: "113",
street: "genèvestraat",
postcode: "1140",
city: "evere",
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
housenumber: "113",
street: "Rue de Genève - Genèvestraat",
suburb: "Paduwa",
city: "Evere",
county: "Brussels-Capital",
state: "Brussels-Capital",
postcode: "1140",
country: "Belgium",
country_code: "be",
lon: 4.403806610569136,
lat: 50.86147655,
formatted: "Rue de Genève - Genèvestraat 113, 1140 Evere, Belgium",
address_line1: "Rue de Genève - Genèvestraat 113",
address_line2: "1140 Evere, Belgium",
category: "building.residential",
result_type: "building",
rank: {
importance: 0.21100000000000002,
popularity: 6.945337729947704,
confidence: 0.95,
confidence_city_level: 1,
confidence_street_level: 0.95,
match_type: "full_match"
},
place_id: "515236e97a7f9d114059ad4214dd446e4940f00102f901f426ba0d00000000c00203"
},
{
query: {
text: "CHAUSSEE D'OTTENBOURG 70, 1300, WAVRE, Belgium",
parsed: {
housenumber: "70",
street: "chaussee d'ottenbourg",
postcode: "1300",
city: "wavre",
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
housenumber: "70",
street: "Chaussée d'Ottenbourg",
district: "Wavre",
city: "Wavre",
county: "Nivelles",
state: "Walloon Brabant",
postcode: "1300",
country: "Belgium",
country_code: "be",
lon: 4.6162045865415315,
lat: 50.72585925,
formatted: "Chaussée d'Ottenbourg 70, 1300 Wavre, Belgium",
address_line1: "Chaussée d'Ottenbourg 70",
address_line2: "1300 Wavre, Belgium",
category: "building",
result_type: "building",
rank: {
importance: 0.31100000000000005,
popularity: 6.0504459606105065,
confidence: 1,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "full_match"
},
place_id: "51445dcb55fe76124059e21fb6f4e85c4940f00102f901f236b41800000000c00203"
},
{
query: {
text: "RUE LONGUE 47B, 1320, BEAUVECHAIN, Belgium",
parsed: {
housenumber: "47b",
street: "rue longue",
postcode: "1320",
city: "beauvechain",
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
name: "Rue Longue",
street: "Rue Longue",
district: "Beauvechain",
city: "Beauvechain",
county: "Nivelles",
state: "Walloon Brabant",
postcode: "1320",
country: "Belgium",
country_code: "be",
lon: 4.7817486,
lat: 50.7562478,
formatted: "Rue Longue, 1320 Beauvechain, Belgium",
address_line1: "Rue Longue",
address_line2: "1320 Beauvechain, Belgium",
result_type: "street",
rank: {
importance: 0.61,
popularity: 4.589749573828837,
confidence: 0.5,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "match_by_street"
},
place_id: "5170c67ab48220134059025658bacc604940f00102f901a6a6cf0100000000c0020492030a527565204c6f6e677565"
},
{
query: {
text: "Rue de la C. Alpayde 54 , 1320, Hamme-Mille, Belgium",
parsed: {
housenumber: "54",
street: "rue de la alpayde",
postcode: "1320",
city: "hamme-mille",
country: "belgium",
expected_type: "building"
}
},
country_code: "be",
housenumber: "54",
street: "Rue De La Comtesse Alpayde",
country: "Belgium",
county: "Brabant wallon",
datasource: {
sourcename: "openaddresses",
attribution: "© OpenAddresses contributors",
license: "BSD-3-Clause License"
},
postcode: "1320",
state: "Wallonia",
lon: 4.71817,
lat: 50.77464,
formatted: "Rue De La Comtesse Alpayde 54, 1320 Brabant wallon, Belgium",
address_line1: "Rue De La Comtesse Alpayde 54",
address_line2: "1320 Brabant wallon, Belgium",
result_type: "building",
rank: {
popularity: 4.833206893618773,
confidence: 0.95,
confidence_city_level: 1,
confidence_street_level: 0.95,
match_type: "full_match"
},
place_id: "518fdfdbf467df12405933164d6727634940c00203"
},
{
query: {
text: "Avenue des Tourterelles 14, 1330, RIXENSART, Belgium",
parsed: {
housenumber: "14",
street: "avenue des tourterelles",
postcode: "1330",
city: "rixensart",
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
name: "Avenue des Tourterelles",
street: "Avenue des Tourterelles",
suburb: "Le Glain",
district: "Rixensart",
city: "Rixensart",
county: "Nivelles",
state: "Walloon Brabant",
postcode: "1330",
country: "Belgium",
country_code: "be",
lon: 4.5224247,
lat: 50.7171067,
formatted: "Avenue des Tourterelles, 1330 Rixensart, Belgium",
address_line1: "Avenue des Tourterelles",
address_line2: "1330 Rixensart, Belgium",
result_type: "street",
rank: {
importance: 0.71,
popularity: 5.539910964327798,
confidence: 0.5,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "match_by_street"
},
place_id: "518e7d2480f6161240590a1f0027ca5b4940f00102f9013d94690100000000c002049203174176656e75652064657320546f7572746572656c6c6573"
},
{
query: {
text: "RUE DES BERGÈRES  47, 1331, ROSIÈRES, Belgium",
parsed: {
housenumber: "47",
street: "rue des bergères",
postcode: "1331",
city: "rosières",
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
name: "Rue des Bergères",
street: "Rue des Bergères",
city: "Rosières",
county: "Nivelles",
state: "Walloon Brabant",
postcode: "1331",
country: "Belgium",
country_code: "be",
lon: 4.54,
lat: 50.7320456,
formatted: "Rue des Bergères, 1331 Rosières, Belgium",
address_line1: "Rue des Bergères",
address_line2: "1331 Rosières, Belgium",
result_type: "street",
rank: {
importance: 0.71,
popularity: 5.309150221851738,
confidence: 0.5,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "match_by_street"
},
place_id: "51295c8fc2f528124059219793abb35d4940f00102f90189424d0200000000c00204920311527565206465732042657267c3a8726573"
},
{
query: {
text: "RUE DES CARILLONNEURS 5 BUS 104, 1348, LOUVAIN-LA-NEUVE, Belgium",
parsed: {
housenumber: "5",
street: "rue des carillonneurs",
postcode: "1348",
city: "louvain-la-neuve",
country: "belgium",
expected_type: "building"
}
},
country_code: "be",
housenumber: "5",
street: "Rue Des Carillonneurs",
country: "Belgium",
county: "Brabant wallon",
datasource: {
sourcename: "openaddresses",
attribution: "© OpenAddresses contributors",
license: "BSD-3-Clause License"
},
postcode: "1348",
state: "Wallonia",
lon: 4.6153,
lat: 50.65987,
distance: 1593.5222062535677,
formatted: "Rue Des Carillonneurs 5, 1348 Brabant wallon, Belgium",
address_line1: "Rue Des Carillonneurs 5",
address_line2: "1348 Brabant wallon, Belgium",
result_type: "building",
rank: {
popularity: 6.108047383343442,
confidence: 1,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "full_match"
},
place_id: "514bea0434117612405946cec29e76544940c00203"
},
{
query: {
text: "CORTIL DES GRILLONS 2 BUS 201, 1348, LOUVAIN-LA-NEUVE, Belgium",
parsed: {
housenumber: "2",
street: "cortil des grillons",
postcode: "1348",
city: "louvain-la-neuve",
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
housenumber: "2",
street: "Cortil des Grillons",
suburb: "L'Hocaille",
district: "Louvain-la-Neuve",
city: "Ottignies-Louvain-la-Neuve",
county: "Nivelles",
state: "Walloon Brabant",
postcode: "1348",
country: "Belgium",
country_code: "be",
lon: 4.602461099101799,
lat: 50.6686282,
formatted: "Cortil des Grillons 2, 1348 Ottignies-Louvain-la-Neuve, Belgium",
address_line1: "Cortil des Grillons 2",
address_line2: "1348 Ottignies-Louvain-la-Neuve, Belgium",
category: "building.residential",
result_type: "building",
rank: {
importance: 0.411,
popularity: 6.5075639755293295,
confidence: 1,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "full_match"
},
place_id: "518c04f78feb681240597817de9b95554940f00102f901effa052f00000000c00203"
},
{
query: {
text: "AVENUE EMILE VANDERVELDE 76, 1350, ORP-LE-GRAND, Belgium",
parsed: {
housenumber: "76",
street: "avenue emile vandervelde",
postcode: "1350",
city: "orp-le-grand",
country: "belgium",
expected_type: "building"
}
},
country_code: "be",
housenumber: "76",
street: "Avenue Emile Vandervelde",
country: "Belgium",
county: "Brabant wallon",
datasource: {
sourcename: "openaddresses",
attribution: "© OpenAddresses contributors",
license: "BSD-3-Clause License"
},
postcode: "1350",
state: "Wallonia",
city: "Orp-le-Grand",
lon: 4.99275,
lat: 50.70815,
formatted: "Avenue Emile Vandervelde 76, 1350 Orp-le-Grand, Belgium",
address_line1: "Avenue Emile Vandervelde 76",
address_line2: "1350 Orp-le-Grand, Belgium",
result_type: "building",
rank: {
popularity: 4.425187119002376,
confidence: 1,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "full_match"
},
place_id: "517f6abc7493f8134059ca54c1a8a45a4940c00203"
},
{
query: {
text: "RUE CHAPELLE ST VENAERT 59, 1370, JODOIGNE-SOUVERAINE, Belgium",
parsed: {
housenumber: "59",
street: "rue chapelle st venaert",
postcode: "1370",
city: "jodoigne-souveraine",
country: "belgium",
expected_type: "building"
}
},
country_code: "be",
housenumber: "59",
street: "Rue De La Chapelle Stevenaert",
country: "Belgium",
county: "Brabant wallon",
datasource: {
sourcename: "openaddresses",
attribution: "© OpenAddresses contributors",
license: "BSD-3-Clause License"
},
postcode: "1370",
state: "Wallonia",
lon: 4.84819,
lat: 50.71322,
formatted: "Rue De La Chapelle Stevenaert 59, 1370 Brabant wallon, Belgium",
address_line1: "Rue De La Chapelle Stevenaert 59",
address_line2: "1370 Brabant wallon, Belgium",
result_type: "building",
rank: {
popularity: 4.539872712058331,
confidence: 0.5599999999999999,
confidence_city_level: 1,
confidence_street_level: 0.5599999999999999,
match_type: "full_match"
},
place_id: "514d2d5beb8b64134059336dffca4a5b4940c00203"
},
{
query: {
text: "13 rue du fond AGNY , 1380,  Lasne, Belgium",
parsed: {
housenumber: "13",
street: "rue du fond agny",
postcode: "1380",
city: "lasne",
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
name: "Rue du Fond Agny",
street: "Rue du Fond Agny",
district: "Couture-Saint-Germain",
city: "Lasne",
county: "Nivelles",
state: "Walloon Brabant",
postcode: "1380",
country: "Belgium",
country_code: "be",
lon: 4.4856052,
lat: 50.6559988,
formatted: "Rue du Fond Agny, 1380 Lasne, Belgium",
address_line1: "Rue du Fond Agny",
address_line2: "1380 Lasne, Belgium",
result_type: "street",
rank: {
importance: 0.91,
popularity: 4.953750525377746,
confidence: 0.5,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "match_by_street"
},
place_id: "51f611537d42f11140598d1bc8c4f7534940f00102f9010b58e10100000000c0020492031052756520647520466f6e642041676e79"
},
{
query: {
text: "Chemin du Catty 12 , 1380, OHAIN, Belgium",
parsed: {
housenumber: "12",
street: "chemin du catty",
postcode: "1380",
city: "ohain",
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
name: "Chemin du Catty",
street: "Chemin du Catty",
district: "Ohain",
city: "Lasne",
county: "Nivelles",
state: "Walloon Brabant",
postcode: "1380",
country: "Belgium",
country_code: "be",
lon: 4.4576121,
lat: 50.7089041,
formatted: "Chemin du Catty, 1380 Lasne, Belgium",
address_line1: "Chemin du Catty",
address_line2: "1380 Lasne, Belgium",
result_type: "street",
rank: {
importance: 0.71,
popularity: 5.500666846733872,
confidence: 0.5,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "match_by_street"
},
place_id: "51fa032f4498d41140590ac09a5ebd5a4940f00102f9012b986a0a00000000c0020492030f4368656d696e206475204361747479"
},
{
query: {
text: "CLOS DU DIABLE VERT 21, 1390, GREZ-DOICEAU, Belgium",
parsed: {
housenumber: "21",
street: "clos du diable vert",
postcode: "1390",
city: "grez-doiceau",
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
name: "Clos du Diable Vert",
street: "Clos du Diable Vert",
district: "Grez-Doiceau",
city: "Grez-Doiceau",
county: "Nivelles",
state: "Walloon Brabant",
postcode: "1390",
country: "Belgium",
country_code: "be",
lon: 4.6526583,
lat: 50.7325167,
formatted: "Clos du Diable Vert, 1390 Grez-Doiceau, Belgium",
address_line1: "Clos du Diable Vert",
address_line2: "1390 Grez-Doiceau, Belgium",
result_type: "street",
rank: {
importance: 0.91,
popularity: 5.414427392295443,
confidence: 0.5,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "match_by_street"
},
place_id: "5111da1775529c1240590d23731bc35d4940f00102f90150fb2b2100000000c00204920313436c6f7320647520446961626c652056657274"
},
{
query: {
text: "AV. DES FRERES FLEISCHMAN 30, 1410, WATERLOO, Belgium",
parsed: {
housenumber: "30",
street: "av. des freres fleischman",
postcode: "1410",
city: "waterloo",
country: "belgium",
expected_type: "building"
}
},
country_code: "be",
housenumber: "30",
street: "Avenue Des Frères Fleischman",
country: "Belgium",
county: "Brabant wallon",
datasource: {
sourcename: "openaddresses",
attribution: "© OpenAddresses contributors",
license: "BSD-3-Clause License"
},
postcode: "1410",
state: "Wallonia",
city: "Mont-Saint-Jean",
lon: 4.39486,
lat: 50.68891,
distance: 2944.435410774294,
formatted: "Avenue Des Frères Fleischman 30, 1410 Mont-Saint-Jean, Belgium",
address_line1: "Avenue Des Frères Fleischman 30",
address_line2: "1410 Mont-Saint-Jean, Belgium",
result_type: "building",
rank: {
popularity: 5.859334015840792,
confidence: 1,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "full_match"
},
place_id: "5187fe092e569411405995f1ef332e584940c00203"
},
{
query: {
text: "RUE DE COURT SAINT ETIENNE 4, 1450, CHASTRE, Belgium",
parsed: {
housenumber: "4",
street: "rue de court saint etienne",
postcode: "1450",
city: "chastre",
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
name: "Rue de Court-Saint-Étienne",
street: "Rue de Court-Saint-Étienne",
city: "Villeroux",
county: "Nivelles",
state: "Walloon Brabant",
postcode: "1450",
country: "Belgium",
country_code: "be",
lon: 4.5937177,
lat: 50.6070815,
formatted: "Rue de Court-Saint-Étienne, 1450 Villeroux, Belgium",
address_line1: "Rue de Court-Saint-Étienne",
address_line2: "1450 Villeroux, Belgium",
result_type: "street",
rank: {
importance: 0.91,
popularity: 4.721609545075971,
confidence: 0.475,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "match_by_street"
},
place_id: "51b1396288f75f124059d940bad8b44d4940f00102f90195b79b0100000000c0020492031b52756520646520436f7572742d5361696e742dc3897469656e6e65"
},
{
query: {
text: "RUE OCTAVE LOTIN 8, 1450, CORTIL-NOIRMONT, Belgium",
parsed: {
housenumber: "8",
street: "rue octave lotin",
postcode: "1450",
city: "cortil-noirmont",
country: "belgium",
expected_type: "building"
}
},
country_code: "be",
housenumber: "8",
street: "Rue Octave Lotin",
country: "Belgium",
county: "Brabant wallon",
datasource: {
sourcename: "openaddresses",
attribution: "© OpenAddresses contributors",
license: "BSD-3-Clause License"
},
postcode: "1450",
state: "Wallonia",
city: "Chastre-Villeroux-Blanmont",
lon: 4.63982,
lat: 50.58674,
formatted: "Rue Octave Lotin 8, 1450 Chastre-Villeroux-Blanmont, Belgium",
address_line1: "Rue Octave Lotin 8",
address_line2: "1450 Chastre-Villeroux-Blanmont, Belgium",
result_type: "building",
rank: {
popularity: 4.654949310513228,
confidence: 0.95,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "full_match"
},
place_id: "51904e5df92c8f124059a5a0db4b1a4b4940c00203"
},
{
query: {
text: "Rue de marbais 30 , 1495, Villers-la-Ville, Belgium",
parsed: {
housenumber: "30",
street: "rue de marbais",
postcode: "1495",
city: "villers-la-ville",
country: "belgium",
expected_type: "building"
}
},
country_code: "be",
housenumber: "30",
street: "Rue De Marbais",
country: "Belgium",
county: "Brabant wallon",
datasource: {
sourcename: "openaddresses",
attribution: "© OpenAddresses contributors",
license: "BSD-3-Clause License"
},
postcode: "1495",
state: "Wallonia",
city: "Villers-la-Ville",
lon: 4.53151,
lat: 50.57419,
formatted: "Rue De Marbais 30, 1495 Villers-la-Ville, Belgium",
address_line1: "Rue De Marbais 30",
address_line2: "1495 Villers-la-Ville, Belgium",
result_type: "building",
rank: {
popularity: 4.866562474748265,
confidence: 1,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "full_match"
},
place_id: "51e3fc4d2844201240595ad8d30e7f494940c00203"
},
{
query: {
text: "Aarschotsebaan 43 , 1910, KAMPENHOUT, Belgium",
parsed: {
housenumber: "43",
street: "aarschotsebaan",
postcode: "1910",
city: "kampenhout",
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
housenumber: "43",
street: "Aarschotsebaan",
suburb: "Ruisbeek",
district: "Kampenhout",
city: "Kampenhout",
county: "Halle-Vilvoorde",
state: "Flemish Brabant",
postcode: "1910",
country: "Belgium",
country_code: "be",
lon: 4.575536825293351,
lat: 50.942872699999995,
formatted: "Aarschotsebaan 43, 1910 Kampenhout, Belgium",
address_line1: "Aarschotsebaan 43",
address_line2: "1910 Kampenhout, Belgium",
category: "building",
result_type: "building",
rank: {
importance: 0.21100000000000002,
popularity: 5.197655977800474,
confidence: 1,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "full_match"
},
place_id: "514b1d8986594d1240594665790db0784940f00102f901bcc10e0800000000c00203"
},
{
query: {
text: "Lemmekenstraat 39, 1910, Berg, Belgium",
parsed: {
housenumber: "39",
street: "lemmekenstraat",
postcode: "1910",
city: "berg",
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
housenumber: "39",
street: "Lemmekenstraat",
suburb: "Lemmeken",
city: "Berg",
county: "Halle-Vilvoorde",
state: "Flemish Brabant",
postcode: "1910",
country: "Belgium",
country_code: "be",
lon: 4.5272104,
lat: 50.9229818,
formatted: "Lemmekenstraat 39, 1910 Berg, Belgium",
address_line1: "Lemmekenstraat 39",
address_line2: "1910 Berg, Belgium",
result_type: "building",
rank: {
importance: 0.21100000000000002,
popularity: 5.69438775167817,
confidence: 1,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "full_match"
},
place_id: "51bf71080bdd1b124059d0e6824424764940f00103f90177a8f36100000000c00203"
},
{
query: {
text: "Van Dijcklaan 52, 1910, Kampenhout, Belgium",
parsed: {
housenumber: "52",
street: "van dijcklaan",
postcode: "1910",
city: "kampenhout",
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
housenumber: "52",
street: "Van Dijcklaan",
district: "Kampenhout",
city: "Kampenhout",
county: "Halle-Vilvoorde",
state: "Flemish Brabant",
postcode: "1910",
country: "Belgium",
country_code: "be",
lon: 4.577813321021842,
lat: 50.950993499999996,
formatted: "Van Dijcklaan 52, 1910 Kampenhout, Belgium",
address_line1: "Van Dijcklaan 52",
address_line2: "1910 Kampenhout, Belgium",
category: "building",
result_type: "building",
rank: {
importance: 0.31100000000000005,
popularity: 5.221699695186568,
confidence: 1,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "full_match"
},
place_id: "5187ed934bae4f124059b29aae27ba794940f00102f901223a980900000000c00203"
},
{
query: {
text: "Zeypestraat 78 , 1910, Kampenhout , Belgium",
parsed: {
housenumber: "78",
street: "zeypestraat",
postcode: "1910",
city: "kampenhout",
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
housenumber: "78",
street: "Zeypestraat",
district: "Kampenhout",
city: "Kampenhout",
county: "Halle-Vilvoorde",
state: "Flemish Brabant",
postcode: "1910",
country: "Belgium",
country_code: "be",
lon: 4.555688999999997,
lat: 50.9561985,
formatted: "Zeypestraat 78, 1910 Kampenhout, Belgium",
address_line1: "Zeypestraat 78",
address_line2: "1910 Kampenhout, Belgium",
category: "building",
result_type: "building",
rank: {
importance: 0.21100000000000002,
popularity: 5.242654988369045,
confidence: 1,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "full_match"
},
place_id: "51dcfc86890639124059fcfd62b6647a4940f00102f90166fd7f0800000000c00203"
},
{
query: {
text: "Bergstraat 56, 1910, BERG, Belgium",
parsed: {
housenumber: "56",
street: "bergstraat",
postcode: "1910",
city: "berg",
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
housenumber: "56",
street: "Bergstraat",
city: "Berg",
county: "Halle-Vilvoorde",
state: "Flemish Brabant",
postcode: "1910",
country: "Belgium",
country_code: "be",
lon: 4.540025123686675,
lat: 50.930546699999994,
formatted: "Bergstraat 56, 1910 Berg, Belgium",
address_line1: "Bergstraat 56",
address_line2: "1910 Berg, Belgium",
category: "building.residential",
result_type: "building",
rank: {
importance: 0.21100000000000002,
popularity: 5.68075551758605,
confidence: 1,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "full_match"
},
place_id: "51b0029558fc281240594af37d271c774940f00102f9016f810d0800000000c00203"
},
{
query: {
text: "STATIONSSTRAAT 64 , 1910, KAMPENHOUT, Belgium",
parsed: {
housenumber: "64",
street: "stationsstraat",
postcode: "1910",
city: "kampenhout",
country: "belgium",
expected_type: "building"
}
},
country_code: "be",
housenumber: "64",
street: "Stationsstraat",
country: "Belgium",
county: "Vlaams-Brabant",
datasource: {
sourcename: "openaddresses",
attribution: "© OpenAddresses contributors",
license: "BSD-3-Clause License"
},
postcode: "1910",
state: "Flemish Region",
district: "Kampenhout",
city: "Kampenhout",
lon: 4.5609,
lat: 50.94146,
formatted: "Stationsstraat 64, 1910 Kampenhout, Belgium",
address_line1: "Stationsstraat 64",
address_line2: "1910 Kampenhout, Belgium",
result_type: "building",
rank: {
popularity: 5.276235482137452,
confidence: 1,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "full_match"
},
place_id: "513c4ed1915c3e124059ff3ee3c281784940c00203"
},
{
query: {
text: "Vekestraat 43 , 1910, Kampenhout, Belgium",
parsed: {
housenumber: "43",
street: "vekestraat",
postcode: "1910",
city: "kampenhout",
country: "belgium",
expected_type: "building"
}
},
country_code: "be",
housenumber: "43",
street: "Vekestraat",
country: "Belgium",
county: "Vlaams-Brabant",
datasource: {
sourcename: "openaddresses",
attribution: "© OpenAddresses contributors",
license: "BSD-3-Clause License"
},
state: "Flemish Region",
city: "Kampenhout",
lon: 4.58832,
lat: 50.96099,
postcode: "1910",
formatted: "Vekestraat 43, 1910 Kampenhout, Belgium",
address_line1: "Vekestraat 43",
address_line2: "1910 Kampenhout, Belgium",
result_type: "building",
rank: {
popularity: 5.2971300707994855,
confidence: 1,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "full_match"
},
place_id: "51b554de8e705a1240593be466b8017b4940c00203"
},
{
query: {
text: "Gildenstraat 42 , 3110, Rotselaar, Belgium",
parsed: {
housenumber: "42",
street: "gildenstraat",
postcode: "3110",
city: "rotselaar",
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
housenumber: "42",
street: "Gildenstraat",
district: "Rotselaar",
city: "Rotselaar",
county: "Leuven",
state: "Flemish Brabant",
postcode: "3110",
country: "Belgium",
country_code: "be",
lon: 4.738538480616098,
lat: 50.95529365,
formatted: "Gildenstraat 42, 3110 Rotselaar, Belgium",
address_line1: "Gildenstraat 42",
address_line2: "3110 Rotselaar, Belgium",
category: "building",
result_type: "building",
rank: {
importance: 0.21100000000000002,
popularity: 5.306259141532416,
confidence: 1,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "full_match"
},
place_id: "51ae55746e43f4124059ca69f40f477a4940f00102f9011de7fc0a00000000c00203"
},
{
query: {
text: "Bremstraat 3, 3110, ROTSELAAR, Belgium",
parsed: {
housenumber: "3",
street: "bremstraat",
postcode: "3110",
city: "rotselaar",
country: "belgium",
expected_type: "building"
}
},
country_code: "be",
housenumber: "3",
street: "Bremstraat",
country: "Belgium",
county: "Vlaams-Brabant",
datasource: {
sourcename: "openaddresses",
attribution: "© OpenAddresses contributors",
license: "BSD-3-Clause License"
},
postcode: "3110",
state: "Flemish Region",
district: "Rotselaar",
city: "Wezemaal",
lon: 4.7478,
lat: 50.96164,
formatted: "Bremstraat 3, 3110 Wezemaal, Belgium",
address_line1: "Bremstraat 3",
address_line2: "3110 Wezemaal, Belgium",
result_type: "building",
rank: {
popularity: 5.100000661885513,
confidence: 1,
confidence_city_level: 1,
confidence_street_level: 1,
match_type: "full_match"
},
place_id: "5192cb7f48bffd1240594243ff04177b4940c00203"
}
]

module.exports = testAddresses

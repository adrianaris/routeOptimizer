const matrixExample = [
  [
         0, 1136805, 565632, 101321, 739288, 513518, 1732516, 484624, 932150, 867673, 167831,  153254, 109255, 108926, 107904, 107904,  117238, 152044, 118721, 143145, 219217,  381152, 327900, 180352, 148844, 275590,  248043, 519878, 435139, 277670, 194115,  287010, 187501, 349704, 345151, 397972,  229989, 190549, 233908, 235730, 199332,  216351, 253736, 348042, 349948 ],
  [ 1230349,       0, 1595371, 1238677, 791481, 1121769, 2907467,  849317, 2107101, 1523289, 1054271, 1237238, 1247845, 1250928, 1249905, 1249906, 1201222, 1111783, 1202705, 1227129, 1421691, 1509360, 1424366, 1413073, 1351318, 1538023, 1574537, 1616344, 1606086, 1404533, 1358388, 1489484, 1321108, 1557910, 1617365, 1505341, 1234042, 1194603, 1237962, 1239784, 1203386, 1220405, 1257789, 1444509, 1446414 ],
  [ 562933, 1491666,      0,  569708, 1213114, 468120, 2161386, 860851, 1361020,  459715, 582846,  568269, 578875,  581959,  580936, 580937,  532253, 560773,  533736,  558160, 611289,  596781, 511786,  715411,  683903, 704460,  664777, 703765,  693507,  812729, 729175,  582487, 722561,  778575,  774021, 826842,  296940, 340327,  291999,  292678, 327309,  307503, 280799,  208627,  203553 ],
  [ 144386, 1147171, 574731,      0, 766286, 523884, 1759918, 494990, 959552, 878040, 41437,   12016,  20284,  23368,  22345, 22345,   55939,  62413,  42719,  43143, 246619,  421993, 336999, 207754, 176246, 302992,  275445, 528977, 518719, 304667, 221113,  314412, 214499, 377106, 372553, 425374,  240355, 200916, 244275, 246096, 209699,  226718, 264102, 357141, 359047 ],
  [ 746391,  844150, 1232598,  773776,       0, 1130215, 2223189,  819185, 1422823, 1484370, 584606,  782982,  781710,  563363,  586677, 586677,  836061,  724426,  837544,  861968, 890345, 1052281, 1011437,  682960,  819972, 800827,  837341, 1238702, 1008191,  674419, 628274,  958139,  590994,  820714,  897791, 805853,  846685,  807246,  850605,  852427, 816029,  833048,  870432, 1066866, 1068772 ],
  [ 519185, 1021206, 536148,  527514, 1119561, 0, 2223827, 767297, 1423461,  464066, 540652,  526075, 536682,  539765,  538742, 538743,  490059, 468983,  491542,  515966, 710528,  798197, 713203,  671663,  640155, 766901,  739354, 905181,  894923,  768981, 685427,  778321, 678813,  841015,  836462, 889283,  401965, 448217,  412739,  374202, 457000,  397820, 391512,  517131,  525656 ],
  [ 1725781, 2956532, 2147986, 1753541, 2215874, 2211731,       0, 2182837, 1029671, 2565887, 1866044, 1762747, 1761475, 1761147, 1760124, 1760124, 1815451, 1850258, 1816934, 1841358, 1565994, 1569146, 1650690, 1620697, 1601212, 1513751, 1536591, 1481542, 1514803, 1630960, 1677588, 1597392, 1742154, 1587865, 1527455, 1557067, 1928202, 1888762, 1932121, 1933943, 1897546, 1914564, 1951949, 1930397, 1932303 ],
  [ 520303,  652181, 909909,  528631,  511259, 729397, 2224944,      0, 1424578, 1130917, 344225,  527193, 537799,  540882,  539860, 539860,  491176, 401737,  492659,  517084, 711645,  799314, 714320,  672781,  641272, 768018,  740471, 906299,  896041,  720955, 674810,  779439, 637531,  842132,  837579, 852389,  523997, 484557,  527916,  529738, 493340,  510359, 547743,  734463,  736368 ],
  [ 923000, 2153751, 1345205,  950760, 1413092, 1408950, 1036618, 1380056,       0, 1763105, 1063263,  959966,  958694,  958366,  957343, 957343, 1012670, 1047476, 1014153, 1038577, 763213,  766365,  847909,  817916,  798430, 710970,  733810,  678761,  712022,  828179, 874807,  794611,  939373,  785084,  724674, 754286, 1125421, 1085981, 1129340, 1131162, 1094764, 1111783, 1149168, 1127616, 1129521 ],
  [ 875515, 1424354,  460606,  883844, 1475891, 402401, 2580156, 1123627, 1779790,       0, 896982,  882405,  893011,  896095,  895072, 895072,  846389,  825312,  847872,  872296, 1066857, 1154527, 1069532, 1027993,  996485, 1123230, 1095684, 1261511, 1251253, 1125310, 1041756, 1134651, 1035142, 1197345, 1192791, 1245612,  758295,  804546,  769068,  730532, 813330,  754150,  747842,  873460,  881986 ],
  [ 154501,  965080, 584846,   57128, 586018, 534000, 1859143, 312899, 1058777, 888155, 0,   34947,  35208,   46371,  29031, 29031,   66054,  45198,   67537,  44602, 345843,  432109, 347114,  306979, 275471, 402217,  374670, 539093,  528835, 404297, 320742,  413637, 314128,  476331, 471778, 524599,  250471, 211031,  254390, 256212, 219814,  236833, 274217,  367257, 369163 ],
  [ 91651, 1151063, 578622,  14627, 775128, 527776, 1768760, 498882, 968394, 881931, 46577,       0,  15908,  25554,  24531, 24532,   59830,  66304,  46610,  47034, 255461,  425885, 340890, 216597, 185089, 311835,  284288, 532869, 522611, 313510, 229955,  323255, 223341, 385949, 381396, 434217,  244246, 204807, 248166, 249988, 213590,  230609, 267993, 361033, 362938 ],
  [ 158723, 1161509, 589068,  19931, 771504, 538222, 1765136, 509328, 964771, 892377, 38627,   17144,      0,  11103,  10080, 10081,   70276,  76750,  57056,  57480, 251837,  436331, 351336, 212973, 181465, 308211,  280664, 543315, 467760, 309886, 226331,  319631, 219717, 382325, 377772, 430593,  254693, 215253, 258612, 260434, 224036,  241055, 278439, 371479, 373385 ],
  [ 161511,  999614, 591856,  22129, 771206, 541009, 1764839, 347433, 964472, 895165, 36439,   24801,  14164,      0,   4515, 4515,   73064,  79538,  59844,  60268, 251539,  413475, 372631, 212675, 181167, 307913,  280366, 546102, 467462, 309588, 226033,  319333, 219419, 382027, 377474, 430295,  257480, 218041, 261400, 263222, 226824,  243843, 281227, 374267, 376172 ],
  [
    160778, 1163563, 591123,  21396, 770473,
    540276, 1764105, 511382, 963739, 894432,
     36821,   18734,   8097,   6751,      0,
         0,   72330,  78805,  59111,  59535,
    250806,  412742, 371898, 211942, 180434,
    307179,  279633, 545369, 466729, 308855,
    225300,  318600, 218686, 381294, 376740,
    429562,  256747, 217307, 260666, 262488,
    226091,  243110, 280494, 373533, 375439
  ],
  [
    160778, 1163564, 591123,  21397, 770473,
    540277, 1764106, 511383, 963740, 894432,
     36821,   18733,   8096,   6751,      0,
         0,   72331,  78805,  59111,  59535,
    250807,  412742, 371899, 211942, 180434,
    307180,  279633, 545370, 466729, 308855,
    225301,  318600, 218687, 381294, 376741,
    429562,  256747, 217308, 260667, 262489,
    226091,  243110, 280494, 373534, 375439
  ],
  [
    134030, 1136816, 564375,   53855, 845444,
    513529, 1838671, 484635, 1038305, 867684,
     64138,   52416,  63023,   66106,  65083,
     65084,       0,  40895,   14087,  23466,
    325372,  411637, 326643,  286508, 255000,
    381745,  354199, 518622,  508364, 383825,
    300271,  393166, 293657,  455860, 451306,
    504127,  229999, 190560,  233919, 235741,
    199343,  216362, 253746,  346786, 348691
  ],
  [
    152267, 1100634, 579730,   70655, 800717,
    477347, 1856908, 448453, 1056542, 831503,
     50619,   69217,  79823,   82907,  81884,
     81884,   37600,      0,   31288,  26786,
    343609,  438522, 353527,  304745, 273236,
    399982,  372436, 545506,  535248, 402062,
    318508,  411403, 311894,  474096, 469543,
    522364,  193818, 154378,  197737, 199559,
    163161,  180180, 217565,  373670, 375576
  ],
  [
    115691, 1118477, 546036,   60299, 827105,
    495190, 1820333, 466296, 1019966, 849345,
     60823,   58860,  69466,   72550,  71527,
     71527,   11026,  27527,       0,  10041,
    307033,  393299, 308304,  268169, 236661,
    363407,  335860, 500283,  490025, 365487,
    281932,  374827, 275318,  437521, 432968,
    485789,  211661, 172221,  215580, 217402,
    181004,  198023, 235407,  328447, 330353
  ],
  [
    135046, 1098671, 565391,   48623, 798754,
    475384, 1839687, 446490, 1039321, 829540,
     61762,   47185,  57791,   60874,  59852,
     59852,   20400,  19558,   10092,      0,
    326388,  412653, 327658,  287524, 256015,
    382761,  355215, 519637,  509379, 384841,
    301287,  394182, 294673,  456875, 452322,
    505143,  191855, 152415,  195774, 197596,
    161199,  178217, 215602,  347801, 349707
  ],
  [
    198937, 1308175, 613250, 226698,  907376,
    684888, 1580330, 655994, 779964, 1039043,
    339200,  235903, 234632, 234303,  233280,
    233281,  288607, 323414, 290090,  314514,
         0,  156798, 115954,  95099,   74368,
    123404,   84639, 408446, 211831,  146232,
    150906,   43460, 355589, 197519,  192965,
    245786,  401358, 361919, 405278,  407100,
    370702,  387721, 425105, 395661,  397567
  ],
  [
    373674, 1412301, 595007, 401435, 1011352,
    789014, 1575159, 760120, 774793, 1143169,
    441812,  427235, 409369, 409040,  408017,
    408018,  391219, 419739, 392702,  417126,
    158730,       0,  88957, 268591,  249105,
    248269,  208585, 195223,  98806,  318333,
    325482,  129928, 476673, 322383,  317830,
    370651,  380985, 398772, 442132,  443953,
    407556,  375351, 382167, 377417,  379323
  ],
  [
    333013, 1328947, 511652, 345320,  970691,
    705660, 1664534, 676766, 864168, 1059815,
    358458,  343881, 354487, 357571,  356548,
    356548,  307865, 336385, 309348,  333772,
    114437,   88957,      0, 227930,  208444,
    207608,  167924, 240408, 143990,  277672,
    284821,   85635, 436012, 281722,  277169,
    329990,  297630, 315418, 358777,  360599,
    324201,  291997, 298812, 294063,  295969
  ],
  [
    183014, 1292252, 721079, 210775,  675626,
    668965, 1626760, 640071, 826394, 1023120,
    323277,  219980, 218709, 218380,  217357,
    217358,  272684, 307491, 274167,  298592,
    102251,  275397, 234553,      0,   37398,
    169834,  142288, 454876, 329384,  104851,
     64389,  181255, 118887, 243948,  239395,
    206440,  385436, 345996, 389355,  391177,
    354779,  371798, 409182, 503489,  505395
  ],
  [
    149785, 1259023, 687850, 177546, 858224,
    635736, 1606280, 606842, 805914, 989891,
    290048,  186751, 185480, 185151, 184128,
    184129,  239455, 274262, 240938, 265363,
     92981,  254917, 214073,  35871,      0,
    149354,  121808, 434396, 308904, 131604,
     79991,  160775, 134489, 223469, 218915,
    271736,  352207, 312767, 356126, 357948,
    321550,  338569, 375953, 470260, 472166
  ],
  [
    253074, 1362311, 675279, 280834,  781181,
    739024, 1534667, 710130, 734301, 1093180,
    393337,  290040, 288768, 288440,  287417,
    287417,  342744, 377551, 344227,  368651,
    106859,  218827, 177983, 147990,  128505,
         0,   39016, 362783, 237291,  124303,
    288367,  124685, 246502,  92213,  126890,
    140481,  455495, 416055, 459414,  461236,
    424839,  441857, 479242, 457690,  459596
  ],
  [
    247446, 1356684, 664864, 275207,  805566,
    733397, 1536164, 704503, 735798, 1087552,
    387710,  284412, 283141, 282812,  281789,
    281790,  337116, 371923, 338599,  363024,
     87660,  208412, 167568, 142363,  122877,
     34918,       0, 364280, 238787,  118657,
    153294,  114270, 270887, 116598,  133033,
    164865,  449868, 410428, 453787,  455609,
    419211,  436230, 473614, 447275,  449180
  ],
  [
    528371, 1518772, 701478, 535145, 1239785,
    895485, 1490876, 866591, 690510, 1249640,
    548283,  533706, 544313, 547396,  546373,
    546374,  497690, 526210, 499173,  523597,
    313007,  198050, 243234, 450394,  430909,
    343448,  366288,      0, 129562,  460657,
    694612,  284205, 687998, 417562,  353965,
    465830,  487456, 505243, 548603,  550424,
    514027,  481822, 488638, 483888,  485794
  ],
  [
    432781, 1509652, 692358, 460541,  983833,
    886365, 1520451, 857471, 720085, 1240521,
    539164,  524587, 468475, 468146,  467124,
    467124,  488570, 517091, 490053,  514478,
    272994,   98806, 159631, 327697,  308211,
    220751,  243591, 126795,      0,  337960,
    384588,  200602, 449154, 294865,  235954,
    343133,  478336, 496124, 539483,  541305,
    504907,  472703, 479518, 474769,  476674
  ],
  [
    276002, 1511780, 814066, 303387,  694924,
    761952, 1726094, 708357, 925728, 1116108,
    416265,  312592, 311321, 310992,  309969,
    309970,  365672, 400479, 367155,  391579,
    178551,  323109, 282265, 108083,  139530,
    221353,  105816, 554209, 428717,       0,
     93722,  228967, 119312, 148799,  318317,
    160122,  478423, 438983, 482342,  484164,
    447767,  464785, 502170, 596477,  598382
  ],
  [
    209753, 1284934, 747817, 237138,  619319,
    695704, 1682699, 632753, 882333, 1049859,
    350016,  246344, 245072, 244743,  243721,
    243721,  299423, 334230, 300906,  325330,
    159134,  331336, 290492,  63377,   80149,
    225774,  198227, 510815, 385323,   93795,
         0,  237194,  62580, 307557,  295335,
    219637,  412174, 372735, 416094,  417916,
    381518,  398537, 435921, 530228,  532134
  ],
  [
    259038, 1368276, 583674, 286799,  896715,
    744989, 1590559, 716095, 790193, 1099144,
    399301,  296004, 294733, 294404,  293381,
    293382,  348708, 383515, 350191,  374615,
     39451,  127222,  86378, 153954,  134469,
    133633,   93949, 278673, 182255,  203697,
    210845,       0, 362036, 207747,  203194,
    256015,  461459, 422020, 465379,  467201,
    430803,  447822, 485206, 366085,  367991
  ],
  [
    195830, 1237570, 733894, 223215,  571955,
    681780, 1751484, 585389, 951118, 1035936,
    336093,  232420, 231149, 230820,  229797,
    229798,  285500, 320307, 286983,  311407,
    339784,  501719, 460876, 119403,  269411,
    246744,  283258, 688141, 454108,  120335,
     64717,  407577,      0, 266631,  343707,
    251769,  398251, 358811, 402170,  403992,
    367595,  384613, 421998, 516305,  518210
  ],
  [
    351437, 1612606, 773643, 379198,  795750,
    837387, 1588532, 809183, 788166, 1191543,
    491700,  388403, 387132, 386803,  385780,
    385781,  441107, 475914, 442590,  467014,
    191651,  317190, 276346, 246353,  226868,
     83791,  120305, 416647, 291155,  149505,
    208126,  223048, 261071,      0,   52017,
     87551,  553858, 514419, 557778,  559600,
    523202,  540221, 577605, 556053,  557959
  ],
  [
    351974, 1661571, 774180, 379735,  876256,
    837925, 1526982, 809031, 726616, 1192080,
    492237,  388940, 387669, 387340,  386317,
    386318,  441644, 476451, 443127,  467551,
    192188,  317727, 276883, 246890,  227405,
    113174,  137278, 351871, 262703,  230383,
    383442,  223585, 341577,  52085,       0,
    105741,  554395, 514956, 558315,  560137,
    523739,  540758, 578142, 556590,  558496
  ],
  [
    402161, 1535092, 824366, 429921,  784343,
    888111, 1639255, 797777, 838889, 1242266,
    542424,  439127, 437855, 437527,  436504,
    436504,  491831, 526638, 493314,  517738,
    242374,  367914, 327070, 209739,  277591,
    134515,  171029, 467371, 341879,  159625,
    219360,  273772, 197566, 100086,  105741,
         0,  604582, 565142, 608501,  610323,
    573926,  590944, 628329, 606777,  608683
  ],
  [
    243704, 1143997, 286319,  252033, 844080,
    478191, 1948345, 491816, 1147979, 832347,
    265171,  250594, 261200,  264284, 263261,
    263261,  214578, 193501,  216061, 240485,
    435046,  378769, 293774,  396182, 364674,
    491419,  463873, 485753,  475495, 493499,
    409945,  364476, 403331,  565534, 560980,
    613802,       0,  50701,   16962,  27763,
     37683,   12573,  30963,  147581, 156106
  ],
  [
    204273, 1104566, 329812,  212602, 804649,
    438761, 1908914, 452385, 1108549, 792916,
    225740,  211163, 221769,  224853, 223830,
    223831,  175147, 154071,  176630, 201054,
    395615,  398371, 313377,  356751, 325243,
    451988,  424442, 505355,  495097, 454069,
    370514,  463409, 363900,  526103, 521550,
    574371,   50710,      0,   54630,  56451,
     20054,   37073,  74457,  191074, 199600
  ],
  [
    247611, 1147904, 281249,  255940, 847987,
    482099, 1952253, 495723, 1151886, 836254,
    269078,  254501, 265107,  268191, 267168,
    267169,  218485, 197409,  219968, 244392,
    438953,  397324, 312329,  400089, 368581,
    495327,  467780, 504308,  494050, 497407,
    413852,  506747, 407238,  569441, 564888,
    617709,   16962,  54609,       0,  31671,
     41591,   21784,  25893,  142511, 151036
  ],
  [
    249445, 1149738, 282046,  257774, 849821,
    387035, 1954087, 497557, 1153721, 741191,
    270912,  256335, 266942,  270025, 269002,
    269003,  220319, 199243,  221802, 246226,
    440787,  389814, 304819,  401923, 370415,
    497161,  469614, 496798,  486540, 499241,
    415686,  508581, 409072,  571275, 566722,
    619543,   27763,  56443,   25293,      0,
     43425,   23618,  51510,  179480, 188005
  ],
  [
    213179, 1113471, 316684,  221507, 813554,
    447666, 1917820, 461290, 1117454, 801821,
    234646,  220069, 230675,  233758, 232736,
    232736,  184052, 162976,  185535, 209960,
    404521,  407277, 322282,  365657, 334148,
    460894,  433347, 514261,  504003, 462974,
    379420,  472315, 372806,  535008, 530455,
    583276,   37582,  20176,   41501,  43323,
         0,   23944,  61328,  177946, 186471
  ],
  [
    231182, 1131475, 296979,  239511, 831558,
    465670, 1935824, 479294, 1135458, 819825,
    252649,  238072, 248679,  251762, 250739,
    250740,  202056, 180980,  203539, 227963,
    422524,  373136, 288141,  383660, 352152,
    478898,  451351, 480120,  469862, 480978,
    397423,  490318, 390809,  553012, 548459,
    601280,   12602,  38180,   21796,  23618,
     25162,       0,  41624,  158241, 166767
  ],
  [
    267602, 1167895, 282407,  275930, 867978,
    387397, 1972243, 515714, 1171877, 741552,
    289069,  274492, 285098,  288182, 287159,
    287159,  238476, 217399,  239959, 264383,
    458944,  392840, 307846,  420080, 388572,
    515317,  487771, 499824,  489566, 517397,
    433843,  378547, 427229,  589432, 584878,
    637699,   31212,  74599,   26270,  53240,
     61581,   41775,      0,  133180, 141705
  ],
  [
    351104, 1341505, 199287,  357878, 1062517,
    718218, 1949556, 689324, 1149190, 1072373,
    371016,  356439, 367045,  370129,  369106,
    369107,  320423, 348943,  321906,  346330,
    399460,  384951, 299956,  503581,  472073,
    492630,  452947, 491935,  481677,  600899,
    517345,  370657, 510731,  566745,  562191,
    615012,  170307, 200891,  152563,  177151,
    187873,  168067, 141363,       0,   13588
  ],
  [
    353009, 1343411, 198383,  359783, 1064423,
    720124, 1951462, 691230, 1151096, 1074279,
    372922,  358345, 368951,  372035,  371012,
    371012,  322329, 350849,  323812,  348236,
    401365,  386856, 301862,  505487,  473979,
    494536,  454852, 493840,  483582,  602805,
    519250,  372563, 512636,  568650,  564097,
    616918,  178833, 209417,  161088,  185677,
    196399,  176592, 149888,   12776,       0
  ]
]
//{
//code: "Ok",
//distances: 
//  [
//[ 0, 1136805, 565632, 101321, 739288, 513518, 1732516, 484624, 932150, 867673 ],
//[ 1230349, 0, 1595371, 1238677, 791481, 1121769, 2907467, 849317, 2107101, 1523289 ],
//[ 562933, 1491666, 0, 569708, 1213114, 468120, 2161386, 860851, 1361020, 459715 ],
//[ 144386, 1147171, 574731, 0, 766286, 523884, 1759918, 494990, 959552, 878040 ],
//[ 746391, 844150, 1232598, 773776, 0, 1130215, 2223189, 819185, 1422823, 1484370 ],
//[ 519185, 1021206, 536148, 527514, 1119561, 0, 2223827, 767297, 1423461, 464066 ],
//[ 1725781, 2956532, 2147986, 1753541, 2215874, 2211731, 0, 2182837, 1029671, 2565887 ],
//[ 520303, 652181, 909909, 528631, 511259, 729397, 2224944, 0, 1424578, 1130917 ],
//[ 923000, 2153751, 1345205, 950760, 1413092, 1408950, 1036618, 1380056, 0, 1763105 ],
//[ 875515, 1424354, 460606, 883844, 1475891, 402401, 2580156, 1123627, 1779790, 0 ]
//],
//destinations: [
//{
//distance: 20.582132242,
//name: "Brusselsesteenweg",
//location: [
//4.496887,
//50.822213
//]
//},
//{
//distance: 0,
//name: "Beiaardstraat",
//location: [
//3.221062,
//50.879856
//]
//},
//{
//distance: 39.95086717,
//name: "Vaartdijkstraat",
//location: [
//4.804017,
//51.06645
//]
//},
//{
//distance: 11.309273276,
//name: "",
//location: [
//4.40556,
//50.828928
//]
//},
//{
//distance: 0,
//name: "Rue Robier",
//location: [
//3.787856,
//50.664448
//]
//},
//{
//distance: 6.017809876,
//name: "Henri Van Heurckstraat",
//location: [
//4.407289,
//51.213881
//]
//},
//{
//distance: 26.76501145,
//name: "Rue de Habay",
//location: [
//5.667426,
//49.670504
//]
//},
//{
//distance: 0,
//name: "",
//location: [
//3.967823,
//50.926322
//]
//},
//{
//distance: 407.584574411,
//name: "",
//location: [
//5.277749,
//50.305865
//]
//},
//{
//distance: 0,
//name: "'s Boschstraat",
//location: [
//4.763467,
//51.403895
//]
//}
//],
//sources: [
//{
//distance: 20.582132242,
//name: "Brusselsesteenweg",
//location: [
//4.496887,
//50.822213
//]
//},
//{
//distance: 0,
//name: "Beiaardstraat",
//location: [
//3.221062,
//50.879856
//]
//},
//{
//distance: 39.95086717,
//name: "Vaartdijkstraat",
//location: [
//4.804017,
//51.06645
//]
//},
//{
//distance: 11.309273276,
//name: "",
//location: [
//4.40556,
//50.828928
//]
//},
//{
//distance: 0,
//name: "Rue Robier",
//location: [
//3.787856,
//50.664448
//]
//},
//{
//distance: 6.017809876,
//name: "Henri Van Heurckstraat",
//location: [
//4.407289,
//51.213881
//]
//},
//{
//distance: 26.76501145,
//name: "Rue de Habay",
//location: [
//5.667426,
//49.670504
//]
//},
//{
//distance: 0,
//name: "",
//location: [
//3.967823,
//50.926322
//]
//},
//{
//distance: 407.584574411,
//name: "",
//location: [
//5.277749,
//50.305865
//]
//},
//{
//distance: 0,
//name: "'s Boschstraat",
//location: [
//4.763467,
//51.403895
//]
//}
//]
//}

module.exports = matrixExample

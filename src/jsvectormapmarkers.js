function getMarkerLatLng(country) {
    
    //validate input var is of type string
    if (typeof country !== 'string') {
        return [];
    }
    
    //replace various characters and any accents from string to normalize it, trim to remove leading whitespace
    country = country.toLowerCase().replace('&', 'and').replace('st.', 'saint').replace('u.s.', 'us').trim();
    country = country.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    var markerCoords=[];
    
    //iterate over all cases of switch statment, return lat long coords of matching country/jurisdiction
    switch(country) {

        case "aland": case "aland islands": case "ala": case "ax":
            markerCoords = [60.1785, 19.9156]           
        break;
        case "american samoa": case "asm": case "as":
            markerCoords = [14.2710, 170.1322]           
        break;
        case "anguilla": case "aia": case "ai":
            markerCoords = [18.2206, -63.0686]           
        break;
        case "antigua and barbuda": case "atg": case "ag":
            markerCoords = [17.0608, -61.7964];
        break;
        case "andorra": case "and": case "ad":
            markerCoords = [42.5063, 1.5218];
        break;
        case "aruba": case "abw": case "aw":
            markerCoords = [12.5211, -69.9683]           
        break;
        case "ascension island": case "asc": case "ac":
            markerCoords = [-7.9683, -14.3897]           
        break;
        case "barbados": case "brb": case "bb":
            markerCoords = [13.1939, -59.5432]
        break;
        case "bermuda": case "bmu": case "bm":
            markerCoords = [32.3078, -64.7505]           
        break;
        case "bahamas": case "bhs": case "bs":
            markerCoords = [25.0343, -77.3963];
        break;
        case "bahrain": case "bhr": case "bh":
            markerCoords = [26.0667, 50.5577];
        break;
        case "bonaire, saint eustatius and saba": case "bes": case "bq": case "caribbean netherlands":
            markerCoords = [12.2019, -68.2624]           
        break;
        case "bouvet island": case "bvt": case "bv":
            markerCoords = [-54.4208, 3.3464]           
        break;
        case "british indian ocean territory": case "iot": case "io":
            markerCoords = [-6.3432, 71.8765]           
        break;
        case "british virgin islands": case "virgin islands, british": case "vgb": case "vg":
            markerCoords = [18.4207, -64.6400]           
        break;
        case "brunei": case "brunei darussalam": case "brn": case "bn":
            markerCoords = [4.5353, 114.7277];
        break;
        case "canary islands": case "ic":
            markerCoords = [28.2916, -16.6291]           
        break;
        case "cape verde": case "cabo verde": case "cpv": case "cv":
            markerCoords = [16.5388, -23.0418];
        break;
        case "cayman islands": case "cym": case "ky":
            markerCoords = [19.313299, -81.254601];           
        break;
        case "ceuta, melilla": case "ea":
            markerCoords = [35.292277, -2.938097];
        break;
        case "christmas island": case "cxr": case "cx":
            markerCoords = [-10.4475, 105.6904]           
        break;
        case "clipperton island": case "cpt": case "cp":
            markerCoords = [10.3021, -109.2177]           
        break;
        case "cocos (keeling) islands": case "cocos islands": case "cck": case "cc":
            markerCoords = [-12.1642, 96.8710]           
        break;
        case "comoros": case "komori": case "com": case "km": 
            markerCoords = [-11.6455, 43.3333];
        break;
        case "cook islands": case "cok": case "ck":
            markerCoords = [-21.2367, -159.7777]           
        break;
        case "curacao": case "cuw": case "cw":
            markerCoords = [12.1696, -68.9900]           
        break;
        case "cyprus": case "cyp": case "cy":
            markerCoords = [35.1264, 33.4299]           
        break;
        case "diego garcia": case "dga": case "dg":
            markerCoords = [-7.3195, 72.4229]           
        break;
        case "dominica": case "dma": case "dm":
            markerCoords = [15.4150, -61.3710]           
        break;
        case "dominican republic": case "dom": case "do":
            markerCoords = [18.7357, -70.1627]           
        break;
        case "east timor": case "timor-leste": case "tls": case "tp":
            markerCoords = [-8.8742, 125.7275]           
        break;
        case "easter island":
            markerCoords = [-27.1127, -109.3497]           
        break;
        case "falkland islands": case "falkland islands (malvinas)": case "flk": case "fk":
            markerCoords = [-51.7963, -59.5236]           
        break;
        case "faroe islands": case "fro": case "fo":
            markerCoords = [61.8926, -6.9118]           
        break;
        case "fiji": case "fji": case "fj":
            markerCoords = [-17.7134, 178.0650]           
        break;
        case "french guiana": case "guf": case "gf":
            markerCoords = [3.9339, -53.1258]           
        break;
        case "french polynesia": case "pyf": case "pf":
            markerCoords = [-17.6797, -149.4068]           
        break;
        case "french southern territories": case "atf": case "tf":
            markerCoords = [-49.2804, 69.3486]           
        break;
        case "gibraltar": case "gib": case "gi":
            markerCoords = [36.1408, -5.3536]           
        break;
        case "grenada": case "grd": case "gd":
            markerCoords = [12.1165, -61.6790]           
        break;
        case "guadeloupe": case "glp": case "gp":
            markerCoords = [16.2650, -61.5510]           
        break;
        case "guam": case "gum": case "gu":
            markerCoords = [13.4443, 144.7937]           
        break;
        case "guernsey": case "ggy": case "gg":
            markerCoords = [49.44, -2.58];           
        break;
        case "haiti": case "hti": case "ht":
            markerCoords = [18.9712, -72.2852]           
        break;
        case "heard island and mcdonald islands": case "hmd": case "hm":
            markerCoords = [-53.0818, 73.5042]           
        break;
        case "hong kong": case "hkg": case "hk":
            markerCoords = [22.3193, 114.1694];           
        break;
        case "isle of man": case "imn": case "im":
            markerCoords = [54.2361, -4.5481]           
        break;
        case "jersey": case "jey": case "je":
            markerCoords = [49.21, -2.13];         
        break;
        case "jamaica": case "jam": case "jm":
            markerCoords = [18.1096, -77.2975]           
        break;
        case "kiribati": case "kir": case "ki":
            markerCoords = [-3.3704, -168.7340]           
        break;
        case "liechtenstein": case "lie": case "li":
            markerCoords = [47.1660, 9.5554]           
        break;
        case "luxembourg": case "lux": case "lu":
            markerCoords = [49.8153, 6.1296]           
        break;
        case "macau": case "macao": case "mac": case "mo":
            markerCoords = [22.1987, 113.5439]           
        break;
        case "maldives": case "mdv": case "mv":
            markerCoords = [3.2028, 73.2207]           
        break;
        case "malta": case "mlt": case "mt":
            markerCoords = [35.9375, 14.3754]           
        break;
        case "marshall islands": case "mhl": case "mh":
            markerCoords = [7.1315, 171.1845]           
        break;
        case "martinique": case "mtq": case "mq":
            markerCoords = [14.6415, -61.0242]           
        break;
        case "mauritius": case "mus": case "mu":
            markerCoords = [-20.3484, 57.5522]           
        break;
        case "mayotte": case "myt": case "yt":
            markerCoords = [-12.8275, 45.1662]           
        break;
        case "micronesia": case "fsm": case "fm":
            markerCoords = [7.4256, 150.5508]           
        break;
        case "monaco": case "mco": case "mc":
            markerCoords = [43.73, 7.42];           
        break;
        case "montserrat": case "msr": case  "ms":
            markerCoords = [16.7425, -62.1874]           
        break;
        case "nauru": case "nru": case "nr":
            markerCoords = [-0.5228, 166.9315]           
        break;
        case "new caledonia": case "ncl": case "nc":
            markerCoords = [-20.9043, 165.6180]           
        break;
        case "netherlands antilles": case "ant": case "an":
            markerCoords = [12.1224, -68.8824]           
        break;
        case "niue": case "niu": case "nu":
            markerCoords = [-19.0544, -169.8672]           
        break;
        case "norfolk island": case "nfk": case "nf":
            markerCoords = [-29.0408, 167.9547]           
        break;
        case "northern mariana islands": case "mnp": case "mp":
            markerCoords = [15.0979, 145.6739]           
        break; 
        case "palau": case "plw": case "pw":
            markerCoords = [7.5150, 134.5825]           
        break;
        case "palestine": case "pse": case "ps":
            markerCoords = [31.9522, 35.2332]           
        break;
        case "pitcairn": case "pitcairn, henderson, ducie and oeno islands": case "pcn": case "pn":
            markerCoords = [-24.3768, -128.3242]           
        break;
        case "puerto rico": case "pri": case "pr":
            markerCoords = [18.2208, -66.5901]           
        break;
        case "qatar": case "qat": case "qa":
            markerCoords = [25.3548, 51.1839]           
        break;
        case "reunion": case "reunion island": case "reu": case "re":
            markerCoords = [-21.1151, 55.5364]           
        break;
        case "saint barthelemy": case "blm": case "bl":
            markerCoords = [17.9000, -62.8333]           
        break;
        case "saint helena, ascension and tristan da cunha": case "shn": case "sh":
            markerCoords = [-15.9583, -5.7020]           
        break;
        case "saint kitts and nevis": case "kna": case "kn":
            markerCoords = [17.3578, -62.7830]           
        break;
        case "saint lucia": case "lca": case "lc":
            markerCoords = [13.9094, -60.9789]           
        break;
        case "saint martin": case "saint martin (french part)": case "maf": case "mf":
            markerCoords = [18.0708, -63.0501]           
        break;
        case "saint pierre and miquelon": case "spm": case "pm":
            markerCoords = [46.8852, -56.3159]           
        break;
        case "saint vincent and the grenadines": case "vct": case "vc":
            markerCoords = [12.9843, -61.2872]           
        break;
        case "samoa": case "wsm": case "ws":
            markerCoords = [-13.7590, -172.1046]           
        break;
        case "san marino": case "smr": case "sm":
            markerCoords = [43.9424, 12.4578]           
        break;
        case "sao tome and principe": case "stp": case "st":
            markerCoords = [0.1864, 6.6131]           
        break;
        case "seychelles": case "syc": case "sc":
            markerCoords = [-4.6796, 55.4920]           
        break;
        case "sint maarten": case "sint maarten (dutch part)": case "sxm": case "sx":
            markerCoords = [18.0425, -63.0548]           
        break;
        case "singapore": case "sgp": case "sg":
            markerCoords = [1.35, 103.82];           
        break;
        case "solomon islands": case "slb": case "sb":
            markerCoords = [-9.6457, 160.1562]           
        break;
        case "south georgia and the south sandwich islands": case "sgs": case "gs":
            markerCoords = [-54.4296, -36.5879]           
        break;
        case "svalbard": case "svalbard and jan mayen": case "sjm": case "sj":
            markerCoords = [77.8750, 20.9752]           
        break;
        case "tokelau": case "tkl": case "tk":
            markerCoords = [-9.2002, -171.8484]           
        break;
        case "tonga": case "ton": case "to":
            markerCoords = [-21.1790, -175.1982]           
        break;
        case "trinidad and tobago": case "tto": case "tt":
            markerCoords = [10.6918, -61.2225];           
        break;
        case "tristan da cunha": case "ta": case "taa":
            markerCoords = [-37.1052, -12.2777]
        break;
        case "turks and caicos islands": case "tca": case "tc":
            markerCoords = [21.6940, -71.7979]           
        break;
        case "tuvalu": case "tuv": case "tv":
            markerCoords = [-7.1095, 177.6493]           
        break;
        case "us minor outlying islands": case "united states minor outlying islands": case "umi": case "um":
            markerCoords = [19.2823, 166.6470]           
        break;
        case "us virgin islands": case "united states virgin islands": case "virgin islands, us": case "vir": case "vi":
            markerCoords = [18.3358, -64.8963]           
        break;
        case "vanuatu": case "vut": case "vu":
            markerCoords = [-15.3767, 166.9592]           
        break;
        case "vatican city": case "holy see": case "vat": case "va":
            markerCoords = [41.9029, 12.4534]           
        break;
        case "wallis and futuna": case "wlf": case "wf":
            markerCoords = [-14.2938, -178.1165]           
        break;
        case "zanzibar":
            markerCoords = [-6.1357, 39.3621];           
        break;    
        default:    //if no match, return empty array            
            markerCoords = [];
}

    return markerCoords;

}

var allMarkers = {};
var allMarkerNames = [];
var allMarkerISOAlpha2 = [];
var allMarkerISOAlpha3 = [];

function getAllMarkers() {
     /**
     * 
     *
     * @param none 
     */

    allMarkers = [
        {"name": "Aland Islands", "alpha2": "AX", "alpha3": "ALA"},
        {"name": "American Samoa", "alpha2": "AS", "alpha3": "ASM"},
        {"name": "Anguilla", "alpha2": "AI", "alpha3": "AIA"},
        {"name": "Antigua and Barbuda", "alpha2": "AG", "alpha3": "ATG"},
        {"name": "Andorra", "alpha2": "AD", "alpha3": "AND"},
        {"name": "Aruba", "alpha2": "AW", "alpha3": "ABW"},
        {"name": "Ascension Island", "alpha2": "AC", "alpha3": "ASC"},
        {"name": "Barbados", "alpha2": "BB", "alpha3": "BRB"},
        {"name": "Bahamas", "alpha2": "BS", "alpha3": "BHS"},
        {"name": "Bahrain", "alpha2": "BH", "alpha3": "BHR"},
        {"name": "Bonaire, Saint Eustatius and Saba", "alpha2": "BQ", "alpha3": "BES"},
        {"name": "Bouvet Island", "alpha2": "BV", "alpha3": "BVT"},
        {"name": "British Indian Ocean Territory", "alpha2": "IO", "alpha3": "IOT"},
        {"name": "British Virgin Islands", "alpha2": "VG", "alpha3": "VGB"},
        {"name": "Brunei", "alpha2": "BN", "alpha3": "BRN"},
        {"name": "Canary Islands", "alpha2": "IC", "alpha3": ""},
        {"name": "Cape Verde", "alpha2": "CV", "alpha3": "CPV"},
        {"name": "Cayman Islands", "alpha2": "KY", "alpha3": "CYM"},
        {"name": "Ceuta, Melilla", "alpha2": "EA", "alpha3": ""},
        {"name": "Christmas Island", "alpha2": "CX", "alpha3": "CXR"},
        {"name": "Clipperton Island", "alpha2": "CP", "alpha3": "CPT"},
        {"name": "Cocos Islands", "alpha2": "CC", "alpha3": "CCK"},
        {"name": "Comoros", "alpha2": "KM", "alpha3": "COM"},
        {"name": "Cook Islands", "alpha2": "CK", "alpha3": "COK"},
        {"name": "Curacao", "alpha2": "CW", "alpha3": "CUW"},
        {"name": "Cyprus", "alpha2": "CY", "alpha3": "CYP"},
        {"name": "Diego Garcia", "alpha2": "DG", "alpha3": "DGA"},
        {"name": "Dominica", "alpha2": "DM", "alpha3": "DMA"},
        {"name": "Dominican Republic", "alpha2": "DO", "alpha3": "DOM"},
        {"name": "Falkland Islands", "alpha2": "FK", "alpha3": "FLK"},
        {"name": "Faroe Islands", "alpha2": "FO", "alpha3": "FRO"},
        {"name": "Fiji", "alpha2": "FJ", "alpha3": "FJI"},
        {"name": "French Guiana", "alpha2": "GF", "alpha3": "GUF"},
        {"name": "French Polynesia", "alpha2": "PF", "alpha3": "PYF"},
        {"name": "French Southern Territories", "alpha2": "TF", "alpha3": "ATF"},
        {"name": "Gibraltar", "alpha2": "GI", "alpha3": "GIB"},
        {"name": "Grenada", "alpha2": "GD", "alpha3": "GRD"},
        {"name": "Guadeloupe", "alpha2": "GP", "alpha3": "GLP"},
        {"name": "Guam", "alpha2": "GU", "alpha3": "GUM"},
        {"name": "Guernsey", "alpha2": "GG", "alpha3": "GGY"},
        {"name": "Haiti", "alpha2": "HT", "alpha3": "HTI"},
        {"name": "Heard Island and McDonald Islands", "alpha2": "HM", "alpha3": "HMD"},
        {"name": "Hong Kong", "alpha2": "HK", "alpha3": "HKG"},
        {"name": "Isle of Man", "alpha2": "IM", "alpha3": "IMN"},
        {"name": "Jersey", "alpha2": "JE", "alpha3": "JEY"},
        {"name": "Jamaica", "alpha2": "JM", "alpha3": "JAM"},
        {"name": "Kiribati", "alpha2": "KI", "alpha3": "KIR"},
        {"name": "Liechtenstein", "alpha2": "LI", "alpha3": "LIE"},
        {"name": "Luxembourg", "alpha2": "LU", "alpha3": "LUX"},
        {"name": "Macau", "alpha2": "MO", "alpha3": "MAC"},
        {"name": "Maldives", "alpha2": "MV", "alpha3": "MDV"},
        {"name": "Malta", "alpha2": "MT", "alpha3": "MLT"},
        {"name": "Marshall Islands", "alpha2": "MH", "alpha3": "MHL"},
        {"name": "Martinique", "alpha2": "MQ", "alpha3": "MTQ"},
        {"name": "Mauritius", "alpha2": "MU", "alpha3": "MUS"},
        {"name": "Mayotte", "alpha2": "YT", "alpha3": "MYT"},
        {"name": "Micronesia", "alpha2": "FM", "alpha3": "FSM"},
        {"name": "Monaco", "alpha2": "MC", "alpha3": "MCO"},
        {"name": "Montserrat", "alpha2": "MS", "alpha3": "MSR"},
        {"name": "Nauru", "alpha2": "NR", "alpha3": "NRU"},
        {"name": "New Caledonia", "alpha2": "NC", "alpha3": "NCL"},
        {"name": "Netherlands Antilles", "alpha2": "AN", "alpha3": "ANT"},
        {"name": "Niue", "alpha2": "NU", "alpha3": "NIU"},
        {"name": "Norfolk Island", "alpha2": "NF", "alpha3": "NFK"},
        {"name": "Northern Mariana Islands", "alpha2": "MP", "alpha3": "MNP"},
        {"name": "Palau", "alpha2": "PW", "alpha3": "PLW"},
        {"name": "Palestine", "alpha2": "PS", "alpha3": "PSE"},
        {"name": "Pitcairn", "alpha2": "PN", "alpha3": "PCN"},
        {"name": "Puerto Rico", "alpha2": "PR", "alpha3": "PRI"},
        {"name": "Qatar", "alpha2": "QA", "alpha3": "QAT"},
        {"name": "Reunion", "alpha2": "RE", "alpha3": "REU"},
        {"name": "Saint Barthelemy", "alpha2": "BL", "alpha3": "BLM"},
        {"name": "Saint Helena, Ascension and Tristan da Cunha", "alpha2": "SH", "alpha3": "SHN"},
        {"name": "Saint Kitts and Nevis", "alpha2": "KN", "alpha3": "KNA"},
        {"name": "Saint Lucia", "alpha2": "LC", "alpha3": "LCA"},
        {"name": "Saint Martin", "alpha2": "MF", "alpha3": "MAF"},
        {"name": "Saint Pierre and Miquelon", "alpha2": "PM", "alpha3": "SPM"},
        {"name": "Saint Vincent and The Grenadines", "alpha2": "VC", "alpha3": "VCT"},
        {"name": "Samoa", "alpha2": "WS", "alpha3": "WSM"},
        {"name": "San Marino", "alpha2": "SM", "alpha3": "SMR"},
        {"name": "Sao Tome and Principe", "alpha2": "ST", "alpha3": "STP"},
        {"name": "Seychelles", "alpha2": "SC", "alpha3": "SYC"},
        {"name": "Sint Maarten", "alpha2": "SX", "alpha3": "SXM"},
        {"name": "Singapore", "alpha2": "SG", "alpha3": "SGP"},
        {"name": "Solomon Islands", "alpha2": "SB", "alpha3": "SLB"},
        {"name": "South Georgia and the South Sandwich Islands", "alpha2": "GS", "alpha3": "SGS"},
        {"name": "Svalbard", "alpha2": "SJ", "alpha3": "SJM"},
        {"name": "Timor-Leste", "alpha2": "TL", "alpha3": "TLS"},
        {"name": "Tokelau", "alpha2": "TK", "alpha3": "TKL"},
        {"name": "Tonga", "alpha2": "TO", "alpha3": "TON"},
        {"name": "Trinidad and Tobago", "alpha2": "TT", "alpha3": "TTO"},
        {"name": "Tristan da Cunha", "alpha2": "TA", "alpha3": "TAA"},
        {"name": "Turks and Caicos Islands", "alpha2": "TC", "alpha3": "TCA"},
        {"name": "Tuvalu", "alpha2": "TV", "alpha3": "TUV"},
        {"name": "US Minor Outlying Islands", "alpha2": "UM", "alpha3": "UMI"},
        {"name": "US Virgin Islands", "alpha2": "VI", "alpha3": "VIR"},
        {"name": "Vanuatu", "alpha2": "VU", "alpha3": "VUT"},
        {"name": "Vatican City", "alpha2": "VA", "alpha3": "VAT"},
        {"name": "Wallis and Futuna", "alpha2": "WF", "alpha3": "WLF"}
    ];

    for (var mark in allMarkers) {
        allMarkerNames.push(allMarkers[mark]['name']);
        allMarkerISOAlpha2.push(allMarkers[mark]['alpha2']);
        allMarkerISOAlpha3.push(allMarkers[mark]['alpha3']);
    }

}

function getAllMarkerNames() {
    if (allMarkerNames.length == 0) {
        getAllMarkers();
    }
    return allMarkerNames;
}

function getAllMarkerAlpha2() { 
    if (allMarkerISOAlpha2.length == 0) {
        getAllMarkers();
    }
    return allMarkerISOAlpha2;
}

function getAllMarkerAlpha3() { 
    if (allMarkerISOAlpha3.length == 0) {
        getAllMarkers();
    }
    return allMarkerISOAlpha3;
}

getAllMarkerNames();
getAllMarkerAlpha2();
getAllMarkerAlpha3();

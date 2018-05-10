import * as Primitive from '../../../../../../../../../../xml-primitives';

// Source files:
// http://crd.gov.pl/wps/PA_E2_PI/zalacznik_oi/zalacznik_oi_821


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
export type CountryCode_Type = string;
type _CountryCode_Type = Primitive._string;

/** The appropriate country code from the ISO 3166 two-byte alpha version for the state in which the party concerned is a resident. Omit this only if  no data is available.
  * This list excludes Member States of the European Union
  * The following entries must not be used:
  * - AN --  NETHERLANDS ANTILLES
  * Valid entries are:
  * - AF --  AFGHANISTAN
  * - AX --  ÅLAND ISLANDS
  * - AL --  ALBANIA
  * - DZ --  ALGERIA
  * - AS --  AMERICAN SAMOA
  * - AD --  ANDORRA
  * - AO --  ANGOLA
  * - AI --  ANGUILLA
  * - AQ --  ANTARCTICA
  * - AG --  ANTIGUA AND BARBUDA
  * - AR --  ARGENTINA
  * - AM --  ARMENIA
  * - AW --  ARUBA
  * - AU --  AUSTRALIA
  * - AZ --  AZERBAIJAN
  * - BS --  BAHAMAS
  * - BH --  BAHRAIN
  * - BD --  BANGLADESH
  * - BB --  BARBADOS
  * - BY --  BELARUS
  * - BZ --  BELIZE
  * - BJ --  BENIN
  * - BM --  BERMUDA
  * - BT --  BHUTAN
  * - BO --  BOLIVIA
  * - BA --  BOSNIA AND HERZEGOVINA
  * - BW --  BOTSWANA
  * - BV --  BOUVET ISLAND
  * - BR --  BRAZIL
  * - IO --  BRITISH INDIAN OCEAN TERRITORY
  * - BN --  BRUNEI DARUSSALAM
  * - BF --  BURKINA FASO
  * - BI --  BURUNDI
  * - KH --  CAMBODIA
  * - CM --  CAMEROON
  * - CA --  CANADA
  * - CV --  CAPE VERDE
  * - KY --  CAYMAN ISLANDS
  * - CF --  CENTRAL AFRICAN REPUBLIC
  * - TD --  CHAD
  * - CL --  CHILE
  * - CN --  CHINA
  * - CX --  CHRISTMAS ISLAND
  * - CC --  COCOS (KEELING) ISLANDS
  * - CO --  COLOMBIA
  * - KM --  COMOROS
  * - CG --  CONGO
  * - CD --  CONGO, THE DEMOCRATIC REPUBLIC OF THE
  * - CK --  COOK ISLANDS
  * - CR --  COSTA RICA
  * - CI --  COTE D'IVOIRE
  * - CU --  CUBA
  * - DJ --  DJIBOUTI
  * - DM --  DOMINICA
  * - DO --  DOMINICAN REPUBLIC
  * - EC --  ECUADOR
  * - EG --  EGYPT
  * - SV --  EL SALVADOR
  * - GQ --  EQUATORIAL GUINEA
  * - ER --  ERITREA
  * - ET --  ETHIOPIA
  * - FK --  FALKLAND ISLANDS (MALVINAS)
  * - FO --  FAROE ISLANDS
  * - FJ --  FIJI
  * - GF --  FRENCH GUIANA
  * - PF --  FRENCH POLYNESIA
  * - TF --  FRENCH SOUTHERN TERRITORIES
  * - GA --  GABON
  * - GM --  GAMBIA
  * - GE --  GEORGIA
  * - GH --  GHANA
  * - GI --  GIBRALTAR
  * - GL --  GREENLAND
  * - GD --  GRENADA
  * - GP --  GUADELOUPE
  * - GU --  GUAM
  * - GT --  GUATEMALA
  * - GG --  GUERNSEY
  * - GN --  GUINEA
  * - GW --  GUINEA-BISSAU
  * - GY --  GUYANA
  * - HT --  HAITI
  * - HM --  HEARD ISLAND AND MCDONALD ISLANDS
  * - VA --  HOLY SEE (VATICAN CITY STATE)
  * - HN --  HONDURAS
  * - HK --  HONG KONG
  * - IS --  ICELAND
  * - IN --  INDIA
  * - ID --  INDONESIA
  * - IR --  IRAN, ISLAMIC REPUBLIC OF
  * - IQ --  IRAQ
  * - IM --  ISLE OF MAN
  * - IL --  ISRAEL
  * - JM --  JAMAICA
  * - JP --  JAPAN
  * - JE --	 JERSEY
  * - JO --  JORDAN
  * - KZ --  KAZAKHSTAN
  * - KE --  KENYA
  * - KI --  KIRIBATI
  * - KP --  KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF
  * - KR --  KOREA, REPUBLIC OF
  * - KW --  KUWAIT
  * - KG --  KYRGYZSTAN
  * - LA --  LAO PEOPLE'S DEMOCRATIC REPUBLIC
  * - LB --  LEBANON
  * - LS --  LESOTHO
  * - LR --  LIBERIA
  * - LY --  LIBYAN ARAB JAMAHIRIYA
  * - LI --  LIECHTENSTEIN
  * - MO --  MACAO
  * - MK --  MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF
  * - MG --  MADAGASCAR
  * - MW --  MALAWI
  * - MY --  MALAYSIA
  * - MV --  MALDIVES
  * - ML --  MALI
  * - MH --  MARSHALL ISLANDS
  * - MQ --  MARTINIQUE
  * - MR --  MAURITANIA
  * - MU --  MAURITIUS
  * - YT --  MAYOTTE
  * - MX --  MEXICO
  * - FM --  MICRONESIA, FEDERATED STATES OF
  * - MD --  MOLDOVA, REPUBLIC OF
  * - MN --  MONGOLIA
  * - ME --  MONTENEGRO
  * - MS --  MONTSERRAT
  * - MA --  MOROCCO
  * - MZ --  MOZAMBIQUE
  * - MM --  MYANMAR
  * - NA --  NAMIBIA
  * - NR --  NAURU
  * - NP --  NEPAL
  * - AN --  NETHERLANDS ANTILLES
  * - NC --  NEW CALEDONIA
  * - NZ --  NEW ZEALAND
  * - NI --  NICARAGUA
  * - NE --  NIGER
  * - NG --  NIGERIA
  * - NU --  NIUE
  * - NF --  NORFOLK ISLAND
  * - MP --  NORTHERN MARIANA ISLANDS
  * - NO --  NORWAY
  * - OM --  OMAN
  * - PK --  PAKISTAN
  * - PW --  PALAU
  * - PS --  PALESTINIAN TERRITORY, OCCUPIED
  * - PA --  PANAMA
  * - PG --  PAPUA NEW GUINEA
  * - PY --  PARAGUAY
  * - PE --  PERU
  * - PH --  PHILIPPINES
  * - PN --  PITCAIRN
  * - PR --  PUERTO RICO
  * - QA --  QATAR
  * - RE --  REUNION
  * - RU --  RUSSIAN FEDERATION
  * - RW --  RWANDA
  * - BL --  SAINT BARTHÉLEMY
  * - SH --  SAINT HELENA
  * - KN --  SAINT KITTS AND NEVIS
  * - LC --  SAINT LUCIA
  * - MF --  SAINT MARTIN
  * - PM --  SAINT PIERRE AND MIQUELON
  * - VC --  SAINT VINCENT AND THE GRENADINES
  * - WS --  SAMOA
  * - SM --  SAN MARINO
  * - ST --  SAO TOME AND PRINCIPE
  * - SA --  SAUDI ARABIA
  * - SN --  SENEGAL
  * - RS --  SERBIA
  * - SC --  SEYCHELLES
  * - SL --  SIERRA LEONE
  * - SG --  SINGAPORE
  * - SB --  SOLOMON ISLANDS
  * - SO --  SOMALIA
  * - ZA --  SOUTH AFRICA
  * - GS --  SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS
  * - LK --  SRI LANKA
  * - SD --  SUDAN
  * - SR --  SURINAME
  * - SJ --  SVALBARD AND JAN MAYEN
  * - SZ --  SWAZILAND
  * - CH --  SWITZERLAND
  * - SY --  SYRIAN ARAB REPUBLIC
  * - TW --  TAIWAN, PROVINCE OF CHINA
  * - TJ --  TAJIKISTAN
  * - TZ --  TANZANIA, UNITED REPUBLIC OF
  * - TH --  THAILAND
  * - TL --  TIMOR-LESTE
  * - TG --  TOGO
  * - TK --  TOKELAU
  * - TO --  TONGA
  * - TT --  TRINIDAD AND TOBAGO
  * - TN --  TUNISIA
  * - TR --  TURKEY
  * - TM --  TURKMENISTAN
  * - TC --  TURKS AND CAICOS ISLANDS
  * - TV --  TUVALU
  * - UG --  UGANDA
  * - UA --  UKRAINE
  * - AE --  UNITED ARAB EMIRATES
  * - US --  UNITED STATES
  * - UM --  UNITED STATES MINOR OUTLYING ISLANDS
  * - UY --  URUGUAY
  * - UZ --  UZBEKISTAN
  * - VU --  VANUATU
  * - VE --  VENEZUELA, BOLIVARIAN REPUBLIC OF
  * - VN --  VIET NAM
  * - VG --  VIRGIN ISLANDS, BRITISH
  * - VI --  VIRGIN ISLANDS, U.S.
  * - WF --  WALLIS AND FUTUNA
  * - EH --  WESTERN SAHARA
  * - YE --  YEMEN
  * - ZM --  ZAMBIA
  * - ZW --  ZIMBABWE
  * - CW --  CURACAO
  * - NM --  SAINT MARTIN (DUTCH PART) - invalidated
  * - SX --  SAINT MARTIN (DUTCH PART)
  * - BQ --  BONAIRE, SAINT EUSTATIUS AND SABA */
export type CountryCodeExMS_Type = ("AF" | "AX" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BA" | "BW" | "BV" | "BR" | "IO" | "BN" | "BF" | "BI" | "KH" | "CM" | "CA" | "CV" | "KY" | "CF" | "TD" | "CL" | "CN" | "CX" | "CC" | "CO" | "KM" | "CG" | "CD" | "CK" | "CR" | "CI" | "CU" | "DJ" | "DM" | "DO" | "EC" | "EG" | "SV" | "GQ" | "ER" | "ET" | "FK" | "FO" | "FJ" | "GF" | "PF" | "TF" | "GA" | "GM" | "GE" | "GH" | "GI" | "GL" | "GD" | "GP" | "GU" | "GT" | "GG" | "GN" | "GW" | "GY" | "HT" | "HM" | "VA" | "HN" | "HK" | "IS" | "IN" | "ID" | "IR" | "IQ" | "IM" | "IL" | "JM" | "JP" | "JE" | "JO" | "KZ" | "KE" | "KI" | "KP" | "KR" | "KW" | "KG" | "LA" | "LB" | "LS" | "LR" | "LY" | "LI" | "MO" | "MK" | "MG" | "MW" | "MY" | "MV" | "ML" | "MH" | "MQ" | "MR" | "MU" | "YT" | "MX" | "FM" | "MD" | "MN" | "ME" | "MS" | "MA" | "MZ" | "MM" | "NA" | "NR" | "NP" | "AN" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU" | "NF" | "MP" | "NO" | "OM" | "PK" | "PW" | "PS" | "PA" | "PG" | "PY" | "PE" | "PH" | "PN" | "PR" | "QA" | "RE" | "RU" | "RW" | "BL" | "SH" | "KN" | "LC" | "MF" | "PM" | "VC" | "WS" | "SM" | "ST" | "SA" | "SN" | "RS" | "SC" | "SL" | "SG" | "SB" | "SO" | "ZA" | "GS" | "LK" | "SD" | "SR" | "SJ" | "SZ" | "CH" | "SY" | "TW" | "TJ" | "TZ" | "TH" | "TL" | "TG" | "TK" | "TO" | "TT" | "TN" | "TR" | "TM" | "TC" | "TV" | "UG" | "UA" | "AE" | "US" | "UM" | "UY" | "UZ" | "VU" | "VE" | "VN" | "VG" | "VI" | "WF" | "EH" | "YE" | "ZM" | "ZW" | "CW" | "NM" | "SX" | "BQ");
interface _CountryCodeExMS_Type extends Primitive._string { content: CountryCodeExMS_Type; }

/** The appropriate currency code from the ISO 4217 three-byte alpha version for the currency in which a monetary amount is expressed.
  * Valid entries are:
  * AED United Arab Emirates, Dirhams
  * AFN Afghanistan, Afghanis
  * ALL Albania, Leke
  * AMD Armenia, Drams
  * ANG Netherlands Antilles, Guilders
  * AOA Angola, Kwanza
  * ARS Argentina, Pesos
  * AUD Australia, Dollars
  * AWG Aruba, Guilders
  * AZN Azerbaijan, Manats
  * BAM Bosnia and Herzegovina, Convertible Marka
  * BBD Barbados, Dollars
  * BDT Bangladesh, Taka
  * BGN Bulgaria, Leva
  * BHD Bahrain, Dinars
  * BIF Burundi, Francs
  * BMD Bermuda, Dollars
  * BND Brunei Darussalam, Dollars
  * BOB Bolivia, Bolivianos
  * BOV Bolivia, Mvdol
  * BRL Brazil, Brazil Real
  * BSD Bahamas, Dollars
  * BTN Bhutan, Ngultrum
  * BWP Botswana, Pulas
  * BYR Belarus, Rubles
  * BZD Belize, Dollars
  * CAD Canada, Dollars
  * CDF Congo/Kinshasa, Congolese Francs
  * CHF Switzerland, Francs
  * CLF Chile, Unidades de fomento
  * CLP Chile, Pesos
  * CNY China, Yuan Renminbi
  * COP Colombia, Pesos
  * COU Colombia, Unidad de Valor Real
  * CRC Costa Rica, Colones
  * CUC Cuba, Convertible Pesos
  * CUP Cuba, Pesos
  * CVE Cape Verde, Escudos
  * CZK Czech Republic, Koruny
  * DJF Djibouti, Francs
  * DKK Denmark, Kroner
  * DOP Dominican Republic, Pesos
  * DZD Algeria, Algeria Dinars
  * EEK Estonia, Krooni
  * EGP Egypt, Pounds
  * ERN Eritrea, Nakfa
  * ETB Ethiopia, Birr
  * EUR Euro Member Countries, Euro
  * FJD Fiji, Dollars
  * FKP Falkland Islands (Malvinas), Pounds
  * GBP United Kingdom, Pounds
  * GEL Georgia, Lari
  * GHS Ghana, Cedis
  * GIP Gibraltar, Pounds
  * GMD Gambia, Dalasi
  * GNF Guinea, Francs
  * GTQ Guatemala, Quetzales
  * GWP Guinea-Bissau Peso
  * GYD Guyana, Dollars
  * HKD Hong Kong, Dollars
  * HNL Honduras, Lempiras
  * HRK Croatia, Kuna
  * HTG Haiti, Gourdes
  * HUF Hungary, Forint
  * IDR Indonesia, Rupiahs
  * ILS Israel, New Shekels
  * INR India, Rupees
  * IQD Iraq, Dinars
  * IRR Iran, Rials
  * ISK Iceland, Kronur
  * JMD Jamaica, Dollars
  * JOD Jordan, Dinars
  * JPY Japan, Yen
  * KES Kenya, Shillings
  * KGS Kyrgyzstan, Soms
  * KHR Cambodia, Riels
  * KMF Comoros, Francs
  * KPW Korea (North), Won
  * KRW Korea (South), Won
  * KWD Kuwait, Dinars
  * KYD Cayman Islands, Dollars
  * KZT Kazakstan, Tenge
  * LAK Laos, Kips
  * LBP Lebanon, Pounds
  * LKR Sri Lanka, Rupees
  * LRD Liberia, Dollars
  * LSL Lesotho, Maloti
  * LTL Lithuania, Litai
  * LVL Latvia, Lati
  * LYD Libya, Dinars
  * MAD Morocco, Dirhams
  * MDL Moldova, Lei
  * MGA Madagascar, Malagasy Ariary
  * MKD Macedonia, Denars
  * MMK Myanmar (Burma), Kyats
  * MNT Mongolia, Tugriks
  * MOP Macau, Patacas
  * MRO Mauritania, Ouguiyas
  * MTL Malta, Liri
  * MUR Mauritius, Rupees
  * MVR Maldives (Maldive Islands), Rufiyaa
  * MWK Malawi, Kwachas
  * MXN Mexico, Pesos
  * MXV Mexico, Mexican Unidad de Inversion
  * MYR Malaysia, Ringgits
  * MZN Mozambique, Meticais
  * NAD Namibia, Dollars
  * NGN Nigeria, Nairas
  * NIO Nicaragua, Gold Cordobas
  * NOK Norway, Krone
  * NPR Nepal, Nepal Rupees
  * NZD New Zealand, Dollars
  * OMR Oman, Rials
  * PAB Panama, Balboa
  * PEN Peru, Nuevos Soles
  * PGK Papua New Guinea, Kina
  * PHP Philippines, Pesos
  * PKR Pakistan, Rupees
  * PLN Poland, Zlotych
  * PYG Paraguay, Guarani
  * QAR Qatar, Rials
  * RON Romania, New Lei
  * RSD Serbian Dinar
  * RUB Russia, Rubles
  * RWF Rwanda, Rwanda Francs
  * SAR Saudi Arabia, Riyals
  * SBD Solomon Islands, Dollars
  * SCR Seychelles, Rupees
  * SDG Sudan, Dinars
  * SEK Sweden, Kronor
  * SGD Singapore, Dollars
  * SHP Saint Helena, Pounds
  * SLL Sierra Leone, Leones
  * SOS Somalia, Shillings
  * SRD Suriname, Dollar
  * STD São Tome and Principe, Dobras
  * SVC El Salvador, Colones
  * SYP Syria, Pounds
  * SZL Swaziland, Emalangeni
  * THB Thailand, Baht
  * TJS Tajikistan, Somoni
  * TMT Turkmenistan, Manats
  * TND Tunisia, Dinars
  * TOP Tonga, Pa'anga
  * TRY Turkey, Liras
  * TTD Trinidad and Tobago, Dollars
  * TWD Taiwan, New Dollars
  * TZS Tanzania, Shillings
  * UAH Ukraine, Hryvnia
  * UGX Uganda, Shillings
  * USD United States of America, Dollars
  * UYU Uruguay, Pesos
  * UZS Uzbekistan, Sums
  * VEF Venezuela, Bolivares
  * VND Viet Nam, Dong
  * VUV Vanuatu, Vatu
  * WST Samoa, Tala
  * XAF Communauté Financière Africaine BEAC, Francs
  * XCD East Caribbean Dollars
  * XOF Communauté Financière Africaine BCEAO, Francs
  * XPD Palladium Ounces
  * XPF Comptoirs Français du Pacifique Francs
  * YER Yemen, Rials
  * ZAR South Africa, Rand
  * ZMK Zambia, Kwacha
  * ZWL Zimbabwe, Zimbabwe Dollars */
export type currCode_Type = ("AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BOV" | "BRL" | "BSD" | "BTN" | "BWP" | "BYR" | "BZD" | "CAD" | "CDF" | "CHF" | "CLF" | "CLP" | "CNY" | "COP" | "COU" | "CRC" | "CUC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EEK" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GWP" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LTL" | "LVL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRO" | "MUR" | "MVR" | "MWK" | "MXN" | "MXV" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "STD" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TVD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "UYU" | "UZS" | "VEF" | "VND" | "VUV" | "WST" | "XAF" | "XCD" | "XOF" | "XPD" | "XPF" | "YER" | "ZAR" | "ZMK" | "ZWL");
interface _currCode_Type extends Primitive._string { content: currCode_Type; }

/** The list of official languages of the EU. */
export type EULanguageCode_Type = ("bg" | "cs" | "da" | "de" | "el" | "en" | "es" | "et" | "fi" | "fr" | "ga" | "hr" | "hu" | "it" | "lt" | "lv" | "mt" | "nl" | "pl" | "pt" | "ro" | "sk" | "sl" | "sv" | "tr");
interface _EULanguageCode_Type extends Primitive._string { content: EULanguageCode_Type; }

/** The appropriate country code from the ISO 3166 two-byte alpha version for the state in which the party concerned is a resident. Omit this only if  no data is available.
  * This list includes only Member States of the European Union
  * Valid entries are:
  * - AT --  AUSTRIA
  * - BE --  BELGIUM
  * - BG --  BULGARIA
  * - HR --  CROATIA
  * - CY --  CYPRUS
  * - CZ --  CZECH REPUBLIC
  * - DK --  DENMARK
  * - EE --  ESTONIA
  * - FI --  FINLAND
  * - FR --  FRANCE
  * - DE --  GERMANY
  * - EL --  GREECE
  * - HU --  HUNGARY
  * - IE --  IRELAND
  * - IT --  ITALY
  * - LV --  LATVIA
  * - LT --  LITHUANIA
  * - LU --  LUXEMBOURG
  * - MT --  MALTA
  * - NL --  NETHERLANDS
  * - PL --  POLAND
  * - PT --  PORTUGAL
  * - RO --  ROMANIA
  * - SK --  SLOVAKIA
  * - SI --  SLOVENIA
  * - ES --  SPAIN
  * - SE --  SWEDEN
  * - GB --  UNITED KINGDOM
  * - IC --  CANARY ISLANDS
  * - XI --  CEUTA
  * - XJ --  MELILLA
  * - MC --  MONACO */
export type MSCountryCode_Type = ("AT" | "BE" | "BG" | "CY" | "CZ" | "DK" | "EE" | "FI" | "FR" | "DE" | "EL" | "HR" | "HU" | "IE" | "IT" | "LV" | "LT" | "LU" | "MT" | "NL" | "PL" | "PT" | "RO" | "SK" | "SI" | "ES" | "SE" | "GB" | "IC" | "XI" | "XJ" | "MC");
interface _MSCountryCode_Type extends Primitive._string { content: MSCountryCode_Type; }

/** The appropriate currency code from the ISO 4217 three-byte alpha version for the currency in which a monetary amount is expressed. Currency codes are limited to those of Member States.
  * Valid entries are:
  * BGN Bulgaria, Leva
  * CZK Czech Republic, Koruny
  * DKK Denmark, Kroner
  * EEK Estonia, Krooni
  * EUR Euro Member Countries, Euro
  * GBP United Kingdom, Pounds
  * HRK Croatia, Kuna
  * HUF Hungary, Forint
  * LTL Lithuania, Litai
  * LVL Latvia, Lati
  * PLN Poland, Zlotych
  * RON Romania, New Lei
  * SEK Sweden, Kronor */
export type MSCurrCode_Type = ("BGN" | "CZK" | "DKK" | "EEK" | "EUR" | "GBP" | "HRK" | "HUF" | "LTL" | "LVL" | "PLN" | "RON" | "SEK");
interface _MSCurrCode_Type extends Primitive._string { content: MSCurrCode_Type; }

/** The appropriate currency code from the ISO 4217 three-byte alpha version for the currency in which a monetary amount is expressed. Currency codes are limited to those of Member States.
  * Valid entries are:
  * BGN Bulgaria, Leva
  * CZK Czech Republic, Koruny
  * DKK Denmark, Kroner
  * EEK Estonia, Krooni
  * EUR Euro Member Countries, Euro
  * GBP United Kingdom, Pounds
  * HRK Croatia, Kuna
  * HUF Hungary, Forint
  * LTL Lithuania, Litai
  * LVL Latvia, Lati
  * RON Romania, New Lei
  * SEK Sweden, Kronor */
export type MSCurrCodeExPLN_Type = ("BGN" | "CZK" | "DKK" | "EEK" | "EUR" | "GBP" | "HRK" | "HUF" | "LTL" | "LVL" | "RON" | "SEK");
interface _MSCurrCodeExPLN_Type extends Primitive._string { content: MSCurrCodeExPLN_Type; }

export interface document extends BaseType {
}
export var document: document;

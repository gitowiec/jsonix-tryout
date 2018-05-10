import * as Primitive from '../../../../../../../../../../xml-primitives';

// Source files:
// http://crd.gov.pl/wps/PA_E2_PI/zalacznik_oi/zalacznik_oi_1146
// http://crd.gov.pl/wps/PA_E2_PI/zalacznik_oi/zalacznik_oi_1149
// http://crd.gov.pl/wps/PA_E2_PI/zalacznik_oi/zalacznik_oi_1150
// http://crd.gov.pl/wps/PA_E2_PI/zalacznik_oi/zalacznik_oi_1151


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
/** Dane określające adres */
interface _TAdres extends BaseType {
	AdresPol: TAdresPolski;
	AdresZagr: TAdresZagraniczny;
}
export interface TAdres extends _TAdres { constructor: { new(): TAdres }; }
export var TAdres: { new(): TAdres };

/** Element będący adresem e-mail */
export type TAdresEmail = string;
type _TAdresEmail = _TZnakowy;

/** Informacje opisujące adres polski */
interface _TAdresPolski extends BaseType {
	/** Gmina */
	Gmina: string;
	/** Kraj */
	KodKraju: TKodKraju;
	/** Kod pocztowy */
	KodPocztowy: string;
	/** Nazwa miejscowości */
	Miejscowosc: string;
	/** Numer budynku */
	NrDomu: string;
	/** Numer lokalu */
	NrLokalu?: string;
	/** Nazwa urzędu pocztowego */
	Poczta: string;
	/** Powiat */
	Powiat: string;
	/** Nazwa ulicy */
	Ulica?: string;
	/** Województwo */
	Wojewodztwo: string;
}
export interface TAdresPolski extends _TAdresPolski { constructor: { new(): TAdresPolski }; }
export var TAdresPolski: { new(): TAdresPolski };

/** Informacje opisujące adres zagraniczny */
interface _TAdresZagraniczny extends BaseType {
	/** Kod Kraju [Country Code] */
	KodKraju: string;
	/** Kod pocztowy [Postal code] */
	KodPocztowy?: string;
	/** Nazwa miejscowości [City] */
	Miejscowosc: string;
	/** Numer budynku [Building number] */
	NrDomu?: string;
	/** Numer lokalu [Flat number] */
	NrLokalu?: string;
	/** Nazwa ulicy [Street] */
	Ulica?: string;
}
export interface TAdresZagraniczny extends _TAdresZagraniczny { constructor: { new(): TAdresZagraniczny }; }
export var TAdresZagraniczny: { new(): TAdresZagraniczny };

type TAdresZagranicznyKodKrajuType = string;
type _TAdresZagranicznyKodKrajuType = _TKodKraju;

/** Liczby naturalne */
export type TCalkowity = number;
type _TCalkowity = Primitive._number;

/** Określa, czy to jest złożenie, czy korekta dokumentu */
export type TCelZlozenia = (1 | 2);
interface _TCelZlozenia extends Primitive._number { content: TCelZlozenia; }

/** Typ daty */
export type TData = Date;
type _TData = Primitive._Date;

/** Typ daty i godziny */
export type TDataCzas = Date;
type _TDataCzas = Primitive._Date;

/** Podstawowy zestaw danych identyfikacyjnych o osobie fizycznej */
interface _TIdentyfikatorOsobyFizycznej extends BaseType {
	/** Data urodzenia */
	DataUrodzenia: Date;
	/** Pierwsze imię */
	ImiePierwsze: string;
	/** Nazwisko */
	Nazwisko: string;
	/** Identyfikator podatkowy NIP */
	NIP: string;
	/** Identyfikator podatkowy numer PESEL */
	PESEL?: string;
}
export interface TIdentyfikatorOsobyFizycznej extends _TIdentyfikatorOsobyFizycznej { constructor: { new(): TIdentyfikatorOsobyFizycznej }; }
export var TIdentyfikatorOsobyFizycznej: { new(): TIdentyfikatorOsobyFizycznej };

/** Podstawowy zestaw danych identyfikacyjnych o osobie fizycznej z identyfikatorem NIP albo PESEL */
interface _TIdentyfikatorOsobyFizycznej1 extends BaseType {
	/** Data urodzenia */
	DataUrodzenia: Date;
	/** Pierwsze imię */
	ImiePierwsze: string;
	/** Nazwisko */
	Nazwisko: string;
	/** Identyfikator podatkowy NIP */
	NIP: string;
	/** Identyfikator podatkowy numer PESEL */
	PESEL: string;
}
export interface TIdentyfikatorOsobyFizycznej1 extends _TIdentyfikatorOsobyFizycznej1 { constructor: { new(): TIdentyfikatorOsobyFizycznej1 }; }
export var TIdentyfikatorOsobyFizycznej1: { new(): TIdentyfikatorOsobyFizycznej1 };

/** Podstawowy zestaw danych identyfikacyjnych o osobie fizycznej z identyfikatorem NIP */
interface _TIdentyfikatorOsobyFizycznej2 extends BaseType {
	/** Data urodzenia */
	DataUrodzenia: Date;
	/** Pierwsze imię */
	ImiePierwsze: string;
	/** Nazwisko */
	Nazwisko: string;
	/** Identyfikator podatkowy NIP */
	NIP: string;
}
export interface TIdentyfikatorOsobyFizycznej2 extends _TIdentyfikatorOsobyFizycznej2 { constructor: { new(): TIdentyfikatorOsobyFizycznej2 }; }
export var TIdentyfikatorOsobyFizycznej2: { new(): TIdentyfikatorOsobyFizycznej2 };

/** Pełny zestaw danych identyfikacyjnych o osobie fizycznej */
interface _TIdentyfikatorOsobyFizycznejPelny extends BaseType {
	/** Data urodzenia */
	DataUrodzenia: Date;
	/** Imię matki */
	ImieMatki: string;
	/** Imię ojca */
	ImieOjca: string;
	/** Pierwsze imię */
	ImiePierwsze: string;
	/** Nazwisko */
	Nazwisko: string;
	/** Identyfikator podatkowy NIP */
	NIP?: string;
	/** Identyfikator podatkowy numer PESEL */
	PESEL: string;
}
export interface TIdentyfikatorOsobyFizycznejPelny extends _TIdentyfikatorOsobyFizycznejPelny { constructor: { new(): TIdentyfikatorOsobyFizycznejPelny }; }
export var TIdentyfikatorOsobyFizycznejPelny: { new(): TIdentyfikatorOsobyFizycznejPelny };

/** Zestaw danych identyfikacyjnych dla osoby fizycznej zagranicznej */
interface _TIdentyfikatorOsobyFizycznejZagranicznej extends BaseType {
	/** Data urodzenia [Date of Birth] */
	DataUrodzenia: Date;
	/** Imię matki [Mother’s name] */
	ImieMatki?: string;
	/** Imię ojca [Father’s name] */
	ImieOjca?: string;
	/** Imię pierwsze [First name] */
	ImiePierwsze: string;
	/** Miejsce urodzenia [Place of Birth] */
	MiejsceUrodzenia: string;
	/** Nazwisko [Family name] */
	Nazwisko: string;
	/** Identyfikator podatkowy NIP [Tax Identification Number (NIP)] */
	NIP?: string;
}
export interface TIdentyfikatorOsobyFizycznejZagranicznej extends _TIdentyfikatorOsobyFizycznejZagranicznej { constructor: { new(): TIdentyfikatorOsobyFizycznejZagranicznej }; }
export var TIdentyfikatorOsobyFizycznejZagranicznej: { new(): TIdentyfikatorOsobyFizycznejZagranicznej };

/** Podstawowy zestaw danych identyfikacyjnych o osobie niefizycznej */
interface _TIdentyfikatorOsobyNiefizycznej extends BaseType {
	/** Identyfikator podatkowy NIP */
	NIP: string;
	/** Pełna nazwa */
	PelnaNazwa: string;
	/** Numer REGON */
	REGON?: string;
}
export interface TIdentyfikatorOsobyNiefizycznej extends _TIdentyfikatorOsobyNiefizycznej { constructor: { new(): TIdentyfikatorOsobyNiefizycznej }; }
export var TIdentyfikatorOsobyNiefizycznej: { new(): TIdentyfikatorOsobyNiefizycznej };

type TIdentyfikatorOsobyNiefizycznejPelnaNazwaType = string;
type _TIdentyfikatorOsobyNiefizycznejPelnaNazwaType = Primitive._string;

/** Pełny zestaw danych identyfikacyjnych o osobie niefizycznej */
interface _TIdentyfikatorOsobyNiefizycznejPelny extends BaseType {
	/** Identyfikator podatkowy NIP */
	NIP?: string;
	/** Pełna nazwa */
	PelnaNazwa: string;
	/** Numer REGON */
	REGON: string;
	/** Skrócona nazwa */
	SkroconaNazwa: string;
}
export interface TIdentyfikatorOsobyNiefizycznejPelny extends _TIdentyfikatorOsobyNiefizycznejPelny { constructor: { new(): TIdentyfikatorOsobyNiefizycznejPelny }; }
export var TIdentyfikatorOsobyNiefizycznejPelny: { new(): TIdentyfikatorOsobyNiefizycznejPelny };

type TIdentyfikatorOsobyNiefizycznejPelnyPelnaNazwaType = string;
type _TIdentyfikatorOsobyNiefizycznejPelnyPelnaNazwaType = Primitive._string;

type TIdentyfikatorOsobyNiefizycznejPelnySkroconaNazwaType = string;
type _TIdentyfikatorOsobyNiefizycznejPelnySkroconaNazwaType = Primitive._string;

/** Zestaw danych identyfikacyjnych dla osoby niefizycznej zagranicznej */
interface _TIdentyfikatorOsobyNiefizycznejZagranicznej extends BaseType {
	/** Identyfikator podatkowy NIP [Tax Identification Number (NIP)] */
	NIP?: string;
	/** Pełna nazwa [Name] */
	PelnaNazwa: string;
	/** Nazwa skrócona [Short Name] */
	SkroconaNazwa?: string;
}
export interface TIdentyfikatorOsobyNiefizycznejZagranicznej extends _TIdentyfikatorOsobyNiefizycznejZagranicznej { constructor: { new(): TIdentyfikatorOsobyNiefizycznejZagranicznej }; }
export var TIdentyfikatorOsobyNiefizycznejZagranicznej: { new(): TIdentyfikatorOsobyNiefizycznejZagranicznej };

type TIdentyfikatorOsobyNiefizycznejZagranicznejPelnaNazwaType = string;
type _TIdentyfikatorOsobyNiefizycznejZagranicznejPelnaNazwaType = Primitive._string;

type TIdentyfikatorOsobyNiefizycznejZagranicznejSkroconaNazwaType = string;
type _TIdentyfikatorOsobyNiefizycznejZagranicznejSkroconaNazwaType = Primitive._string;

/** Pierwsze imię */
export type TImie = string;
type _TImie = Primitive._string;

/** Typ określający nazwę województwa, nazwę powiatu lub nazwę gminy */
export type TJednAdmin = string;
type _TJednAdmin = Primitive._string;

/** Słownik kodów krajów */
export type TKodKraju = ("AF" | "AX" | "AL" | "DZ" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AN" | "SA" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BY" | "BO" | "BA" | "BW" | "BR" | "BN" | "IO" | "BG" | "BF" | "BI" | "XC" | "CL" | "CN" | "HR" | "CY" | "TD" | "ME" | "DK" | "DM" | "DO" | "DJ" | "EG" | "EC" | "ER" | "EE" | "ET" | "FK" | "FJ" | "PH" | "FI" | "FR" | "TF" | "GA" | "GM" | "GH" | "GI" | "GR" | "GD" | "GL" | "GE" | "GU" | "GG" | "GY" | "GF" | "GP" | "GT" | "GN" | "GQ" | "GW" | "HT" | "ES" | "HN" | "HK" | "IN" | "ID" | "IQ" | "IR" | "IE" | "IS" | "IL" | "JM" | "JP" | "YE" | "JE" | "JO" | "KY" | "KH" | "CM" | "CA" | "QA" | "KZ" | "KE" | "KG" | "KI" | "CO" | "KM" | "CG" | "CD" | "KP" | "XK" | "CR" | "CU" | "KW" | "LA" | "LS" | "LB" | "LR" | "LY" | "LI" | "LT" | "LV" | "LU" | "MK" | "MG" | "YT" | "MO" | "MW" | "MV" | "MY" | "ML" | "MT" | "MP" | "MA" | "MQ" | "MR" | "MU" | "MX" | "XL" | "FM" | "UM" | "MD" | "MC" | "MN" | "MS" | "MZ" | "MM" | "NA" | "NR" | "NP" | "NL" | "DE" | "NE" | "NG" | "NI" | "NU" | "NF" | "NO" | "NC" | "NZ" | "PS" | "OM" | "PK" | "PW" | "PA" | "PG" | "PY" | "PE" | "PN" | "PF" | "PL" | "GS" | "PT" | "PR" | "CF" | "CZ" | "KR" | "ZA" | "RE" | "RU" | "RO" | "RW" | "EH" | "BL" | "KN" | "LC" | "MF" | "VC" | "SV" | "WS" | "AS" | "SM" | "SN" | "RS" | "SC" | "SL" | "SG" | "SK" | "SI" | "SO" | "LK" | "PM" | "US" | "SZ" | "SD" | "SR" | "SJ" | "SH" | "SY" | "CH" | "SE" | "TJ" | "TH" | "TW" | "TZ" | "TG" | "TK" | "TO" | "TT" | "TN" | "TR" | "TM" | "TV" | "UG" | "UA" | "UY" | "UZ" | "VU" | "WF" | "VA" | "HU" | "VE" | "GB" | "VN" | "IT" | "TL" | "CI" | "BV" | "CX" | "IM" | "CK" | "VI" | "VG" | "HM" | "CC" | "MH" | "FO" | "SB" | "ST" | "TC" | "ZM" | "CV" | "ZW" | "AE");
interface _TKodKraju extends Primitive._string { content: TKodKraju; }

/** Kod kraju urodzenia */
export type TKodKrajuUrodzenia = string;
type _TKodKrajuUrodzenia = Primitive._string;

/** Kod kraju wydania numeru identyfikacyjnego */
export type TKodKrajuWydania = string;
type _TKodKrajuWydania = _TKodKraju;

/** Kod pocztowy */
export type TKodPocztowy = string;
type _TKodPocztowy = _TZnakowy;

export type TKodUS = ("0202" | "0203" | "0204" | "0205" | "0206" | "0207" | "0208" | "0209" | "0210" | "0211" | "0212" | "0213" | "0214" | "0215" | "0216" | "0217" | "0218" | "0219" | "0220" | "0221" | "0222" | "0223" | "0224" | "0225" | "0226" | "0227" | "0228" | "0229" | "0230" | "0231" | "0232" | "0233" | "0234" | "0271" | "0402" | "0403" | "0404" | "0405" | "0406" | "0407" | "0408" | "0409" | "0410" | "0411" | "0412" | "0413" | "0414" | "0415" | "0416" | "0417" | "0418" | "0419" | "0420" | "0421" | "0422" | "0423" | "0471" | "0602" | "0603" | "0604" | "0605" | "0606" | "0607" | "0608" | "0609" | "0610" | "0611" | "0612" | "0613" | "0614" | "0615" | "0616" | "0617" | "0618" | "0619" | "0620" | "0621" | "0622" | "0671" | "0802" | "0803" | "0804" | "0805" | "0806" | "0807" | "0808" | "0809" | "0810" | "0811" | "0812" | "0813" | "0814" | "0871" | "1002" | "1003" | "1004" | "1005" | "1006" | "1007" | "1008" | "1009" | "1010" | "1011" | "1012" | "1013" | "1014" | "1015" | "1016" | "1017" | "1018" | "1019" | "1020" | "1021" | "1022" | "1023" | "1024" | "1025" | "1026" | "1027" | "1028" | "1029" | "1071" | "1202" | "1203" | "1204" | "1205" | "1206" | "1207" | "1208" | "1209" | "1210" | "1211" | "1212" | "1213" | "1214" | "1215" | "1216" | "1217" | "1218" | "1219" | "1220" | "1221" | "1222" | "1223" | "1224" | "1225" | "1226" | "1227" | "1228" | "1271" | "1402" | "1403" | "1404" | "1405" | "1406" | "1407" | "1408" | "1409" | "1410" | "1411" | "1412" | "1413" | "1414" | "1415" | "1416" | "1417" | "1418" | "1419" | "1420" | "1421" | "1422" | "1423" | "1424" | "1425" | "1426" | "1427" | "1428" | "1429" | "1430" | "1431" | "1432" | "1433" | "1434" | "1435" | "1436" | "1437" | "1438" | "1439" | "1440" | "1441" | "1442" | "1443" | "1444" | "1445" | "1446" | "1447" | "1448" | "1449" | "1471" | "1472" | "1473" | "1602" | "1603" | "1604" | "1605" | "1606" | "1607" | "1608" | "1609" | "1610" | "1611" | "1612" | "1613" | "1671" | "1802" | "1803" | "1804" | "1805" | "1806" | "1807" | "1808" | "1809" | "1810" | "1811" | "1812" | "1813" | "1814" | "1815" | "1816" | "1817" | "1818" | "1819" | "1820" | "1821" | "1822" | "1823" | "1871" | "2002" | "2003" | "2004" | "2005" | "2006" | "2007" | "2008" | "2009" | "2010" | "2011" | "2012" | "2013" | "2014" | "2015" | "2071" | "2202" | "2203" | "2204" | "2205" | "2206" | "2207" | "2208" | "2209" | "2210" | "2211" | "2212" | "2213" | "2214" | "2215" | "2216" | "2217" | "2218" | "2219" | "2220" | "2221" | "2271" | "2402" | "2403" | "2404" | "2405" | "2406" | "2407" | "2408" | "2409" | "2410" | "2411" | "2412" | "2413" | "2414" | "2415" | "2416" | "2417" | "2418" | "2419" | "2420" | "2421" | "2422" | "2423" | "2424" | "2425" | "2426" | "2427" | "2428" | "2429" | "2430" | "2431" | "2432" | "2433" | "2434" | "2435" | "2436" | "2471" | "2472" | "2602" | "2603" | "2604" | "2605" | "2606" | "2607" | "2608" | "2609" | "2610" | "2611" | "2612" | "2613" | "2614" | "2615" | "2671" | "2802" | "2803" | "2804" | "2805" | "2806" | "2807" | "2808" | "2809" | "2810" | "2811" | "2812" | "2813" | "2814" | "2815" | "2816" | "2871" | "3002" | "3003" | "3004" | "3005" | "3006" | "3007" | "3008" | "3009" | "3010" | "3011" | "3012" | "3013" | "3014" | "3015" | "3016" | "3017" | "3018" | "3019" | "3020" | "3021" | "3022" | "3023" | "3025" | "3026" | "3027" | "3028" | "3029" | "3030" | "3031" | "3032" | "3033" | "3034" | "3035" | "3036" | "3037" | "3038" | "3039" | "3071" | "3072" | "3202" | "3203" | "3204" | "3205" | "3206" | "3207" | "3208" | "3209" | "3210" | "3211" | "3212" | "3213" | "3214" | "3215" | "3216" | "3217" | "3218" | "3219" | "3220" | "3271");
interface _TKodUS extends Primitive._string { content: TKodUS; }

/** Element będący numerem kwartału */
export type TKwartal = number;
type _TKwartal = Primitive._number;

/** Wartość kwotowa wykazana w zł i gr */
export type TKwota2 = number;
type _TKwota2 = Primitive._number;

/** Wartość kwotowa nieujemna wykazana w zł i gr */
export type TKwota2Nieujemna = number;
type _TKwota2Nieujemna = _TKwota2;

/** Wartość kwotowa wykazana w zł */
export type TKwotaC = number;
type _TKwotaC = Primitive._number;

/** Wartość kwotowa nieujemna wykazana w zł */
export type TKwotaCNieujemna = number;
type _TKwotaCNieujemna = _TKwotaC;

/** Typ określający nazwę miejscowości */
export type TMiejscowosc = string;
type _TMiejscowosc = Primitive._string;

/** Element będący numerem miesiąca */
export type TMiesiac = number;
type _TMiesiac = Primitive._number;

/** Liczby naturalne */
export type TNaturalny = number;
type _TNaturalny = Primitive._number;

/** Nazwisko */
export type TNazwisko = string;
type _TNazwisko = Primitive._string;

/** Numer akcyzowy */
export type TNrAKC = string;
type _TNrAKC = Primitive._string;

/** Numer budynku */
export type TNrBudynku = string;
type _TNrBudynku = _TZnakowy;

/** Numer dokumentu */
export type TNrDokumentu = string;
type _TNrDokumentu = _TZnakowy;

/** Numer dokumentu stwierdzającego tożsamość */
export type TNrDokumentuStwierdzajacegoTozsamosc = string;
type _TNrDokumentuStwierdzajacegoTozsamosc = Primitive._string;

/** Numer służący identyfikacji dla celów podatkowych */
export type TNrIdentyfikacjiPodatkowej = string;
type _TNrIdentyfikacjiPodatkowej = Primitive._string;

/** Numer Krajowego Rejestru Sądowego */
export type TNrKRS = string;
type _TNrKRS = Primitive._string;

/** Numer lokalu */
export type TNrLokalu = string;
type _TNrLokalu = _TZnakowy;

/** Identyfikator podatkowy NIP */
export type TNrNIP = string;
type _TNrNIP = Primitive._string;

/** Identyfikator podatkowy numer PESEL */
export type TNrPESEL = string;
type _TNrPESEL = Primitive._string;

/** Numer REGON */
export type TNrREGON = string;
type _TNrREGON = Primitive._string;

/** Podstawowy zestaw danych o osobie fizycznej */
interface _TOsobaFizyczna extends BaseType {
	AdresZamieszkania: TOsobaFizycznaAdresZamieszkaniaType;
	OsobaFizyczna: TIdentyfikatorOsobyFizycznej;
}
export interface TOsobaFizyczna extends _TOsobaFizyczna { constructor: { new(): TOsobaFizyczna }; }
export var TOsobaFizyczna: { new(): TOsobaFizyczna };

/** Podstawowy zestaw danych o osobie fizycznej z identyfikatorem NIP albo PESEL */
interface _TOsobaFizyczna1 extends BaseType {
	AdresZamieszkania: TOsobaFizyczna1AdresZamieszkaniaType;
	OsobaFizyczna: TIdentyfikatorOsobyFizycznej1;
}
export interface TOsobaFizyczna1 extends _TOsobaFizyczna1 { constructor: { new(): TOsobaFizyczna1 }; }
export var TOsobaFizyczna1: { new(): TOsobaFizyczna1 };

interface _TOsobaFizyczna1AdresZamieszkaniaType extends _TAdres {
	rodzajAdresu: string;
}
interface TOsobaFizyczna1AdresZamieszkaniaType extends _TOsobaFizyczna1AdresZamieszkaniaType { constructor: { new(): TOsobaFizyczna1AdresZamieszkaniaType }; }

/** Podstawowy zestaw danych o osobie fizycznej z identyfikatorem NIP */
interface _TOsobaFizyczna2 extends BaseType {
	AdresZamieszkania: TOsobaFizyczna2AdresZamieszkaniaType;
	OsobaFizyczna: TIdentyfikatorOsobyFizycznej2;
}
export interface TOsobaFizyczna2 extends _TOsobaFizyczna2 { constructor: { new(): TOsobaFizyczna2 }; }
export var TOsobaFizyczna2: { new(): TOsobaFizyczna2 };

interface _TOsobaFizyczna2AdresZamieszkaniaType extends _TAdres {
	rodzajAdresu: string;
}
interface TOsobaFizyczna2AdresZamieszkaniaType extends _TOsobaFizyczna2AdresZamieszkaniaType { constructor: { new(): TOsobaFizyczna2AdresZamieszkaniaType }; }

interface _TOsobaFizycznaAdresZamieszkaniaType extends _TAdres {
	rodzajAdresu: string;
}
interface TOsobaFizycznaAdresZamieszkaniaType extends _TOsobaFizycznaAdresZamieszkaniaType { constructor: { new(): TOsobaFizycznaAdresZamieszkaniaType }; }

/** Pełny zestaw danych o osobie fizycznej */
interface _TOsobaFizycznaPelna extends BaseType {
	AdresZamieszkania: TOsobaFizycznaPelnaAdresZamieszkaniaType;
	OsobaFizyczna: TIdentyfikatorOsobyFizycznejPelny;
}
export interface TOsobaFizycznaPelna extends _TOsobaFizycznaPelna { constructor: { new(): TOsobaFizycznaPelna }; }
export var TOsobaFizycznaPelna: { new(): TOsobaFizycznaPelna };

interface _TOsobaFizycznaPelnaAdresZamieszkaniaType extends _TAdres {
	rodzajAdresu: string;
}
interface TOsobaFizycznaPelnaAdresZamieszkaniaType extends _TOsobaFizycznaPelnaAdresZamieszkaniaType { constructor: { new(): TOsobaFizycznaPelnaAdresZamieszkaniaType }; }

/** Podstawowy zestaw danych o osobie niefizycznej */
interface _TOsobaNiefizyczna extends BaseType {
	AdresSiedziby: TOsobaNiefizycznaAdresSiedzibyType;
	OsobaNiefizyczna: TIdentyfikatorOsobyNiefizycznej;
}
export interface TOsobaNiefizyczna extends _TOsobaNiefizyczna { constructor: { new(): TOsobaNiefizyczna }; }
export var TOsobaNiefizyczna: { new(): TOsobaNiefizyczna };

interface _TOsobaNiefizycznaAdresSiedzibyType extends _TAdres {
	rodzajAdresu: string;
}
interface TOsobaNiefizycznaAdresSiedzibyType extends _TOsobaNiefizycznaAdresSiedzibyType { constructor: { new(): TOsobaNiefizycznaAdresSiedzibyType }; }

/** Pełny zestaw danych o osobie fizycznej lub niefizycznej */
interface _TOsobaNiefizycznaPelna extends BaseType {
	AdresSiedziby: TOsobaNiefizycznaPelnaAdresSiedzibyType;
	OsobaNiefizyczna: TIdentyfikatorOsobyNiefizycznejPelny;
}
export interface TOsobaNiefizycznaPelna extends _TOsobaNiefizycznaPelna { constructor: { new(): TOsobaNiefizycznaPelna }; }
export var TOsobaNiefizycznaPelna: { new(): TOsobaNiefizycznaPelna };

interface _TOsobaNiefizycznaPelnaAdresSiedzibyType extends _TAdres {
	rodzajAdresu: string;
}
interface TOsobaNiefizycznaPelnaAdresSiedzibyType extends _TOsobaNiefizycznaPelnaAdresSiedzibyType { constructor: { new(): TOsobaNiefizycznaPelnaAdresSiedzibyType }; }

/** Podstawowy zestaw danych o osobie fizycznej lub niefizycznej */
interface _TPodmiotDowolny extends _TPodmiotDowolnyBezAdresu {
	AdresZamieszkaniaSiedziby: TPodmiotDowolnyAdresZamieszkaniaSiedzibyType;
}
export interface TPodmiotDowolny extends _TPodmiotDowolny { constructor: { new(): TPodmiotDowolny }; }
export var TPodmiotDowolny: { new(): TPodmiotDowolny };

interface _TPodmiotDowolnyAdresZamieszkaniaSiedzibyType extends _TAdres {
	rodzajAdresu: string;
}
interface TPodmiotDowolnyAdresZamieszkaniaSiedzibyType extends _TPodmiotDowolnyAdresZamieszkaniaSiedzibyType { constructor: { new(): TPodmiotDowolnyAdresZamieszkaniaSiedzibyType }; }

/** Skrócony zestaw danych o osobie fizycznej lub niefizycznej */
interface _TPodmiotDowolnyBezAdresu extends BaseType {
	OsobaFizyczna: TIdentyfikatorOsobyFizycznej;
	OsobaNiefizyczna: TIdentyfikatorOsobyNiefizycznej;
}
export interface TPodmiotDowolnyBezAdresu extends _TPodmiotDowolnyBezAdresu { constructor: { new(): TPodmiotDowolnyBezAdresu }; }
export var TPodmiotDowolnyBezAdresu: { new(): TPodmiotDowolnyBezAdresu };

/** Skrócony zestaw danych o osobie fizycznej lub niefizycznej z identyfikatorem NIP albo PESEL */
interface _TPodmiotDowolnyBezAdresu1 extends BaseType {
	OsobaFizyczna: TIdentyfikatorOsobyFizycznej1;
	OsobaNiefizyczna: TIdentyfikatorOsobyNiefizycznej;
}
export interface TPodmiotDowolnyBezAdresu1 extends _TPodmiotDowolnyBezAdresu1 { constructor: { new(): TPodmiotDowolnyBezAdresu1 }; }
export var TPodmiotDowolnyBezAdresu1: { new(): TPodmiotDowolnyBezAdresu1 };

/** Skrócony zestaw danych o osobie fizycznej lub niefizycznej z identyfikatorem NIP */
interface _TPodmiotDowolnyBezAdresu2 extends BaseType {
	OsobaFizyczna: TIdentyfikatorOsobyFizycznej2;
	OsobaNiefizyczna: TIdentyfikatorOsobyNiefizycznej;
}
export interface TPodmiotDowolnyBezAdresu2 extends _TPodmiotDowolnyBezAdresu2 { constructor: { new(): TPodmiotDowolnyBezAdresu2 }; }
export var TPodmiotDowolnyBezAdresu2: { new(): TPodmiotDowolnyBezAdresu2 };

/** Pełny zestaw danych o osobie fizycznej lub niefizycznej */
interface _TPodmiotDowolnyPelny extends BaseType {
	AdresZamieszkaniaSiedziby: TPodmiotDowolnyPelnyAdresZamieszkaniaSiedzibyType;
	OsobaFizyczna: TIdentyfikatorOsobyFizycznejPelny;
	OsobaNiefizyczna: TIdentyfikatorOsobyNiefizycznejPelny;
}
export interface TPodmiotDowolnyPelny extends _TPodmiotDowolnyPelny { constructor: { new(): TPodmiotDowolnyPelny }; }
export var TPodmiotDowolnyPelny: { new(): TPodmiotDowolnyPelny };

interface _TPodmiotDowolnyPelnyAdresZamieszkaniaSiedzibyType extends _TAdres {
	rodzajAdresu: string;
}
interface TPodmiotDowolnyPelnyAdresZamieszkaniaSiedzibyType extends _TPodmiotDowolnyPelnyAdresZamieszkaniaSiedzibyType { constructor: { new(): TPodmiotDowolnyPelnyAdresZamieszkaniaSiedzibyType }; }

/** Wartość procentowa z dokładnością do 2 miejsc po przecinku */
export type TProcentowy = number;
type _TProcentowy = Primitive._number;

/** Oznaczenie roku */
export type TRok = string;
type _TRok = Primitive._string;

/** Liczby wykazywane z dokładnością do dwóch miejsc po przecinku */
export type TRzeczywisty = number;
type _TRzeczywisty = _TKwota2;

/** Typ znakowy ograniczony do 3500 znaków */
export type TTekstowy = string;
type _TTekstowy = Primitive._string;

/** Nazwa ulicy */
export type TUlica = string;
type _TUlica = _TZnakowy;

/** Pojedyncze pole wyboru */
export type TWybor1 = 1;
interface _TWybor1 extends Primitive._number { content: TWybor1; }

/** Podwójne pole wyboru */
export type TWybor1_2 = (1 | 2);
interface _TWybor1_2 extends Primitive._number { content: TWybor1_2; }

/** Potrójne pole wyboru */
export type TWybor1_3 = (1 | 2 | 3);
interface _TWybor1_3 extends Primitive._number { content: TWybor1_3; }

/** Typ znakowy ograniczony do jednej linii */
export type TZnakowy = string;
type _TZnakowy = Primitive._string;

export interface document extends BaseType {
}
export var document: document;

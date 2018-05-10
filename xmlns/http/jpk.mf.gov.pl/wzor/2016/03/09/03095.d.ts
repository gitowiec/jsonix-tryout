import * as Primitive from '../../../../../../xml-primitives';
import * as etd from '../../../../../crd.gov.pl/xml/schematy/dziedzinowe/mf/2016/01/25/eD/DefinicjeTypy';
import * as kck from '../../../../../crd.gov.pl/xml/schematy/dziedzinowe/mf/2013/05/23/eD/KodyCECHKRAJOW';

// Source files:
// file://./Schemat_JPK_FA(1)_v1-0.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
interface _JPKType extends BaseType {
	/** Na podstawie art.106 a-q ustawy z 11 marca 2004 r. o podatku od towarów i usług /Dz.U. z 2011 r. Nr 177, poz. 1054, z późn. zm./ */
	Faktura: JPKTypeFakturaType[];
	/** Sumy kontrolne dla faktur */
	FakturaCtrl: JPKTypeFakturaCtrlType;
	/** Szczegółowe pozycje faktur */
	FakturaWiersz: JPKTypeFakturaWierszType[];
	/** Sumy kontrolne dla wierszy faktur */
	FakturaWierszCtrl: JPKTypeFakturaWierszCtrlType;
	/** Nagłówek JPK_FA */
	Naglowek: JPKTypeNaglowekType;
	Podmiot1: JPKTypePodmiot1Type;
	/** Zestawienie stawek podatku, w okresie którego dotyczy JPK_FA */
	StawkiPodatku: JPKTypeStawkiPodatkuType;
}
interface JPKType extends _JPKType { constructor: { new(): JPKType }; }

interface _JPKTypeFakturaCtrlType extends BaseType {
	/** Liczba faktur, w okresie którego dotyczy JPK_FA */
	LiczbaFaktur: number;
	/** Łączna wartość kwot brutto faktur w okresie, którego dotyczy JPK_FA */
	WartoscFaktur: number;
}
interface JPKTypeFakturaCtrlType extends _JPKTypeFakturaCtrlType { constructor: { new(): JPKTypeFakturaCtrlType }; }

interface _JPKTypeFakturaType extends BaseType {
	/** Numer faktury korygowanej */
	NrFaKorygowanej?: string;
	/** Dla faktury korygującej - okres, do którego odnosi się udzielany opust lub obniżka, w przypadku gdy podatnik udziela opustu lub obniżki ceny w odniesieniu do wszystkich dostaw towarów lub usług dokonanych lub świadczonych na rzecz jednego odbiorcy w danym okresie */
	OkresFaKorygowanej?: string;
	/** Data wystawienia */
	P_1: Date;
	/** W przypadku świadczenia usług turystyki, dla których podstawę opodatkowania stanowi zgodnie z art. 119 ust. 1 kwota marży, faktura - w zakresie danych określonych w ust. 1 pkt 1-17 - powinna zawierać wyłącznie dane określone w ust. 1 pkt 1-8 i 15-17, a także wyrazy "procedura marży dla biur podróży", należy podać wartość "true"; w przeciwnym przypadku - wartość - "false" */
	P_106E_2: boolean;
	/** W przypadku dostawy towarów używanych, dzieł sztuki, przedmiotów kolekcjonerskich i antyków, dla których podstawę opodatkowania stanowi zgodnie z art. 120 ust. 4 i 5 marża, należy podać wartość "true"; w przeciwnym przypadku - wartość - "false" */
	P_106E_3?: boolean;
	/** Jeżeli pole P_106E_3 równa się wartości "true", należy podać wyrazy: "procedura marży - towary używane" lub "procedura marży - dzieła sztuki" lub "procedura marży - przedmioty kolekcjonerskie i antyki" */
	P_106E_3A?: string;
	/** Suma wartości sprzedaży netto ze stawką podstawową - aktualnie 23% albo 22%. */
	P_13_1?: number;
	/** Suma wartości sprzedaży netto ze stawką obniżoną pierwszą - aktualnie 8 % albo 7%. */
	P_13_2?: number;
	/** Suma wartości sprzedaży netto ze stawką obniżoną drugą - aktualnie 5%. */
	P_13_3?: number;
	/** Suma wartości sprzedaży netto ze stawką obniżoną trzecią - pole rezerwowe. */
	P_13_4?: number;
	/** Suma wartości sprzedaży netto ze stawką obniżoną czwartą - pole rezerwowe. */
	P_13_5?: number;
	/** Suma wartości sprzedaży netto ze stawką 0%. Pole opcjonalne dla przypadków określonych w art. 106e ust.2 i 3 ustawy (gdy przynajmniej jedno z pól P_106E_2 i P_106E_3 przyjmuje wartość "true"), a także art. 106e ust. 4 pkt 3 i ust. 5 pkt 1-3 ustawy. */
	P_13_6?: number;
	/** Suma wartości sprzedaży zwolnionej. Pole opcjonalne dla przypadków określonych w art. 106e ust.2 i 3 ustawy (gdy przynajmniej jedno z pól P_106E_2 i P_106E_3 przyjmuje wartość "true"), a także art. 106e ust. 4 pkt 3 i ust. 5 pkt 1-3 ustawy. */
	P_13_7?: number;
	/** Kwota podatku od sumy wartości sprzedaży netto ze stawką podstawową - aktualnie 23% albo 22%. */
	P_14_1?: number;
	/** Kwota podatku od sumy wartości sprzedaży netto ze stawką obniżoną - aktualnie 8% albo 7%. */
	P_14_2?: number;
	/** Kwota podatku od sumy wartości sprzedaży netto ze stawką obniżoną drugą - aktualnie 5%. */
	P_14_3?: number;
	/** Kwota podatku od sumy wartości sprzedaży netto ze stawką obniżoną trzecią - pole rezerwowe. */
	P_14_4?: number;
	/** Kwota podatku od sumy wartości sprzedaży netto ze stawką obniżoną czwartą - pole rezerwowe. */
	P_14_5?: number;
	/** Kwota należności ogółem */
	P_15: number;
	/** W przypadku dostawy towarów lub świadczenia usług, w odniesieniu do których obowiązek podatkowy powstaje zgodnie z art. 19a ust. 5 pkt 1 lub art. 21 ust. 1 - wyrazy "metoda kasowa", należy podać wartość "true"; w przeciwnym przypadku - wartość - "false" */
	P_16: boolean;
	/** W przypadku faktur, o których mowa w art. 106d ust. 1 - wyraz "samofakturowanie", należy podać wartość "true"; w przeciwnym przypadku - wartość - "false" */
	P_17: boolean;
	/** W przypadku dostawy towarów lub wykonania usługi, dla których obowiązanym do rozliczenia podatku, podatku od wartości dodanej lub podatku o podobnym charakterze jest nabywca towaru lub usługi - wyrazy "odwrotne obciążenie", należy podać wartość "true"; w przeciwnym przypadku - wartość - "false" */
	P_18: boolean;
	/** W przypadku dostawy towarów lub świadczenia usług zwolnionych od podatku na podstawie art. 43 ust. 1, art. 113 ust. 1 i 9 albo przepisów wydanych na podstawie art. 82 ust. 3 należy podać wartość "true"; w przeciwnym przypadku - wartość - "false" */
	P_19: boolean;
	/** Jeśli pole P_19 równa się "true" - należy wskazać przepis ustawy albo aktu wydanego na podstawie ustawy, na podstawie którego podatnik stosuje zwolnienie od podatku */
	P_19A?: string;
	/** Jeśli pole P_19 równa się "true" - należy wskazać przepis dyrektywy 2006/112/WE, który zwalnia od podatku taką dostawę towarów lub takie świadczenie usług */
	P_19B?: string;
	/** Jeśli pole P_19 równa się "true" - należy wskazać inną podstawę prawną wskazującą na to, że dostawa towarów lub świadczenie usług korzysta ze zwolnienia */
	P_19C?: string;
	/** W przypadku, o którym mowa w art. 106c ustawy należy podać wartość "true"; w przeciwnym przypadku - wartość - "false" */
	P_20: boolean;
	/** Jeśli pole P_20 równa się "true" - należy podać nazwę organu egzekucyjnego lub imię i nazwisko komornika sądowego */
	P_20A?: string;
	/** Jeśli pole P_20 równa się "true" - należy podać adres organu egzekucyjnego lub komornika sądowego */
	P_20B?: string;
	/** W przypadku faktur wystawianych w imieniu i na rzecz podatnika przez jego przedstawiciela podatkowego należy podać wartość "true"; w przeciwnym przypadku - wartość - "false" */
	P_21: boolean;
	/** Jeśli pole P_21 równa się "true" - należy podać nazwę lub imię i nazwisko przedstawiciela podatkowego */
	P_21A?: string;
	/** Jeśli pole P_21 równa się "true" - należy podać adres przedstawiciela podatkowego */
	P_21B?: string;
	/** Jeśli pole P_21 równa się "true" - należy podać numer przedstawiciela podatkowego, za pomocą którego jest on zidentyfikowany na potrzeby podatku */
	P_21C?: string;
	/** Data dopuszczenia nowego środka transportu do użytku */
	P_22A?: Date;
	/** Przebieg pojazdu - w przypadku pojazdów lądowych, o których mowa w art. 2 pkt 10 lit. a ustawy */
	P_22B?: string;
	/** Liczba godzin roboczych używania nowego środka transportu - w przypadku jednostek pływających, o których mowa w art. 2 pkt 10 lit. b, oraz statków powietrznych, o których mowa w art. 2 pkt 10 lit. c ustawy */
	P_22C?: string;
	/** W przypadku faktur wystawianych przez drugiego w kolejności podatnika, o którym mowa w art. 135 ust. 1 pkt 4 lit. b i c, w wewnątrzwspólnotowej transakcji trójstronnej (procedurze uproszczonej) - dane określone w art. 136, należy podać wartość "true"; w przeciwnym przypadku - wartość - "false" */
	P_23: boolean;
	/** Kolejny numer faktury, nadany w ramach jednej lub więcej serii, który w sposób jednoznaczny indentyfikuje fakturę */
	P_2A: string;
	/** Imię i nazwisko lub nazwa nabywcy towarów lub usług. Pole opcjonalne dla przypadku określonego w art. 106e ust. 5 pkt 3 ustawy. */
	P_3A?: string;
	/** Adres nabywcy. Pole opcjonalne dla przypadku określonego w art. 106e ust. 5 pkt 3 ustawy. */
	P_3B?: string;
	/** Imię i nazwisko lub nazwa sprzedawcy towarów lub usług */
	P_3C: string;
	/** Adres sprzedawcy */
	P_3D: string;
	/** Kod (prefiks) podatnika VAT UE dla przypadków określonych w art. 97 ust. 10 ustawy */
	P_4A?: kck.MSCountryCode_Type;
	/** Numer, za pomocą którego podatnik jest zidentyfikowany na potrzeby podatku, z zastrzeżeniem pkt 24 lit. a ustawy. Pole opcjonalne dla przypadku określonego w art. 106e ust. 4 pkt 2 ustawy. */
	P_4B?: string;
	/** Kod (prefiks) nabywcy - podatnika VAT UE dla przypadków określonych w art. 97 ust. 10 ustawy */
	P_5A?: kck.MSCountryCode_Type;
	/** Numer, za pomocą którego nabywca towarów lub usług jest identyfikowany dla podatku lub podatku od wartości dodanej, pod którym otrzymał on towary lub usługi, z zastrzeżeniem pkt 24 lit. b ustawy. Pole opcjonalne dla przypadku określonego w art. 106e ust. 5 pkt 2 ustawy. */
	P_5B?: string;
	/** Data dokonania lub zakończenia dostawy towarów lub wykonania usługi lub data otrzymania zapłaty, o której mowa w art. 106b ust. 1 pkt 4, o ile taka data jest określona i różni się od daty wystawienia faktury */
	P_6?: Date;
	/** Przyczyna korekty dla faktur korygujących */
	PrzyczynaKorekty?: string;
	/** Rodzaj faktury: VAT - podstawowa; KOREKTA - korygująca; ZAL - faktura dokumentująca otrzymanie zapłaty lub jej części przed dokonaniem czynności (art.106b ust. 1 pkt 4 ustawy); POZ - pozostałe */
	RodzajFaktury: JPKTypeFakturaTypeRodzajFakturyType;
	/** Dla faktury zaliczkowej - kwota podatku wyliczona według wzoru z art.106f ust. 1 pkt 3 ustawy */
	ZALPodatek?: number;
	/** Dla faktury zaliczkowej - otrzymana kwota zapłaty */
	ZALZaplata?: number;
}
interface JPKTypeFakturaType extends _JPKTypeFakturaType { constructor: { new(): JPKTypeFakturaType }; }

type JPKTypeFakturaTypeRodzajFakturyType = ("VAT" | "KOREKTA" | "ZAL" | "POZ");
interface _JPKTypeFakturaTypeRodzajFakturyType extends _TZnakowyJPK { content: JPKTypeFakturaTypeRodzajFakturyType; }

interface _JPKTypeFakturaWierszCtrlType extends BaseType {
	/** Liczba wierszy faktur, w okresie którego dotyczy JPK_FA */
	LiczbaWierszyFaktur: number;
	/** Łączna wartość kolumny P_11 tabeli FakturaWiersz w okresie, którego dotyczy JPK_FA */
	WartoscWierszyFaktur: number;
}
interface JPKTypeFakturaWierszCtrlType extends _JPKTypeFakturaWierszCtrlType { constructor: { new(): JPKTypeFakturaWierszCtrlType }; }

interface _JPKTypeFakturaWierszType extends BaseType {
	/** Kwoty wszelkich opustów lub obniżek cen, w tym w formie rabatu z tytułu wcześniejszej zapłaty, o ile nie zostały one uwzględnione w cenie jednostkowej netto. Pole opcjonalne dla przypadków określonych w art. 106e ust.2 i 3 ustawy (gdy przynajmniej jedno z pól P_106E_2 i P_106E_3 przyjmuje wartość "true") oraz dla przypadku określonego w art. 106e ust. 5 pkt 1 ustawy. */
	P_10?: number;
	/** Wartość dostarczonych towarów lub wykonanych usług, objętych transakcją, bez kwoty podatku (wartość sprzedaży netto). Pole opcjonalne dla przypadków określonych w art. 106e ust.2 i 3 ustawy (gdy przynajmniej jedno z pól P_106E_2 i P_106E_3 przyjmuje wartość "true") oraz dla przypadku określonego w art. 106e ust. 5 pkt 3 ustawy. */
	P_11?: number;
	/** W przypadku zastosowania art. 106e ust.7 i 8 ustawy, wartość sprzedaży brutto */
	P_11A?: number;
	/** Stawka podatku. Pole opcjonalne dla przypadków określonych w art. 106e ust.2 i 3 ustawy (gdy przynajmniej jedno z pól P_106E_2 i P_106E_3 przyjmuje wartość "true"), a także art. 106e ust.4 pkt 3 i ust. 5 pkt 1-3 ustawy. */
	P_12?: JPKTypeFakturaWierszTypeP_12Type;
	/** Kolejny numer faktury, nadany w ramach jednej lub więcej serii, który w sposób jednoznaczny indentyfikuje fakturę */
	P_2B: string;
	/** Nazwa (rodzaj) towaru lub usługi. Pole opcjonalne wyłącznie dla przypadku określonego w art 106j ust.3 pkt 2 ustawy (faktura korekta) */
	P_7?: string;
	/** Miara dostarczonych towarów lub zakres wykonanych usług. Pole opcjonalne dla przypadku określonego w art 106e ust. 5 pkt 3 ustawy. */
	P_8A?: string;
	/** Ilość (liczba) dostarczonych towarów lub zakres wykonanych usług. Pole opcjonalne dla przypadku określonego w art 106e ust. 5 pkt 3 ustawy. */
	P_8B?: number;
	/** Cena jednostkowa towaru lub usługi bez kwoty podatku (cena jednostkowa netto). Pole opcjonalne dla przypadków określonych w art. 106e ust.2 i 3 ustawy (gdy przynajmniej jedno z pól P_106E_2 i P_106E_3 przyjmuje wartość "true") oraz dla przypadku określonego w art 106e ust. 5 pkt 3 ustawy. */
	P_9A?: number;
	/** W przypadku zastosowania art.106e ustawy, cena wraz z kwotą podatku (cena jednostkowa brutto) */
	P_9B?: number;
}
interface JPKTypeFakturaWierszType extends _JPKTypeFakturaWierszType { constructor: { new(): JPKTypeFakturaWierszType }; }

type JPKTypeFakturaWierszTypeP_12Type = ("23" | "22" | "8" | "7" | "5" | "3" | "0" | "zw");
interface _JPKTypeFakturaWierszTypeP_12Type extends _TZnakowyJPK { content: JPKTypeFakturaWierszTypeP_12Type; }

interface _JPKTypeNaglowekType extends _TNaglowek {}
interface JPKTypeNaglowekType extends _JPKTypeNaglowekType { constructor: { new(): JPKTypeNaglowekType }; }

interface _JPKTypePodmiot1Type extends BaseType {
	/** Adres podmiotu */
	AdresPodmiotu: etd.TAdresPolski;
	/** Dane identyfikujące podmiot */
	IdentyfikatorPodmiotu: etd.TIdentyfikatorOsobyNiefizycznej;
}
interface JPKTypePodmiot1Type extends _JPKTypePodmiot1Type { constructor: { new(): JPKTypePodmiot1Type }; }

interface _JPKTypeStawkiPodatkuType extends BaseType {
	/** Wartość stawki podstawowej */
	Stawka1: number;
	/** Wartość stawki obniżonej pierwszej */
	Stawka2: number;
	/** Wartość stawki obniżonej drugiej */
	Stawka3: number;
	/** Wartość stawki obniżonej trzeciej - pole rezerwowe */
	Stawka4: number;
	/** Wartość stawki obniżonej czwartej - pole rezerwowe */
	Stawka5: number;
}
interface JPKTypeStawkiPodatkuType extends _JPKTypeStawkiPodatkuType { constructor: { new(): JPKTypeStawkiPodatkuType }; }

/** Określenie celu złożenia JPK */
export type TCelZlozenia = 1;
interface _TCelZlozenia extends Primitive._number { content: TCelZlozenia; }

/** Wykorzystywany do określenia ilości. Wartość numeryczna 22 znaki max, w tym 6 po przecinku. */
export type TIlosciJPK = number;
type _TIlosciJPK = Primitive._number;

/** Symbol wzoru formularza */
export type TKodFormularza = "JPK_FA";
interface _TKodFormularza extends Primitive._string { content: TKodFormularza; }

/** Wartość numeryczna 18 znaków max, w tym 2 znaki po przecinku */
export type TKwotowy = number;
type _TKwotowy = Primitive._number;

/** Nagłówek JPK_FA */
interface _TNaglowek extends BaseType {
	CelZlozenia: TCelZlozenia;
	/** Data końcowa okresu, którego dotyczy JPK_FA */
	DataDo: Date;
	/** Data początkowa okresu, którego dotyczy JPK_FA */
	DataOd: Date;
	/** Data i czas wytworzenia JPK_FA */
	DataWytworzeniaJPK: Date;
	/** Trzyliterowy kod lokalnej waluty (ISO-4217), domyślny dla wytworzonego JPK_FA */
	DomyslnyKodWaluty: kck.currCode_Type;
	KodFormularza: TNaglowekKodFormularzaType;
	KodUrzedu: etd.TKodUS;
	WariantFormularza: TNaglowekWariantFormularzaType;
}
export interface TNaglowek extends _TNaglowek { constructor: { new(): TNaglowek }; }
export var TNaglowek: { new(): TNaglowek };

interface _TNaglowekKodFormularzaType extends _TKodFormularza {
	kodSystemowy: string;
	wersjaSchemy: string;
}
interface TNaglowekKodFormularzaType extends _TNaglowekKodFormularzaType { constructor: { new(): TNaglowekKodFormularzaType }; }

type TNaglowekWariantFormularzaType = 1;
interface _TNaglowekWariantFormularzaType extends Primitive._number { content: TNaglowekWariantFormularzaType; }

/** Liczby naturalne większe od zera */
export type TNaturalnyJPK = number;
type _TNaturalnyJPK = etd._TNaturalny;

/** Typ znakowy ograniczony do 256 znaków */
export type TZnakowyJPK = string;
type _TZnakowyJPK = Primitive._string;

export interface document extends BaseType {
	/** Jednolity plik kontrolny dla faktur VAT */
	JPK: JPKType;
}
export var document: document;

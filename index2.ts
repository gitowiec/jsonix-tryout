import * as JPKNS from './xmlns/http/jpk.mf.gov.pl/wzor/2016/03/09/03095';
import { document, JPKType, TKodFormularza, TNaglowek } from "./xmlns/http/jpk.mf.gov.pl/wzor/2016/03/09/03095";
import { TNaglowekKodFormularzaType } from "./xmlns/http/jpk.mf.gov.pl/wzor/2016/03/09/03095";


// const dok: document;

// dok.JPK.Faktura[0].


const doc: document = {
    JPK: {
        Naglowek: {
            CelZlozenia: 1,
            DataDo: new Date(),
            DataOd: new Date(),
            DataWytworzeniaJPK: new Date(),
            DomyslnyKodWaluty: 'PLN',
            KodFormularza: {
                kodSystemowy: '0',
                wersjaSchemy: '1'
            },
            KodUrzedu: '0202',
            WariantFormularza: 1,
            _exists: true,
            _namespace: '',
            // constructor: () => doc
        },
        Faktura: [{_exists: true}],
        FakturaCtrl: [{_exists: true}],
        FakturaWiersz: [{_exists: true}],
        FakturaWierszCtrl: [{_exists: true}],
        Podmiot1: {_exists: true},
        StawkiPodatku: {_exists: true},
        _namespace: '',
        _exists: true
    },
    _exists: true,
    _namespace: true
};


// class KodFormularza implements TNaglowekKodFormularzaType {
//     content: "JPK_FA";
//     kodSystemowy: '';
//     wersjaSchemy: '';
//     _exists: true;
//     _namespace: '';
//
// }

// const kod = new KodFormularza();
//
// const Naglowek: TNaglowek = {
//     DataDo: new Date(),
//     DataOd: new Date(),
//     CelZlozenia: 1,
//     WariantFormularza: 1,
//     DataWytworzeniaJPK: new Date(),
//     DomyslnyKodWaluty: "PLN",
//     KodFormularza
//
// }


// const JPK: JPKType = {
//     Naglowek
// }
//
//


import * as JPKNS from './xmlns/http/jpk.mf.gov.pl/wzor/2016/03/09/03095'
import {document, JPKType, TKodFormularza, TNaglowek} from "./xmlns/http/jpk.mf.gov.pl/wzor/2016/03/09/03095";
import {TNaglowekKodFormularzaType} from "./xmlns/http/jpk.mf.gov.pl/wzor/2016/03/09/03095";


class KodFormularza implements TNaglowekKodFormularzaType {
    content: "JPK_FA";
    kodSystemowy: '';
    wersjaSchemy: '';
    _exists: true;
    _namespace: '';

}

const kod = new KodFormularza();

const Naglowek: TNaglowek = {
    DataDo: new Date(),
    DataOd: new Date(),
    CelZlozenia: 1,
    WariantFormularza: 1,
    DataWytworzeniaJPK: new Date(),
    DomyslnyKodWaluty: "PLN",
    KodFormularza

}


const JPK: JPKType = {
    Naglowek
}


const doc: document = {
    JPK
}

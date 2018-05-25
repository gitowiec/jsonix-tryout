import * as JPK from './xmlns/http/jpk.mf.gov.pl/wzor/2016/03/09/03095'
import {JPKType} from "./xmlns/http/jpk.mf.gov.pl/wzor/2016/03/09/03095";


const Naglowek = {
    DataDo: new Date(),
    DataOd: new Date(),
    CelZlozenia: 1,
    WariantFormularza: 1,
    DataWytworzeniaJPK: new Date(),
    DomyslnyKodWaluty: "PLN",
    KodFormularza: {
        content: "JPK_FA",
        kodSystemowy:
    }

}


const JPK: JPKType = {
    Naglowek
}


const doc: JPK.document = {
    JPK
}

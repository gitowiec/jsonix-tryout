"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Jsonix = require('jsonix').Jsonix;
const JPK = require('./mappings/JPK').JPK;
var format = require('xml-formatter');
// JPKTypy.
/**
 *
 * https://www.npmjs.com/package/cxsd
 *
 * https://github.com/highsource/jsonix-schema-compiler/issues/51
 *
 * https://github.com/highsource/jsonix-schema-compiler/wiki/EnumMemberSizeCap-Limit
 * https://github.com/highsource/jsonix-schema-compiler/wiki/Command-Line-Usage
 * https://github.com/highsource/jsonix-schema-compiler/issues/81
 *
 *
 * https://github.com/charto/cxsd/issues/19
 * ./node_modules/.bin/cxsd file://./Schemat_JPK_FA\(1\)_v1-0.xsd
 *
 * java --add-modules java.xml.bind -jar node_modules/jsonix/lib/jsonix-schema-compiler-full.jar -d mappings -p JPK Schemat_JPK_FA\(1\)_v1-0.xsd -b bindings.xjb
 *
 */
// console.log(JPK);
const value = {
    naglowek: {},
    podmiot1: {
        identyfikatorPodmiotu: {
            nip: "3213213213",
            pelnaNazwa: "dsadas adas Z dsadsa dsadsad",
            regon: "32123213333"
        },
        adresPodmiotu: {
            kodKraju: 'PL'
        }
    },
    faktura: [
        {
            "p1": "2018-01-12",
            "p2A": "FV SP / 198 / 01 / 2018",
            "p3A": "rewrwer erwerw-r  rew",
            "p3B": "dsfdsfgfdh dfsfds f sdfds",
            "p3C": "zzzzzz",
            "p3D": "eeeee",
            "p4B": "1232132133",
            "p5B": "1232132133",
            "p6": "2018-01-10",
            "p131": "5316.00",
            "p141": "1222.68",
            "p132": "0.00",
            "p142": "0.00",
            "p133": "0.00",
            "p143": "0.00",
            "p135": "0.00",
            "p145": "0.00",
            "p136": "0.00",
            "p137": "0.00",
            "p15": "6538.68",
            "p16": "false",
            "p17": "false",
            "p18": "false",
            "p19": "false",
            "p20": "false",
            "p21": "false",
            "p23": "false",
            "p106E2": "false",
            "p106E3": "false",
            "rodzajFaktury": "VAT"
        }
    ]
};
const context = new Jsonix.Context([JPK], {
    namespacePrefixes: {
        "http://jpk.mf.gov.pl/wzor/2016/03/09/03095/": "",
        "http://crd.gov.pl/xml/schematy/dziedzinowe/mf/2016/01/25/eD/DefinicjeTypy/": "ns2"
    }
});
const marshaller = context.createMarshaller();
const result = marshaller.marshalString({
    JPK: value
});
console.log(format(result));

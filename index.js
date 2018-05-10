const Jsonix = require('jsonix').Jsonix;
// import * as Jsonix from 'jsonix';
const JPK = require('./mappings/JPK');
// import {JPK} from './mappings/JPK'
// console.log(JPK);
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






const value = {
    Naglowek: {},
    Podmiot1: {
        IdentyfikatorPodmiotu: {
            NIP       : 3213213213,
            PelnaNazwa: 'dsadas adas Z dsadsa dsadsad',
            REGON     : 32123213333
        },
        AdresPodmiotu        : {
            KodKraju: 'PL'
        }
    },
    Faktura : [
        {
            "P_1"          : "2018-01-12",
            "P_2A"         : "FV SP / 198 / 01 / 2018",
            "P_3A"         : "rewrwer erwerw-r  rew",
            "P_3B"         : "dsfdsfgfdh dfsfds f sdfds",
            "P_3C"         : "zzzzzz",
            "P_3D"         : "eeeee",
            "P_4B"         : "1232132133",
            "P_5B"         : "1232132133",
            "P_6"          : "2018-01-10",
            "P_13_1"       : "5316.00",
            "P_14_1"       : "1222.68",
            "P_13_2"       : "0.00",
            "P_14_2"       : "0.00",
            "P_13_3"       : "0.00",
            "P_14_3"       : "0.00",
            "P_13_5"       : "0.00",
            "P_14_5"       : "0.00",
            "P_13_6"       : "0.00",
            "P_13_7"       : "0.00",
            "P_15"         : "6538.68",
            "P_16"         : "false",
            "P_17"         : "false",
            "P_18"         : "false",
            "P_19"         : "false",
            "P_20"         : "false",
            "P_21"         : "false",
            "P_23"         : "false",
            "P_106E_2"     : "false",
            "P_106E_3"     : "false",
            "RodzajFaktury": "VAT"
        }
    ]
}

const context = new Jsonix.Context([JPK]);

const marshaller = context.createMarshaller();
const doc = marshaller.marshalDocument({
    JPK: {}
});

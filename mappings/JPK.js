var JPK_Module_Factory = function () {
  var JPK = {
    name: 'JPK',
    defaultElementNamespaceURI: 'http:\/\/jpk.mf.gov.pl\/wzor\/2016\/03\/09\/03095\/',
    typeInfos: [
        {
        localName: 'TIdentyfikatorOsobyFizycznej',
        typeName: {
          namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/',
          localPart: 'TIdentyfikatorOsobyFizycznej'
        },
        propertyInfos: [
            {
            name: 'nip',
            required: true,
            elementName: {
              localPart: 'NIP',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            }
          }, {
            name: 'imiePierwsze',
            required: true,
            elementName: {
              localPart: 'ImiePierwsze',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'nazwisko',
            required: true,
            elementName: {
              localPart: 'Nazwisko',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'dataUrodzenia',
            required: true,
            elementName: {
              localPart: 'DataUrodzenia',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Date'
          }, {
            name: 'pesel',
            elementName: {
              localPart: 'PESEL',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            }
          }]
      }, {
        localName: 'TOsobaFizyczna2',
        typeName: {
          namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/',
          localPart: 'TOsobaFizyczna2'
        },
        propertyInfos: [{
            name: 'osobaFizyczna',
            required: true,
            elementName: {
              localPart: 'OsobaFizyczna',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TIdentyfikatorOsobyFizycznej2'
          }, {
            name: 'adresZamieszkania',
            required: true,
            elementName: {
              localPart: 'AdresZamieszkania',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TOsobaFizyczna2.AdresZamieszkania'
          }]
      }, {
        localName: 'TIdentyfikatorOsobyNiefizycznej',
        typeName: {
          namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/',
          localPart: 'TIdentyfikatorOsobyNiefizycznej'
        },
        propertyInfos: [{
            name: 'nip',
            required: true,
            elementName: {
              localPart: 'NIP',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            }
          }, {
            name: 'pelnaNazwa',
            required: true,
            elementName: {
              localPart: 'PelnaNazwa',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            }
          }, {
            name: 'regon',
            elementName: {
              localPart: 'REGON',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            }
          }]
      }, {
        localName: 'TPodmiotDowolny',
        typeName: {
          namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/',
          localPart: 'TPodmiotDowolny'
        },
        baseTypeInfo: '.TPodmiotDowolnyBezAdresu',
        propertyInfos: [{
            name: 'adresZamieszkaniaSiedziby',
            required: true,
            elementName: {
              localPart: 'AdresZamieszkaniaSiedziby',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TPodmiotDowolny.AdresZamieszkaniaSiedziby'
          }]
      }, {
        localName: 'TNaglowek.KodFormularza',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'kodSystemowy',
            required: true,
            attributeName: {
              localPart: 'kodSystemowy'
            },
            type: 'attribute'
          }, {
            name: 'wersjaSchemy',
            required: true,
            attributeName: {
              localPart: 'wersjaSchemy'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'JPK.FakturaWierszCtrl',
        typeName: null,
        propertyInfos: [{
            name: 'liczbaWierszyFaktur',
            required: true,
            elementName: 'LiczbaWierszyFaktur',
            typeInfo: 'NonNegativeInteger'
          }, {
            name: 'wartoscWierszyFaktur',
            required: true,
            elementName: 'WartoscWierszyFaktur',
            typeInfo: 'Decimal'
          }]
      }, {
        localName: 'TIdentyfikatorOsobyFizycznejPelny',
        typeName: {
          namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/',
          localPart: 'TIdentyfikatorOsobyFizycznejPelny'
        },
        propertyInfos: [{
            name: 'nip',
            elementName: {
              localPart: 'NIP',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            }
          }, {
            name: 'imiePierwsze',
            required: true,
            elementName: {
              localPart: 'ImiePierwsze',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'nazwisko',
            required: true,
            elementName: {
              localPart: 'Nazwisko',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'dataUrodzenia',
            required: true,
            elementName: {
              localPart: 'DataUrodzenia',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Date'
          }, {
            name: 'imieOjca',
            required: true,
            elementName: {
              localPart: 'ImieOjca',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'imieMatki',
            required: true,
            elementName: {
              localPart: 'ImieMatki',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'pesel',
            required: true,
            elementName: {
              localPart: 'PESEL',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            }
          }]
      }, {
        localName: 'TAdresZagraniczny',
        typeName: {
          namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/',
          localPart: 'TAdresZagraniczny'
        },
        propertyInfos: [{
            name: 'kodKraju',
            required: true,
            elementName: {
              localPart: 'KodKraju',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            }
          }, {
            name: 'kodPocztowy',
            elementName: {
              localPart: 'KodPocztowy',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'miejscowosc',
            required: true,
            elementName: {
              localPart: 'Miejscowosc',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'ulica',
            elementName: {
              localPart: 'Ulica',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'nrDomu',
            elementName: {
              localPart: 'NrDomu',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'nrLokalu',
            elementName: {
              localPart: 'NrLokalu',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }]
      }, {
        localName: 'TOsobaNiefizycznaPelna.AdresSiedziby',
        typeName: null,
        baseTypeInfo: '.TAdres',
        propertyInfos: [{
            name: 'rodzajAdresu',
            required: true,
            attributeName: {
              localPart: 'rodzajAdresu'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'JPK.Naglowek',
        typeName: null,
        baseTypeInfo: '.TNaglowek'
      }, {
        localName: 'TOsobaFizyczna1.AdresZamieszkania',
        typeName: null,
        baseTypeInfo: '.TAdres',
        propertyInfos: [{
            name: 'rodzajAdresu',
            required: true,
            attributeName: {
              localPart: 'rodzajAdresu'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TOsobaFizyczna1',
        typeName: {
          namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/',
          localPart: 'TOsobaFizyczna1'
        },
        propertyInfos: [{
            name: 'osobaFizyczna',
            required: true,
            elementName: {
              localPart: 'OsobaFizyczna',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TIdentyfikatorOsobyFizycznej1'
          }, {
            name: 'adresZamieszkania',
            required: true,
            elementName: {
              localPart: 'AdresZamieszkania',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TOsobaFizyczna1.AdresZamieszkania'
          }]
      }, {
        localName: 'TIdentyfikatorOsobyNiefizycznejZagranicznej',
        typeName: {
          namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/',
          localPart: 'TIdentyfikatorOsobyNiefizycznejZagranicznej'
        },
        propertyInfos: [{
            name: 'pelnaNazwa',
            required: true,
            elementName: {
              localPart: 'PelnaNazwa',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            }
          }, {
            name: 'skroconaNazwa',
            elementName: {
              localPart: 'SkroconaNazwa',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            }
          }, {
            name: 'nip',
            elementName: {
              localPart: 'NIP',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            }
          }]
      }, {
        localName: 'TPodmiotDowolnyBezAdresu2',
        typeName: {
          namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/',
          localPart: 'TPodmiotDowolnyBezAdresu2'
        },
        propertyInfos: [{
            name: 'osobaFizyczna',
            required: true,
            elementName: {
              localPart: 'OsobaFizyczna',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TIdentyfikatorOsobyFizycznej2'
          }, {
            name: 'osobaNiefizyczna',
            required: true,
            elementName: {
              localPart: 'OsobaNiefizyczna',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TIdentyfikatorOsobyNiefizycznej'
          }]
      }, {
        localName: 'TOsobaFizyczna',
        typeName: {
          namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/',
          localPart: 'TOsobaFizyczna'
        },
        propertyInfos: [{
            name: 'osobaFizyczna',
            required: true,
            elementName: {
              localPart: 'OsobaFizyczna',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TIdentyfikatorOsobyFizycznej'
          }, {
            name: 'adresZamieszkania',
            required: true,
            elementName: {
              localPart: 'AdresZamieszkania',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TOsobaFizyczna.AdresZamieszkania'
          }]
      }, {
        localName: 'TPodmiotDowolnyBezAdresu',
        typeName: {
          namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/',
          localPart: 'TPodmiotDowolnyBezAdresu'
        },
        propertyInfos: [{
            name: 'osobaFizyczna',
            required: true,
            elementName: {
              localPart: 'OsobaFizyczna',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TIdentyfikatorOsobyFizycznej'
          }, {
            name: 'osobaNiefizyczna',
            required: true,
            elementName: {
              localPart: 'OsobaNiefizyczna',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TIdentyfikatorOsobyNiefizycznej'
          }]
      }, {
        localName: 'TOsobaNiefizyczna.AdresSiedziby',
        typeName: null,
        baseTypeInfo: '.TAdres',
        propertyInfos: [{
            name: 'rodzajAdresu',
            required: true,
            attributeName: {
              localPart: 'rodzajAdresu'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'JPK.Faktura',
        typeName: null,
        propertyInfos: [{
            name: 'p1',
            required: true,
            elementName: 'P_1',
            typeInfo: 'Date'
          }, {
            name: 'p2A',
            required: true,
            elementName: 'P_2A',
            typeInfo: 'Token'
          }, {
            name: 'p3A',
            elementName: 'P_3A',
            typeInfo: 'Token'
          }, {
            name: 'p3B',
            elementName: 'P_3B',
            typeInfo: 'Token'
          }, {
            name: 'p3C',
            required: true,
            elementName: 'P_3C',
            typeInfo: 'Token'
          }, {
            name: 'p3D',
            required: true,
            elementName: 'P_3D',
            typeInfo: 'Token'
          }, {
            name: 'p4A',
            elementName: 'P_4A'
          }, {
            name: 'p4B',
            elementName: 'P_4B'
          }, {
            name: 'p5A',
            elementName: 'P_5A'
          }, {
            name: 'p5B',
            elementName: 'P_5B'
          }, {
            name: 'p6',
            elementName: 'P_6',
            typeInfo: 'Date'
          }, {
            name: 'p131',
            required: true,
            elementName: 'P_13_1',
            typeInfo: 'Decimal'
          }, {
            name: 'p141',
            required: true,
            elementName: 'P_14_1',
            typeInfo: 'Decimal'
          }, {
            name: 'p132',
            required: true,
            elementName: 'P_13_2',
            typeInfo: 'Decimal'
          }, {
            name: 'p142',
            required: true,
            elementName: 'P_14_2',
            typeInfo: 'Decimal'
          }, {
            name: 'p133',
            required: true,
            elementName: 'P_13_3',
            typeInfo: 'Decimal'
          }, {
            name: 'p143',
            required: true,
            elementName: 'P_14_3',
            typeInfo: 'Decimal'
          }, {
            name: 'p134',
            required: true,
            elementName: 'P_13_4',
            typeInfo: 'Decimal'
          }, {
            name: 'p144',
            required: true,
            elementName: 'P_14_4',
            typeInfo: 'Decimal'
          }, {
            name: 'p135',
            required: true,
            elementName: 'P_13_5',
            typeInfo: 'Decimal'
          }, {
            name: 'p145',
            required: true,
            elementName: 'P_14_5',
            typeInfo: 'Decimal'
          }, {
            name: 'p136',
            elementName: 'P_13_6',
            typeInfo: 'Decimal'
          }, {
            name: 'p137',
            elementName: 'P_13_7',
            typeInfo: 'Decimal'
          }, {
            name: 'p15',
            required: true,
            elementName: 'P_15',
            typeInfo: 'Decimal'
          }, {
            name: 'p16',
            required: true,
            elementName: 'P_16',
            typeInfo: 'Boolean'
          }, {
            name: 'p17',
            required: true,
            elementName: 'P_17',
            typeInfo: 'Boolean'
          }, {
            name: 'p18',
            required: true,
            elementName: 'P_18',
            typeInfo: 'Boolean'
          }, {
            name: 'p19',
            required: true,
            elementName: 'P_19',
            typeInfo: 'Boolean'
          }, {
            name: 'p19A',
            elementName: 'P_19A',
            typeInfo: 'Token'
          }, {
            name: 'p19B',
            elementName: 'P_19B',
            typeInfo: 'Token'
          }, {
            name: 'p19C',
            elementName: 'P_19C',
            typeInfo: 'Token'
          }, {
            name: 'p20',
            required: true,
            elementName: 'P_20',
            typeInfo: 'Boolean'
          }, {
            name: 'p20A',
            required: true,
            elementName: 'P_20A',
            typeInfo: 'Token'
          }, {
            name: 'p20B',
            required: true,
            elementName: 'P_20B',
            typeInfo: 'Token'
          }, {
            name: 'p21',
            required: true,
            elementName: 'P_21',
            typeInfo: 'Boolean'
          }, {
            name: 'p21A',
            required: true,
            elementName: 'P_21A',
            typeInfo: 'Token'
          }, {
            name: 'p21B',
            required: true,
            elementName: 'P_21B',
            typeInfo: 'Token'
          }, {
            name: 'p21C',
            required: true,
            elementName: 'P_21C',
            typeInfo: 'Token'
          }, {
            name: 'p22A',
            required: true,
            elementName: 'P_22A',
            typeInfo: 'Date'
          }, {
            name: 'p22B',
            elementName: 'P_22B',
            typeInfo: 'Token'
          }, {
            name: 'p22C',
            elementName: 'P_22C',
            typeInfo: 'Token'
          }, {
            name: 'p23',
            required: true,
            elementName: 'P_23',
            typeInfo: 'Boolean'
          }, {
            name: 'p106E2',
            required: true,
            elementName: 'P_106E_2',
            typeInfo: 'Boolean'
          }, {
            name: 'p106E3',
            required: true,
            elementName: 'P_106E_3',
            typeInfo: 'Boolean'
          }, {
            name: 'p106E3A',
            elementName: 'P_106E_3A',
            typeInfo: 'Token'
          }, {
            name: 'rodzajFaktury',
            required: true,
            elementName: 'RodzajFaktury'
          }, {
            name: 'przyczynaKorekty',
            required: true,
            elementName: 'PrzyczynaKorekty',
            typeInfo: 'Token'
          }, {
            name: 'nrFaKorygowanej',
            required: true,
            elementName: 'NrFaKorygowanej',
            typeInfo: 'Token'
          }, {
            name: 'okresFaKorygowanej',
            required: true,
            elementName: 'OkresFaKorygowanej',
            typeInfo: 'Token'
          }, {
            name: 'zalZaplata',
            required: true,
            elementName: 'ZALZaplata',
            typeInfo: 'Decimal'
          }, {
            name: 'zalPodatek',
            required: true,
            elementName: 'ZALPodatek',
            typeInfo: 'Decimal'
          }, {
            name: 'typ',
            required: true,
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'typ'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'JPK.StawkiPodatku',
        typeName: null,
        propertyInfos: [{
            name: 'stawka1',
            required: true,
            elementName: 'Stawka1',
            typeInfo: 'Decimal'
          }, {
            name: 'stawka2',
            required: true,
            elementName: 'Stawka2',
            typeInfo: 'Decimal'
          }, {
            name: 'stawka3',
            required: true,
            elementName: 'Stawka3',
            typeInfo: 'Decimal'
          }, {
            name: 'stawka4',
            required: true,
            elementName: 'Stawka4',
            typeInfo: 'Decimal'
          }, {
            name: 'stawka5',
            required: true,
            elementName: 'Stawka5',
            typeInfo: 'Decimal'
          }]
      }, {
        localName: 'TAdres',
        typeName: {
          namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/',
          localPart: 'TAdres'
        },
        propertyInfos: [{
            name: 'adresPol',
            required: true,
            elementName: {
              localPart: 'AdresPol',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TAdresPolski'
          }, {
            name: 'adresZagr',
            required: true,
            elementName: {
              localPart: 'AdresZagr',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TAdresZagraniczny'
          }]
      }, {
        localName: 'JPK.FakturaCtrl',
        typeName: null,
        propertyInfos: [{
            name: 'liczbaFaktur',
            required: true,
            elementName: 'LiczbaFaktur',
            typeInfo: 'NonNegativeInteger'
          }, {
            name: 'wartoscFaktur',
            required: true,
            elementName: 'WartoscFaktur',
            typeInfo: 'Decimal'
          }]
      }, {
        localName: 'TOsobaNiefizycznaPelna',
        typeName: {
          namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/',
          localPart: 'TOsobaNiefizycznaPelna'
        },
        propertyInfos: [{
            name: 'osobaNiefizyczna',
            required: true,
            elementName: {
              localPart: 'OsobaNiefizyczna',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TIdentyfikatorOsobyNiefizycznejPelny'
          }, {
            name: 'adresSiedziby',
            required: true,
            elementName: {
              localPart: 'AdresSiedziby',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TOsobaNiefizycznaPelna.AdresSiedziby'
          }]
      }, {
        localName: 'TIdentyfikatorOsobyFizycznej2',
        typeName: {
          namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/',
          localPart: 'TIdentyfikatorOsobyFizycznej2'
        },
        propertyInfos: [{
            name: 'nip',
            required: true,
            elementName: {
              localPart: 'NIP',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            }
          }, {
            name: 'imiePierwsze',
            required: true,
            elementName: {
              localPart: 'ImiePierwsze',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'nazwisko',
            required: true,
            elementName: {
              localPart: 'Nazwisko',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'dataUrodzenia',
            required: true,
            elementName: {
              localPart: 'DataUrodzenia',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Date'
          }]
      }, {
        localName: 'TOsobaFizyczna2.AdresZamieszkania',
        typeName: null,
        baseTypeInfo: '.TAdres',
        propertyInfos: [{
            name: 'rodzajAdresu',
            required: true,
            attributeName: {
              localPart: 'rodzajAdresu'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TNaglowek',
        propertyInfos: [{
            name: 'kodFormularza',
            required: true,
            elementName: 'KodFormularza',
            typeInfo: '.TNaglowek.KodFormularza'
          }, {
            name: 'wariantFormularza',
            required: true,
            elementName: 'WariantFormularza',
            typeInfo: 'Byte'
          }, {
            name: 'celZlozenia',
            required: true,
            elementName: 'CelZlozenia',
            typeInfo: 'Byte'
          }, {
            name: 'dataWytworzeniaJPK',
            required: true,
            elementName: 'DataWytworzeniaJPK',
            typeInfo: 'DateTime'
          }, {
            name: 'dataOd',
            required: true,
            elementName: 'DataOd',
            typeInfo: 'Date'
          }, {
            name: 'dataDo',
            required: true,
            elementName: 'DataDo',
            typeInfo: 'Date'
          }, {
            name: 'domyslnyKodWaluty',
            required: true,
            elementName: 'DomyslnyKodWaluty'
          }, {
            name: 'kodUrzedu',
            required: true,
            elementName: 'KodUrzedu'
          }]
      }, {
        localName: 'TPodmiotDowolnyPelny.AdresZamieszkaniaSiedziby',
        typeName: null,
        baseTypeInfo: '.TAdres',
        propertyInfos: [{
            name: 'rodzajAdresu',
            required: true,
            attributeName: {
              localPart: 'rodzajAdresu'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'JPK.Podmiot1',
        typeName: null,
        propertyInfos: [{
            name: 'identyfikatorPodmiotu',
            required: true,
            elementName: 'IdentyfikatorPodmiotu',
            typeInfo: '.TIdentyfikatorOsobyNiefizycznej'
          }, {
            name: 'adresPodmiotu',
            required: true,
            elementName: 'AdresPodmiotu',
            typeInfo: '.TAdresPolski'
          }]
      }, {
        localName: 'TIdentyfikatorOsobyNiefizycznejPelny',
        typeName: {
          namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/',
          localPart: 'TIdentyfikatorOsobyNiefizycznejPelny'
        },
        propertyInfos: [{
            name: 'nip',
            elementName: {
              localPart: 'NIP',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            }
          }, {
            name: 'pelnaNazwa',
            required: true,
            elementName: {
              localPart: 'PelnaNazwa',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            }
          }, {
            name: 'skroconaNazwa',
            required: true,
            elementName: {
              localPart: 'SkroconaNazwa',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            }
          }, {
            name: 'regon',
            required: true,
            elementName: {
              localPart: 'REGON',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            }
          }]
      }, {
        localName: 'JPK',
        typeName: null,
        propertyInfos: [{
            name: 'naglowek',
            required: true,
            elementName: 'Naglowek',
            typeInfo: '.JPK.Naglowek'
          }, {
            name: 'podmiot1',
            required: true,
            elementName: 'Podmiot1',
            typeInfo: '.JPK.Podmiot1'
          }, {
            name: 'faktura',
            required: true,
            collection: true,
            elementName: 'Faktura',
            typeInfo: '.JPK.Faktura'
          }, {
            name: 'fakturaCtrl',
            required: true,
            elementName: 'FakturaCtrl',
            typeInfo: '.JPK.FakturaCtrl'
          }, {
            name: 'stawkiPodatku',
            required: true,
            elementName: 'StawkiPodatku',
            typeInfo: '.JPK.StawkiPodatku'
          }, {
            name: 'fakturaWiersz',
            required: true,
            collection: true,
            elementName: 'FakturaWiersz',
            typeInfo: '.JPK.FakturaWiersz'
          }, {
            name: 'fakturaWierszCtrl',
            required: true,
            elementName: 'FakturaWierszCtrl',
            typeInfo: '.JPK.FakturaWierszCtrl'
          }]
      }, {
        localName: 'TPodmiotDowolnyPelny',
        typeName: {
          namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/',
          localPart: 'TPodmiotDowolnyPelny'
        },
        propertyInfos: [{
            name: 'osobaFizyczna',
            required: true,
            elementName: {
              localPart: 'OsobaFizyczna',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TIdentyfikatorOsobyFizycznejPelny'
          }, {
            name: 'osobaNiefizyczna',
            required: true,
            elementName: {
              localPart: 'OsobaNiefizyczna',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TIdentyfikatorOsobyNiefizycznejPelny'
          }, {
            name: 'adresZamieszkaniaSiedziby',
            required: true,
            elementName: {
              localPart: 'AdresZamieszkaniaSiedziby',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TPodmiotDowolnyPelny.AdresZamieszkaniaSiedziby'
          }]
      }, {
        localName: 'TOsobaNiefizyczna',
        typeName: {
          namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/',
          localPart: 'TOsobaNiefizyczna'
        },
        propertyInfos: [{
            name: 'osobaNiefizyczna',
            required: true,
            elementName: {
              localPart: 'OsobaNiefizyczna',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TIdentyfikatorOsobyNiefizycznej'
          }, {
            name: 'adresSiedziby',
            required: true,
            elementName: {
              localPart: 'AdresSiedziby',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TOsobaNiefizyczna.AdresSiedziby'
          }]
      }, {
        localName: 'TIdentyfikatorOsobyFizycznej1',
        typeName: {
          namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/',
          localPart: 'TIdentyfikatorOsobyFizycznej1'
        },
        propertyInfos: [{
            name: 'nip',
            required: true,
            elementName: {
              localPart: 'NIP',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            }
          }, {
            name: 'pesel',
            required: true,
            elementName: {
              localPart: 'PESEL',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            }
          }, {
            name: 'imiePierwsze',
            required: true,
            elementName: {
              localPart: 'ImiePierwsze',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'nazwisko',
            required: true,
            elementName: {
              localPart: 'Nazwisko',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'dataUrodzenia',
            required: true,
            elementName: {
              localPart: 'DataUrodzenia',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Date'
          }]
      }, {
        localName: 'TOsobaFizyczna.AdresZamieszkania',
        typeName: null,
        baseTypeInfo: '.TAdres',
        propertyInfos: [{
            name: 'rodzajAdresu',
            required: true,
            attributeName: {
              localPart: 'rodzajAdresu'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TIdentyfikatorOsobyFizycznejZagranicznej',
        typeName: {
          namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/',
          localPart: 'TIdentyfikatorOsobyFizycznejZagranicznej'
        },
        propertyInfos: [{
            name: 'imiePierwsze',
            required: true,
            elementName: {
              localPart: 'ImiePierwsze',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'nazwisko',
            required: true,
            elementName: {
              localPart: 'Nazwisko',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'dataUrodzenia',
            required: true,
            elementName: {
              localPart: 'DataUrodzenia',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Date'
          }, {
            name: 'miejsceUrodzenia',
            required: true,
            elementName: {
              localPart: 'MiejsceUrodzenia',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'imieOjca',
            elementName: {
              localPart: 'ImieOjca',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'imieMatki',
            elementName: {
              localPart: 'ImieMatki',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'nip',
            elementName: {
              localPart: 'NIP',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            }
          }]
      }, {
        localName: 'TOsobaFizycznaPelna.AdresZamieszkania',
        typeName: null,
        baseTypeInfo: '.TAdres',
        propertyInfos: [{
            name: 'rodzajAdresu',
            required: true,
            attributeName: {
              localPart: 'rodzajAdresu'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TPodmiotDowolnyBezAdresu1',
        typeName: {
          namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/',
          localPart: 'TPodmiotDowolnyBezAdresu1'
        },
        propertyInfos: [{
            name: 'osobaFizyczna',
            required: true,
            elementName: {
              localPart: 'OsobaFizyczna',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TIdentyfikatorOsobyFizycznej1'
          }, {
            name: 'osobaNiefizyczna',
            required: true,
            elementName: {
              localPart: 'OsobaNiefizyczna',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TIdentyfikatorOsobyNiefizycznej'
          }]
      }, {
        localName: 'TOsobaFizycznaPelna',
        typeName: {
          namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/',
          localPart: 'TOsobaFizycznaPelna'
        },
        propertyInfos: [{
            name: 'osobaFizyczna',
            required: true,
            elementName: {
              localPart: 'OsobaFizyczna',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TIdentyfikatorOsobyFizycznejPelny'
          }, {
            name: 'adresZamieszkania',
            required: true,
            elementName: {
              localPart: 'AdresZamieszkania',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: '.TOsobaFizycznaPelna.AdresZamieszkania'
          }]
      }, {
        localName: 'TAdresPolski',
        typeName: {
          namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/',
          localPart: 'TAdresPolski'
        },
        propertyInfos: [{
            name: 'kodKraju',
            required: true,
            elementName: {
              localPart: 'KodKraju',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'NormalizedString'
          }, {
            name: 'wojewodztwo',
            required: true,
            elementName: {
              localPart: 'Wojewodztwo',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'powiat',
            required: true,
            elementName: {
              localPart: 'Powiat',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'gmina',
            required: true,
            elementName: {
              localPart: 'Gmina',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'ulica',
            elementName: {
              localPart: 'Ulica',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'nrDomu',
            required: true,
            elementName: {
              localPart: 'NrDomu',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'nrLokalu',
            elementName: {
              localPart: 'NrLokalu',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'miejscowosc',
            required: true,
            elementName: {
              localPart: 'Miejscowosc',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'kodPocztowy',
            required: true,
            elementName: {
              localPart: 'KodPocztowy',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }, {
            name: 'poczta',
            required: true,
            elementName: {
              localPart: 'Poczta',
              namespaceURI: 'http:\/\/crd.gov.pl\/xml\/schematy\/dziedzinowe\/mf\/2016\/01\/25\/eD\/DefinicjeTypy\/'
            },
            typeInfo: 'Token'
          }]
      }, {
        localName: 'TPodmiotDowolny.AdresZamieszkaniaSiedziby',
        typeName: null,
        baseTypeInfo: '.TAdres',
        propertyInfos: [{
            name: 'rodzajAdresu',
            required: true,
            attributeName: {
              localPart: 'rodzajAdresu'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'JPK.FakturaWiersz',
        typeName: null,
        propertyInfos: [{
            name: 'p2B',
            required: true,
            elementName: 'P_2B',
            typeInfo: 'Token'
          }, {
            name: 'p7',
            elementName: 'P_7',
            typeInfo: 'Token'
          }, {
            name: 'p8A',
            elementName: 'P_8A',
            typeInfo: 'Token'
          }, {
            name: 'p8B',
            elementName: 'P_8B',
            typeInfo: 'Decimal'
          }, {
            name: 'p9A',
            elementName: 'P_9A',
            typeInfo: 'Decimal'
          }, {
            name: 'p9B',
            elementName: 'P_9B',
            typeInfo: 'Decimal'
          }, {
            name: 'p10',
            elementName: 'P_10',
            typeInfo: 'Decimal'
          }, {
            name: 'p11',
            elementName: 'P_11',
            typeInfo: 'Decimal'
          }, {
            name: 'p11A',
            elementName: 'P_11A',
            typeInfo: 'Decimal'
          }, {
            name: 'p12',
            elementName: 'P_12'
          }, {
            name: 'typ',
            required: true,
            typeInfo: 'AnySimpleType',
            attributeName: {
              localPart: 'typ'
            },
            type: 'attribute'
          }]
      }, {
        type: 'enumInfo',
        localName: 'MSCurrCodeExPLNType',
        values: ['BGN', 'CZK', 'DKK', 'EEK', 'EUR', 'GBP', 'HRK', 'HUF', 'LTL', 'LVL', 'RON', 'SEK']
      }, {
        type: 'enumInfo',
        localName: 'EULanguageCodeType',
        values: ['bg', 'cs', 'da', 'de', 'el', 'en', 'es', 'et', 'fi', 'fr', 'ga', 'hr', 'hu', 'it', 'lt', 'lv', 'mt', 'nl', 'pl', 'pt', 'ro', 'sk', 'sl', 'sv', 'tr']
      }, {
        type: 'enumInfo',
        localName: 'CurrCodeType',
        values: ['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BOV', 'BRL', 'BSD', 'BTN', 'BWP', 'BYR', 'BZD', 'CAD', 'CDF', 'CHF', 'CLF', 'CLP', 'CNY', 'COP', 'COU', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EEK', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GWP', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'IQD', 'IRR', 'ISK', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LTL', 'LVL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MXV', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'STD', 'SVC', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TVD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VEF', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XOF', 'XPD', 'XPF', 'YER', 'ZAR', 'ZMK', 'ZWL']
      }, {
        type: 'enumInfo',
        localName: 'MSCurrCodeType',
        values: ['BGN', 'CZK', 'DKK', 'EEK', 'EUR', 'GBP', 'HRK', 'HUF', 'LTL', 'LVL', 'PLN', 'RON', 'SEK']
      }, {
        type: 'enumInfo',
        localName: 'MSCountryCodeType',
        values: ['AT', 'BE', 'BG', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'EL', 'HR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB', 'IC', 'XI', 'XJ', 'MC']
      }, {
        type: 'enumInfo',
        localName: 'TKodFormularza',
        values: ['JPK_FA']
      }, {
        type: 'enumInfo',
        localName: 'TKodKraju',
        baseTypeInfo: 'NormalizedString',
        values: ['AF', 'AX', 'AL', 'DZ', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AN', 'SA', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BB', 'BE', 'BZ', 'BJ', 'BM', 'BT', 'BY', 'BO', 'BA', 'BW', 'BR', 'BN', 'IO', 'BG', 'BF', 'BI', 'XC', 'CL', 'CN', 'HR', 'CY', 'TD', 'ME', 'DK', 'DM', 'DO', 'DJ', 'EG', 'EC', 'ER', 'EE', 'ET', 'FK', 'FJ', 'PH', 'FI', 'FR', 'TF', 'GA', 'GM', 'GH', 'GI', 'GR', 'GD', 'GL', 'GE', 'GU', 'GG', 'GY', 'GF', 'GP', 'GT', 'GN', 'GQ', 'GW', 'HT', 'ES', 'HN', 'HK', 'IN', 'ID', 'IQ', 'IR', 'IE', 'IS', 'IL', 'JM', 'JP', 'YE', 'JE', 'JO', 'KY', 'KH', 'CM', 'CA', 'QA', 'KZ', 'KE', 'KG', 'KI', 'CO', 'KM', 'CG', 'CD', 'KP', 'XK', 'CR', 'CU', 'KW', 'LA', 'LS', 'LB', 'LR', 'LY', 'LI', 'LT', 'LV', 'LU', 'MK', 'MG', 'YT', 'MO', 'MW', 'MV', 'MY', 'ML', 'MT', 'MP', 'MA', 'MQ', 'MR', 'MU', 'MX', 'XL', 'FM', 'UM', 'MD', 'MC', 'MN', 'MS', 'MZ', 'MM', 'NA', 'NR', 'NP', 'NL', 'DE', 'NE', 'NG', 'NI', 'NU', 'NF', 'NO', 'NC', 'NZ', 'PS', 'OM', 'PK', 'PW', 'PA', 'PG', 'PY', 'PE', 'PN', 'PF', 'PL', 'GS', 'PT', 'PR', 'CF', 'CZ', 'KR', 'ZA', 'RE', 'RU', 'RO', 'RW', 'EH', 'BL', 'KN', 'LC', 'MF', 'VC', 'SV', 'WS', 'AS', 'SM', 'SN', 'RS', 'SC', 'SL', 'SG', 'SK', 'SI', 'SO', 'LK', 'PM', 'US', 'SZ', 'SD', 'SR', 'SJ', 'SH', 'SY', 'CH', 'SE', 'TJ', 'TH', 'TW', 'TZ', 'TG', 'TK', 'TO', 'TT', 'TN', 'TR', 'TM', 'TV', 'UG', 'UA', 'UY', 'UZ', 'VU', 'WF', 'VA', 'HU', 'VE', 'GB', 'VN', 'IT', 'TL', 'CI', 'BV', 'CX', 'IM', 'CK', 'VI', 'VG', 'HM', 'CC', 'MH', 'FO', 'SB', 'ST', 'TC', 'ZM', 'CV', 'ZW', 'AE']
      }, {
        type: 'enumInfo',
        localName: 'CountryCodeExMSType',
        values: ['AF', 'AX', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AZ', 'BS', 'BH', 'BD', 'BB', 'BY', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BA', 'BW', 'BV', 'BR', 'IO', 'BN', 'BF', 'BI', 'KH', 'CM', 'CA', 'CV', 'KY', 'CF', 'TD', 'CL', 'CN', 'CX', 'CC', 'CO', 'KM', 'CG', 'CD', 'CK', 'CR', 'CI', 'CU', 'DJ', 'DM', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'ET', 'FK', 'FO', 'FJ', 'GF', 'PF', 'TF', 'GA', 'GM', 'GE', 'GH', 'GI', 'GL', 'GD', 'GP', 'GU', 'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HM', 'VA', 'HN', 'HK', 'IS', 'IN', 'ID', 'IR', 'IQ', 'IM', 'IL', 'JM', 'JP', 'JE', 'JO', 'KZ', 'KE', 'KI', 'KP', 'KR', 'KW', 'KG', 'LA', 'LB', 'LS', 'LR', 'LY', 'LI', 'MO', 'MK', 'MG', 'MW', 'MY', 'MV', 'ML', 'MH', 'MQ', 'MR', 'MU', 'YT', 'MX', 'FM', 'MD', 'MN', 'ME', 'MS', 'MA', 'MZ', 'MM', 'NA', 'NR', 'NP', 'AN', 'NC', 'NZ', 'NI', 'NE', 'NG', 'NU', 'NF', 'MP', 'NO', 'OM', 'PK', 'PW', 'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PN', 'PR', 'QA', 'RE', 'RU', 'RW', 'BL', 'SH', 'KN', 'LC', 'MF', 'PM', 'VC', 'WS', 'SM', 'ST', 'SA', 'SN', 'RS', 'SC', 'SL', 'SG', 'SB', 'SO', 'ZA', 'GS', 'LK', 'SD', 'SR', 'SJ', 'SZ', 'CH', 'SY', 'TW', 'TJ', 'TZ', 'TH', 'TL', 'TG', 'TK', 'TO', 'TT', 'TN', 'TR', 'TM', 'TC', 'TV', 'UG', 'UA', 'AE', 'US', 'UM', 'UY', 'UZ', 'VU', 'VE', 'VN', 'VG', 'VI', 'WF', 'EH', 'YE', 'ZM', 'ZW', 'CW', 'NM', 'SX', 'BQ']
      }],
    elementInfos: [{
        elementName: 'JPK',
        typeInfo: '.JPK'
      }]
  };
  return {
    JPK: JPK
  };
};
if (typeof define === 'function' && define.amd) {
  define([], JPK_Module_Factory);
}
else {
  var JPK_Module = JPK_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.JPK = JPK_Module.JPK;
  }
  else {
    var JPK = JPK_Module.JPK;
  }
}

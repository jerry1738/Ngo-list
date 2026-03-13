export interface NGO {
  id: number;
  name: string;
  physical_address?: string;
  mailing_address?: string;
  phone_numbers: string[];
  email?: string;
  website?: string;
  status: "not changed" | "might be changed";
  whatsapp?: string;
  focal_person_email?: string;
}

export const ngoData: NGO[] = [
  {
    "id": 1,
    "name": "Nexus Ethiopia",
    "physical_address": "Addis Ababa, Bole sub city, woreda 7, around Ethiopian Electric Utility, Gurdshola Area",
    "mailing_address": "P.O.Box: 21620/1000 Addis Ababa",
    "phone_numbers": ["+251-116-66-12-19", "+251-116-661-219"],
    "email": "Contact@nexuseth.org",
    "website": "https://nexuseth.org/",
    "status": "not changed"
  },
  {
    "id": 2,
    "name": "ActionAid Ethiopia",
    "physical_address": "Lemi Kura, Woreda 13, House Number 3044 (Behind CMC St. Michael Church)",
    "mailing_address": "P.O.Box 1261, Addis Ababa, Ethiopia",
    "phone_numbers": ["+251-932-025-053", "+251-932-024-633", "+251-114-654671"],
    "email": "comms.ethiopia@actionaid.org",
    "status": "not changed"
  },
  {
    "id": 3,
    "name": "World Vision Ethiopia",
    "physical_address": "AMCE-Bole Road, Bole Sub-City, Kebele 11, House #518, Addis Ababa",
    "mailing_address": "P.O. Box 3330, Addis Ababa, Ethiopia",
    "phone_numbers": ["+251-116-291078", "+251-116-293350"],
    "email": "info_et@wvi.org",
    "status": "not changed"
  },
  {
    "id": 4,
    "name": "Save the Children Ethiopia",
    "physical_address": "Sunshine Tower #4, Next to Hyatt Regency Hotel, Addis Ababa",
    "mailing_address": "P.O. Box 387 Addis Ababa, Ethiopia",
    "phone_numbers": ["+251-113-72-84-55", "+251-113-72-84-60"],
    "email": "ethiopia.info@savethechildren.org",
    "status": "not changed"
  },
  {
    "id": 5,
    "name": "Amref Health Africa in Ethiopia",
    "physical_address": "Bole Sub City, Woreda 03, House # 2310, Addis Ababa",
    "mailing_address": "P.O.Box. 20855 Code 1000 Addis Ababa",
    "phone_numbers": ["+251 11 662 7851"],
    "focal_person_email": "Misrak.makonnen@amref.org",
    "status": "not changed"
  },
  {
    "id": 6,
    "name": "CURE Children's Hospital of Ethiopia",
    "physical_address": "Addis Ababa, 6 kilo adjacent Hamle 19 Park",
    "phone_numbers": ["+251-111-237767", "+251-111-227580"],
    "whatsapp": "+251-934-093476",
    "email": "info@cureethiopia.org",
    "status": "not changed"
  },
  {
    "id": 7,
    "name": "International Rescue Committee (IRC) Ethiopia",
    "physical_address": "Jackros to Salite Mihret Church Rd, Robera Coffee Bldg, 5th Fl, Addis Ababa",
    "mailing_address": "PO Box 107 1110 Addis Ababa",
    "phone_numbers": ["+251-116-630430"],
    "status": "not changed"
  },
  {
    "id": 8,
    "name": "Catholic Relief Services (CRS) Ethiopia",
    "physical_address": "Swaziland St., Gulele Sub-city, Enkulal Fabrica, Addis Ababa",
    "mailing_address": "P.O. Box 6592, Addis Ababa, Ethiopia",
    "phone_numbers": ["+251-112-78-88-00"],
    "email": "et_tenders@crs.org",
    "status": "not changed"
  },
  {
    "id": 9,
    "name": "Oxfam International Liaison Office to the African Union",
    "physical_address": "TK Building 2, Bole Airport area, Suite 602, Addis Ababa",
    "phone_numbers": ["+251-116-61-16-01"],
    "email": "addisababa@oxfaminternational.org",
    "status": "not changed"
  },
  {
    "id": 10,
    "name": "Mercy Corps Ethiopia",
    "physical_address": "Hayahulet Gollagul Square, AFRO Building, Yeka Sub-City, Addis Ababa",
    "mailing_address": "P.O. Box 14319, Addis Ababa, Ethiopia",
    "phone_numbers": ["+251-111-10777"],
    "email": "tenders@mercycorps.org",
    "status": "not changed"
  },
  {
    "id": 11,
    "name": "Care Epilepsy Ethiopia",
    "physical_address": "Welansa and Zeleke Building, Yeka Sub-City, Woreda 08, Addis Ababa",
    "phone_numbers": ["+251-0975264121", "+251-0977772101"],
    "email": "ceo@careepilepsyethiopia.org",
    "status": "not changed"
  },
  {
    "id": 12,
    "name": "Plan International Ethiopia",
    "physical_address": "Yemez Building, ECA Road, Kirkos Sub-city, Addis Ababa",
    "mailing_address": "P.O.Box 12677 Addis Ababa",
    "phone_numbers": ["+251-115-571916"],
    "status": "not changed"
  },
  {
    "id": 13,
    "name": "Authority for Civil Society Organizations (ACSO)",
    "physical_address": "Churchill Avenue, Tewodros Square, Addis Ababa, Ethiopia",
    "mailing_address": "P.O. Box 9137 or 5212, Addis Ababa, Ethiopia",
    "phone_numbers": ["+251-115-58-2378", "+251-115-58-2379"],
    "email": "info@acso.gov.et",
    "status": "not changed"
  },
  {
    "id": 14,
    "name": "African Aids Initiative International (AAII)",
    "mailing_address": "P.O. Box 5565 Addis Ababa",
    "phone_numbers": ["+251-11-553-5225"],
    "email": "afraids@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 15,
    "name": "Agency for Co-operation and Research in Development (ACORD)",
    "physical_address": "Bole Road, Addis Ababa",
    "mailing_address": "PO Box 12377 Addis Ababa",
    "phone_numbers": ["+251-11-661-3931"],
    "email": "acord.eth@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 16,
    "name": "African Child Policy Forum (ACPF)",
    "mailing_address": "P.O.Box 1179 Addis Ababa",
    "phone_numbers": ["+251-11-552-8407"],
    "email": "info@africanchildforum.org",
    "status": "might be changed"
  },
  {
    "id": 17,
    "name": "Adventist Development and Relief Agency (ADRA)",
    "mailing_address": "PO Box 145 Addis Ababa",
    "phone_numbers": ["+251-11-551-1199"],
    "email": "Adra-et@tadis.gn.apc.org",
    "status": "might be changed"
  },
  {
    "id": 18,
    "name": "Africa Humanitarian Action (AHA)",
    "physical_address": "Africa Avenue, Addis Abeba",
    "mailing_address": "P.O.Box 1967 1110 Addis Abeba",
    "phone_numbers": ["+251-11-553-5416"],
    "email": "ahaeth@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 19,
    "name": "African Network for Prevention of Child Abuse (ANPPCAN)",
    "mailing_address": "PO Box 34359 Addis Ababa",
    "phone_numbers": ["+251-11-550-5202"],
    "email": "anppcan-eth@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 20,
    "name": "Afar Pastoralist Development Association (APDA)",
    "mailing_address": "PO Box 592 Addis Ababa 1110",
    "phone_numbers": ["+251-33-555-0157", "+251-11-515-9787"],
    "email": "afarpastoral@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 21,
    "name": "Christoffel Blinden Mission (CBM) Ethiopia",
    "mailing_address": "PO Box 694 Addis Ababa",
    "phone_numbers": ["+251-11-618-0165"],
    "email": "cbm.roe2@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 22,
    "name": "Cheshire Foundation Ethiopia (CFE)",
    "mailing_address": "P.O.Box 31938 Addis Ababa",
    "phone_numbers": ["+251-11-618-5164"],
    "email": "Cheshirefoundation@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 23,
    "name": "Children's Heart Fund of Ethiopia (CHFE)",
    "mailing_address": "PO Box 2382 Addis Ababa",
    "phone_numbers": ["+251-11-551-5435"],
    "email": "chfe@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 24,
    "name": "Cooperazione Internazionale (COOPI)",
    "mailing_address": "P.O.Box 2204 Addis Ababa",
    "phone_numbers": ["+251-11-661-4391"],
    "email": "addis@coopi.org",
    "status": "might be changed"
  },
  {
    "id": 25,
    "name": "Dorcas Aid International (DAI)",
    "mailing_address": "PO Box 8989 Addis Ababa",
    "phone_numbers": ["+251-11-661-3710"],
    "email": "dorcas.eth@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 26,
    "name": "Emmanuel Development Association (EDA)",
    "mailing_address": "PO Box 908 Addis Ababa",
    "phone_numbers": ["+251-11-662-5769"],
    "email": "tessema.bekele@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 27,
    "name": "Ethiopian Evangelical Church Mekane Yesus (EECMY)",
    "mailing_address": "P.O. Box 2087 Addis Ababa",
    "phone_numbers": ["+251-11-553-1919"],
    "email": "eecmy.co@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 28,
    "name": "Ethiopian National Association of the Blind (ENAB)",
    "mailing_address": "P. O. Box 30057 Addis Ababa",
    "phone_numbers": ["+251-11-111-9293"],
    "email": "enab@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 29,
    "name": "Ethiopia Women's Lawyers Association (EWLA)",
    "mailing_address": "P.O.Box 13760 Addis Ababa",
    "phone_numbers": ["+251-11-551-5552"],
    "email": "ewla@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 30,
    "name": "FARM-Africa Ethiopia",
    "mailing_address": "P.O. Box 5746 Addis Ababa",
    "phone_numbers": ["+251-11-416-9245"],
    "email": "farm.ethiopia@ethionet.et",
    "status": "might be changed"
  },
  {
    "id": 31,
    "name": "Food for the Hungry International (FHI)",
    "mailing_address": "PO Box 4181 Addis Ababa",
    "phone_numbers": ["+251-11-465-6008"],
    "email": "fhi.eth@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 32,
    "name": "Forum on Street Children (FSCE)",
    "mailing_address": "PO Box 9562 Addis Ababa",
    "phone_numbers": ["+251-11-553-4432"],
    "email": "fsce@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 33,
    "name": "Good Neighbors Ethiopia (GNE)",
    "mailing_address": "PO Box 12937 Addis Ababa",
    "phone_numbers": ["+251-11-551-8063"],
    "email": "gne@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 34,
    "name": "Handicap International (HI)",
    "mailing_address": "PO Box 1160 Addis Ababa",
    "phone_numbers": ["+251-11-515-9720", "+251-11-661-4101"],
    "email": "handicap@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 35,
    "name": "International Committee of the Red Cross (ICRC)",
    "mailing_address": "P.O. Box 5701 Addis Ababa",
    "phone_numbers": ["+251-11-551-8366"],
    "email": "addis_ababa.add@icrc.org",
    "status": "might be changed"
  },
  {
    "id": 36,
    "name": "International Livestock Research Institute (ILRI)",
    "mailing_address": "PO Box 5689 Addis Ababa",
    "phone_numbers": ["+251-11-646-3215"],
    "email": "Ilri-ethiopia@cgiar.org",
    "status": "might be changed"
  },
  {
    "id": 37,
    "name": "Jesuit Refugee Service (JRS)",
    "mailing_address": "PO Box 12474 Addis Ababa",
    "phone_numbers": ["+251-11-465-3168"],
    "email": "ethiopia@jrs.net",
    "status": "might be changed"
  },
  {
    "id": 38,
    "name": "Mekdim HIV+ Persons National Association",
    "mailing_address": "PO Box 31218 Addis Ababa",
    "phone_numbers": ["+251-11-156-3003"],
    "email": "mek@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 39,
    "name": "Population Services International (PSI) Ethiopia",
    "physical_address": "5th Floor, Friendship Building, Bole Road, Addis Ababa",
    "mailing_address": "P.O. Box 468 1250 Addis Ababa",
    "phone_numbers": ["+251-116-630748"],
    "email": "psi@ethionet.et",
    "status": "might be changed"
  },
  {
    "id": 40,
    "name": "Relief Society of Tigray (REST)",
    "mailing_address": "P.O.Box 8078 Addis Ababa",
    "phone_numbers": ["+251-11-551-4378"],
    "email": "rest@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 41,
    "name": "SOS Children's Villages Ethiopia",
    "mailing_address": "PO Box 3495 Addis Ababa",
    "phone_numbers": ["+251-11-661-1655"],
    "email": "sos.ethiopia@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 42,
    "name": "SOS Sahel International Ethiopia",
    "mailing_address": "PO Box 3262 Addis Ababa",
    "phone_numbers": ["+251-11-662-7491"],
    "email": "sos.sahel@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 43,
    "name": "The Hunger Project (THP) Ethiopia",
    "physical_address": "Nefas Silk Lafto Kifle Ketema, Woreda 21 House #1828, Addis Ababa",
    "mailing_address": "P.O.Box 26238 1000 Addis Ababa",
    "phone_numbers": ["+251-11-320-5706"],
    "email": "hungerproj@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 44,
    "name": "UNICEF Ethiopia",
    "physical_address": "Africa Hall, Menelik Avenue, Addis Ababa",
    "mailing_address": "P.O. Box 1169, Addis Ababa",
    "phone_numbers": ["+251-11-551-5155"],
    "email": "addisababa@unicef.org",
    "status": "might be changed"
  },
  {
    "id": 45,
    "name": "World Health Organization (WHO) Liaison Office",
    "physical_address": "Zambezi Building, Ground Floor, West Wing, Menelik II Avenue, UNECA Compound",
    "phone_numbers": ["+ 251-11-553-47-77"],
    "email": "afwloaueca@who.int",
    "status": "not changed"
  },
  {
    "id": 46,
    "name": "Young Women's Christian Association (YWCA) Ethiopia",
    "mailing_address": "P.O. Box 22340-1000 Addis Ababa",
    "phone_numbers": ["+251-11-552-1714"],
    "email": "ywcaeth@telecom.net.et",
    "status": "might be changed"
  },
  {
    "id": 47,
    "name": "ZOA Refugee Care Ethiopia",
    "mailing_address": "PO Box 9494 Addis Ababa",
    "phone_numbers": ["+251-11-515-8967"],
    "email": "zoa.ethiopia@telecom.net.et",
    "status": "might be changed"
  }
];

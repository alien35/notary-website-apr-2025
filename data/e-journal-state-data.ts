export type EJournalStateInfo = {
  value: boolean
  citation: string
  link: string
}

export const eJournalStateData: Record<string, EJournalStateInfo> = {
  AK: {
    value: false,
    citation: "A notary public shall maintain at least one journal in a tangible medium to chronicle all notarial acts.",
    link: "https://ltgov.alaska.gov/notaries-public/notary-supplies/",
  },
  AL: {
    value: true,
    citation:
      "As of 2011, a notary public is no longer required to maintain a journal. However, it would be prudent to maintain a journal.",
    link: "https://www.notaries.com/downloads/notary-documents/AlabamaNotaryHandbook.pdf",
  },
  AR: {
    value: true,
    citation:
      "The law does not require a notary to keep any record of his or her official acts, but it is recommended that each notary keep a register or journal.",
    link: "https://www.sos.arkansas.gov/uploads/bcs/NotaryHandbook.pdf",
  },
  AZ: {
    value: false,
    citation: "Journals must be in paper form and list notarial acts in chronological order.",
    link: "https://azsos.gov/sites/default/files/docs/Notary-Manual-2025-April.pdf",
  },
  CA: {
    value: true,
    citation:
      "A notary public shall keep one active sequential journal at a time, of all official acts performed as a notary public.",
    link: "https://notary.cdn.sos.ca.gov/forms/notary-handbook-current.pdf",
  },
  CO: {
    value: true,
    citation: "Notaries are required to maintain a journal of ALL notarial acts.",
    link: "https://www.sos.state.co.us/pubs/notary/files/notaryHandbook.pdf",
  },
  CT: {
    value: true,
    citation:
      "Connecticut state law does not require that notaries maintain a journal of their notarial acts. However, it is the very strong recommendation of the Office of the Secretary of the State that they do so.",
    link: "https://portal.ct.gov/-/media/sots/business-services/notary/state_of_connecticut_notary_public_manual_rev2023",
  },
  DC: {
    value: true,
    citation:
      "A notary public shall maintain a journal in which the notary public records all notarial acts that the notary public or electronic notary performs",
    link: "https://www.nationalnotary.org/file%20library/nna/reference-library/state-law-summaries/district_of_columbia.pdf",
  },
  DE: {
    value: true,
    citation:
      "A journal may be created on a tangible medium or in an electronic format to chronicle all notarial acts, whether those notarial acts are performed regarding tangible or electronic records.",
    link: "https://notary.delaware.gov/journal-requirements/",
  },
  FL: {
    value: true,
    citation:
      "Although not required by Florida law, you may consider keeping a notary journal. Even though journals are not required, any notary who is concerned with liability may want to consider this protective measure to provide a permanent record of his or her notarial acts.",
    link: "https://www.flgov.com/eog/sites/default/files/notary/Governors_Notary_Reference_Manual_12-17-19.pdf",
  },
  GA: {
    value: true,
    citation:
      "A notary public shall maintain a written or electronic journal which shall include an entry for each notarial act performed at the request of a self-filer.",
    link: "https://www.nationalnotary.org/file%20library/nna/reference-library/state-law-summaries/georgia.pdf",
  },
  HI: {
    value: false,
    citation:
      "A notary public shall maintain only one tangible journal at a time to chronicle all notarial acts performed regarding tangible documents and one electronic journal at a time to chronicle all notarial acts performed regarding electronic documents.",
    link: "https://www.nationalnotary.org/file%20library/nna/reference-library/state-law-summaries/hawaii.pdf",
  },
  IA: {
    value: true,
    citation:
      "Although Iowa law does not require a notary public to keep a journal, it is STRONGLY recommended. A journal serves as a record of notarizations you perform.",
    link: "https://sos.iowa.gov/updatedhandbookforiowanotariespublic",
  },
  ID: {
    value: true,
    citation:
      "It's a good idea for Idaho notaries to keep a notary journal in which all notarial acts are recorded. The journals should be either a permanent, bound paper journal designed to deter fraud or a permanent, tamper-evident electronic journal.",
    link: "https://sos.idaho.gov/notary/idaho_notary_handbook.pdf",
  },
  IL: {
    value: true,
    citation:
      "A notary or electronic notary may maintain his or her journal in either paper form or electronic form and may maintain more than one journal or electronic journal to record notarial acts or electronic notarial acts.",
    link: "https://www.ilsos.gov/publications/pdf_publications/ipub16.pdf",
  },
  IN: {
    value: true,
    citation:
      "Indiana does not require notaries to maintain a journal of their notarial acts. Leading notary associations recommend that notaries maintain a journal, both as a good professional practice and as protection in the event the notary is accused of fraud or malpractice. The Secretary of State’s office strongly recommends that notaries record all their notarial acts in a notary journal. This record of acts can protect the notary in case of a lawsuit. Journals can be electronic or paper and purchased from notary associations, notary service businesses and office supply stores.",
    link: "https://inbiz.in.gov/Assets/NotaryGuide.pdf",
  },
  KS: {
    value: false,
    citation:
      "State law requires a notary to maintain a journal of all notarial acts performed by the notary on and after January 1, 2022. A notary shall maintain only one journal at any time in a tangible format but may maintain one or more journals in an electronic format to record all notarial acts performed regarding electronic records.",
    link: "https://sos.ks.gov/general-services/notary_public/NotaryHandbook.pdf",
  },
  KY: {
    value: true,
    citation:
      "Although many states require a journal by law, Kentucky does not. However, it is advisable to keep a record book of official acts because a journal provides documentation of the notary’s personal knowledge of performance of the notarization.",
    link: "https://eforms.com/images/2017/11/Kentucky-Notary-Handbook.pdf",
  },
  LA: {
    value: true,
    citation: "No mention of journal requirements is made",
    link: "https://law.justia.com/codes/louisiana/2012/rs/title35/rs35-199",
  },
  MA: {
    value: true,
    citation:
      "A journal may be created on a fixed tangible medium or in an electronic format. If the journal is maintained on a tangible medium, it shall be a permanent, bound register with numbered pages. If the journal is maintained in an electronic format, it shall be in a permanent, tamper-evident electronic format complying with the rules of the state secretary, including rules concerning the regular transfer of electronic journal entries to the secretary.",
    link: "https://www.mass.gov/info-details/massachusetts-law-about-notaries-public#notary-journal-",
  },
  MD: {
    value: true,
    citation:
      "Each notary public shall maintain a journal which chronicles each the notary public’s notarial acts.  Each entry in a journal shall be made contemporaneously with performance of the notarial act.",
    link: "https://sos.maryland.gov/Notary/Pages/FAQ.aspx",
  },
  ME: {
    value: true,
    citation:
      "A notarial officer MUST maintain a journal for all electronic and remote notarizations. A journal is not required for in-person paper notarizations. However, the Secretary of State strongly suggests that you maintain a journal for all notarial acts. A journal may be created in a permanent, bound register which contains page numbers or in an electronic format, which must be in a permanent, tamper-evident electronic format complying with the rules of the Secretary of State. For all in-person paper notarizations: You may only keep one journal at any one time.",
    link: "https://www.maine.gov/sos/sites/maine.gov.sos/files/content/assets/courseofstudy.pdf",
  },
  MI: {
    value: true,
    citation:
      "A notary public shall maintain only 1 journal for the recording of notarial acts and must keep the journal either as a tangible, permanent bound register or in a tamper-evident, permanent electronic format.",
    link: "https://www.legislature.mi.gov/documents/mcl/pdf/mcl-Act-238-of-2003.pdf",
  },
  MN: {
    value: true,
    citation: "While Minnesota law does not require a journal, it is prudent of a notary public to keep one.",
    link: "https://www.sos.mn.gov/notary-apostille/notary-help/notary-faq/",
  },
  MO: {
    value: false,
    citation: "486.700 - A notary shall maintain only one active permanently bound journal at the same time.",
    link: "https://revisor.mo.gov/main/OneSection.aspx?section=486.700&bid=48495&hl=486.700%u2044",
  },
  MS: {
    value: true,
    citation:
      "A notary public must record each notarial act in a journal at the time of notarization in compliance with Section 37 of the Act (relating to journal and audio-video recordings) and these Rules. Each journal of a notary public, whether maintained on a tangible medium or in an electronic format, must contain all of the following information in any order:",
    link: "https://www.sos.ms.gov/content/documents/Business/Revised%20Mississippi%20Law%20on%20Notarial%20Acts%20Notary%20Rules.pdf",
  },
  MT: {
    value: true,
    citation:
      "All Montana notaries are required by law to maintain one or more journals in which all tangible and electronic notarial acts are recorded. The journals may be either a permanent, bound paper journal designed to deter fraud or a permanent, tamper-evident electronic journal.",
    link: "https://sosmt.gov/wp-content/uploads/notary-handbook-2021.pdf",
  },
  NC: {
    value: true,
    citation: "No mention of journal requirements is made",
    link: "https://www.sosnc.gov/frequently_asked_questions/by_title/_notary_notary",
  },
  ND: {
    value: true,
    citation: "A journal may be created on a tangible medium or in an electronic format.",
    link: "https://ndlegis.gov/cencode/t44c06-1.pdf?20130206110616",
  },
  NE: {
    value: true,
    citation: "No mention of in-person journal requirements is made",
    link: "https://www.nationalnotary.org/file%20library/nna/reference-library/state-law-summaries/nebraska.pdf",
  },
  NH: {
    value: true,
    citation:
      "A journal is required for all notarial acts performed with respect to a remotely located individual. For all other notarial acts, while not required by law, it is recommended that a Notary Public maintain a journal.",
    link: "https://www.sos.nh.gov/sites/g/files/ehbemt561/files/inline-documents/sonh/np-jp-manual-february-28-2022.pdf",
  },
  NJ: {
    value: true,
    citation:
      "A notary public shall maintain a journal of all notarial acts performed. The journal may be created and maintained on a tangible medium or in an electronic format.",
    link: "https://www.nj.gov/treasury/revenue/pdf/NotaryPublicManual.pdf",
  },
  NM: {
    value: true,
    citation:
      "A notarial officer is required to maintain a journal of every notarial act performed. […] If the journal is maintained in an electronic format, it shall meet all the requirements above […]",
    link: "https://www.sos.nm.gov/wp-content/uploads/2023/10/Notary-Handbook-100223.pdf",
  },
  NV: {
    value: false,
    citation:
      "NRS 240.120 (3)(b) states in part, 'The journal must be in a bound volume with preprinted page numbers.'",
    link: "https://www.nvsos.gov/sos/home/showpublisheddocument/11493/638144074331570000",
  },
  NY: {
    value: true,
    citation: "No mention of journal requirements is made",
    link: "https://dos.ny.gov/system/files/documents/2024/05/notary.pdf",
  },
  OH: {
    value: true,
    citation: "No mention of journal requirements is made",
    link: "https://ohionotaryclass.com/wp-content/uploads/2020/03/Notary-Public-Handbook.pdf",
  },
  OK: {
    value: true,
    citation: "No mention of in-person journal requirements is made",
    link: "https://oksenate.gov/sites/default/files/2019-12/os49.pdf",
  },
  OR: {
    value: true,
    citation: "The notarial journal may be in electronic or paper format.",
    link: "https://sos.oregon.gov/business/documents/notary-guide/notary-guide.pdf",
  },
  PA: {
    value: true,
    citation: "A journal may be created on a tangible medium or in an electronic format.",
    link: "https://www.pa.gov/agencies/dos/resources/notaries-resources-and-information/notary-public-equipment",
  },
  RI: {
    value: true,
    citation: "RI general law does not mandate that notaries use a journal of notarial acts.",
    link: "https://docs.sos.ri.gov/documents/BusinessServices/Notary-Public-Manual.pdf",
  },
  SC: {
    value: true,
    citation: "No mention of in-person journal requirements is made",
    link: "https://www.nationalnotary.org/file%20library/nna/reference-library/state-law-summaries/south_carolina.pdf",
  },
  SD: {
    value: true,
    citation: "No mention of journal requirements is made",
    link: "https://sdsos.gov/general-services/assets/SDNotaryPublicHandbook.pdf",
  },
  TN: {
    value: true,
    citation: "If a fee is charged the notary must keep a record, either electronically or in a well-bound book.",
    link: "https://www.ctas.tennessee.edu/eli/qualifications-election-and-powers",
  },
  TX: {
    value: true,
    citation: "A Texas notary public is required to maintain a record book.",
    link: "https://www.sos.state.tx.us/statdoc/faqs2300.shtml#np6",
  },
  UT: {
    value: true,
    citation:
      "Reference:46-1-15 If a notary maintains a journal, the notary shall keep the journal in the notary's exclusive custody.",
    link: "https://www.notaries.com/downloads/notary-documents/utah-notary-handbook.pdf",
  },
  VA: {
    value: true,
    citation: "No mention of in-person journal requirements is made",
    link: "https://www.commonwealth.virginia.gov/media/governorvirginiagov/secretary-of-the-commonwealth/pdf/VAe-NotarizationStandard2013Version10.pdf",
  },
  VT: {
    value: true,
    citation:
      "Notaries public shall maintain a journal chronicling their notarial acts and shall retain such journal for 10 years after the performance of the last act documented in the journal. If the journal is maintained in an electronic format, it must be in a permanent, tamper-evident electronic format complying with the rules of the commissioning officer or agency.",
    link: "https://eforms.com/images/2017/11/VT-Notary-Handbook.pdf",
  },
  WA: {
    value: false,
    citation: "You must maintain one, and only one, physical journal for notarial acts at any given time.",
    link: "https://dol.wa.gov/media/pdf/2188/notary-handbookpdf/download?inline",
  },
  WI: {
    value: true,
    citation:
      "Keeping a notarial logbook, or journal, is not required in Wisconsin, although you are encouraged to do so.",
    link: "https://dfi.wi.gov/Documents/ConsumerServices/NotaryPublic/NotaryHandbook.pdf",
  },
  WV: {
    value: true,
    citation:
      "West Virginia does not require a notary public to keep a journal. However, it is strongly advised to keep a record book of official acts because it provides documentation of the notary's personal knowledge of the performance of the notarization.",
    link: "https://sos.wv.gov/FormSearch/Business/Documents/Notary-Handbook.pdf",
  },
  WY: {
    value: true,
    citation:
      "Wyoming statutes do not require keeping a journal but it is wise and highly recommended by the Secretary of State.",
    link: "https://www.notaryrotary.com/101/resources/WY-hb-20070829.pdf",
  },
  AB: {
    value: true,
    citation:
      "A notary public may be called into court to establish that an oath, affirmation or solemn declaration was administered properly... Notaries should establish a consistent procedure from which they do not deviate.",
    link: "https://open.alberta.ca/dataset/1e33c3cf-3cee-4444-92d3-c28d379c5fb9/resource/1fa79699-02a9-46a2-a20b-7d93f232b2ea/download/jus-information-and-instructions-for-notaries-public-2024.pdf",
  },
  BC: {
    value: true,
    citation:
      "5.04 Records may be stored in a form at the discretion of a Member but must be produced, in their entirety at the request of the Society.",
    link: "https://snpbc.ca/wp-content/uploads/2024/02/Society-Rules_Revised-rev_December_2022_F.pdf",
  },
  MB: {
    value: true,
    citation: "The Manitoba Evidence Act does not make any statements about record-keeping",
    link: "https://www.canlii.org/en/mb/laws/stat/ccsm-c-e150/latest/ccsm-c-e150.html",
  },
  NB: {
    value: true,
    citation: "N-9 - Notaries Public Act does not make any statements about record-keeping",
    link: "https://laws.gnb.ca/en/document/cs/N-9",
  },
  NL: {
    value: true,
    citation:
      "The financial records described in rule 15.03(1) and (2) may be entered and posted by hand or by mechanical or electronic means, but if the records are entered and posted by hand, they shall be entered and posted in ink.",
    link: "https://lsnl.ca/lawyers-students/lawyer-regulation/law-society-rules/part-xv/",
  },
  NS: {
    value: true,
    citation: "Instructions for Commissioner of Oaths does not make any statements about record-keeping",
    link: "https://novascotia.ca/just/legal_services/_docs/Instruction-Booklet-Commissioners.pdf",
  },
  ON: {
    value: true,
    citation:
      "You must maintain a record of every act of remote commissioning that you perform. Examples of record keeping could include:",
    link: "https://www.ontario.ca/page/guide-newly-appointed-commissioners-taking-affidavits-ontario",
  },
  PE: {
    value: true,
    citation: "The Notaries Public Act does not make any statements about record-keeping",
    link: "https://www.princeedwardisland.ca/en/legislation/n06-1-notaries-public-act",
  },
  QC: {
    value: true,
    citation: "The Notaries Act does not make any statements about record-keeping",
    link: "https://www.legisquebec.gouv.qc.ca/en/document/cs/N-3",
  },
  SK: {
    value: true,
    citation: "The Notaries Public Act, 1989 does not make any statements about record-keeping",
    link: "https://www.qp.gov.sk.ca/documents/english/Statutes/Statutes/N14-1.pdf",
  },
}

export default eJournalStateData

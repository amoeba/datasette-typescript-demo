/*
* This file was generated by a tool.
* Rerun sql-ts to regenerate this file.
*/
export interface executive_termsEntity {
  'end'?: string | null;
  'executive_id'?: number | null;
  'how'?: string | null;
  'party'?: string | null;
  'start'?: string | null;
  'type'?: string | null;
}
export interface executivesEntity {
  'bio_birthday'?: string | null;
  'bio_gender'?: string | null;
  'id'?: number | null;
  'id_ballotpedia'?: string | null;
  'id_bioguide'?: string | null;
  'id_cspan'?: number | null;
  'id_fec'?: string | null;
  'id_google_entity_id'?: string | null;
  'id_govtrack'?: number | null;
  'id_house_history'?: number | null;
  'id_icpsr'?: number | null;
  'id_icpsr_prez'?: number | null;
  'id_lis'?: string | null;
  'id_maplight'?: number | null;
  'id_opensecrets'?: string | null;
  'id_thomas'?: string | null;
  'id_votesmart'?: number | null;
  'id_wikidata'?: string | null;
  'id_wikipedia'?: string | null;
  'name'?: string | null;
  'name_first'?: string | null;
  'name_last'?: string | null;
  'name_middle'?: string | null;
  'name_nickname'?: string | null;
  'name_official_full'?: string | null;
  'name_suffix'?: string | null;
}
export interface legislator_termsEntity {
  'address'?: string | null;
  'caucus'?: string | null;
  'class'?: number | null;
  'contact_form'?: string | null;
  'district'?: number | null;
  'end'?: string | null;
  'end-type'?: string | null;
  'fax'?: string | null;
  'how'?: string | null;
  'legislator_id'?: string | null;
  'office'?: string | null;
  'party'?: string | null;
  'party_affiliations'?: string | null;
  'phone'?: string | null;
  'rss_url'?: string | null;
  'start'?: string | null;
  'state'?: string | null;
  'state_rank'?: string | null;
  'type'?: string | null;
  'url'?: string | null;
}
export interface legislatorsEntity {
  'bio_birthday'?: string | null;
  'bio_gender'?: string | null;
  'family'?: string | null;
  'id'?: string | null;
  'id_ballotpedia'?: string | null;
  'id_bioguide'?: string | null;
  'id_bioguide_previous'?: string | null;
  'id_cspan'?: number | null;
  'id_fec'?: string | null;
  'id_google_entity_id'?: string | null;
  'id_govtrack'?: number | null;
  'id_house_history'?: number | null;
  'id_house_history_alternate'?: number | null;
  'id_icpsr'?: number | null;
  'id_lis'?: string | null;
  'id_maplight'?: number | null;
  'id_opensecrets'?: string | null;
  'id_thomas'?: string | null;
  'id_votesmart'?: number | null;
  'id_wikidata'?: string | null;
  'id_wikipedia'?: string | null;
  'leadership_roles'?: string | null;
  'name'?: string | null;
  'name_first'?: string | null;
  'name_last'?: string | null;
  'name_middle'?: string | null;
  'name_nickname'?: string | null;
  'name_official_full'?: string | null;
  'name_suffix'?: string | null;
  'other_names'?: string | null;
}
export interface officesEntity {
  'address'?: string | null;
  'building'?: string | null;
  'city'?: string | null;
  'fax'?: string | null;
  'hours'?: string | null;
  'id'?: string | null;
  'latitude'?: number | null;
  'legislator_id'?: string | null;
  'longitude'?: number | null;
  'phone'?: string | null;
  'state'?: string | null;
  'suite'?: string | null;
  'zip'?: string | null;
}
export interface social_mediaEntity {
  'facebook'?: string | null;
  'id'?: string | null;
  'instagram'?: string | null;
  'instagram_id'?: number | null;
  'legislator_id'?: string | null;
  'twitter'?: string | null;
  'twitter_id'?: number | null;
  'youtube'?: string | null;
  'youtube_id'?: string | null;
}
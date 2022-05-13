import { defineStore } from 'pinia';

export const useResourcesStore = defineStore('resources', {
  state: () => ({
    situation: 'recover',
    resources: [
      {pk: 1, title: 'Vaccine Clinics', description: 'Lane County COVID-19 Vaccine Clinics', url: new URL('https://lanecounty.org/cms/one.aspx?pageId=17388003')},
      {pk: 2, title: 'Emergency Evacuation Zones', description: 'Eugene/Springfield emergency evacuation zones', url: new URL('https://www.eugene-or.gov/4732/Emergency-Evacuation-Zones')},
      {pk: 2, title: 'Free air purifiers for high-risk wildfire zones', description: 'Jackson Care Connect and the other CCOs will begin distributing the first 5,000 air purifiers in a couple weeks. An additional 5,000 air purifiers will be distributed to additional homes, a process that will either begin later this summer, or next year.', url: new URL('https://covidblog.oregon.gov/free-air-purifiers-for-high-risk-wildfire-zones/')},
      {pk: 2, title: 'Emergency Evacuation Zones', description: 'Eugene/Springfield emergency evacuation zones', url: new URL('https://www.eugene-or.gov/4732/Emergency-Evacuation-Zones')},
      {pk: 2, title: 'Emergency Evacuation Zones', description: 'Eugene/Springfield emergency evacuation zones', url: new URL('https://www.eugene-or.gov/4732/Emergency-Evacuation-Zones')},
      {pk: 2, title: 'Emergency Evacuation Zones', description: 'Eugene/Springfield emergency evacuation zones', url: new URL('https://www.eugene-or.gov/4732/Emergency-Evacuation-Zones')},
      {pk: 2, title: 'Emergency Evacuation Zones', description: 'Eugene/Springfield emergency evacuation zones', url: new URL('https://www.eugene-or.gov/4732/Emergency-Evacuation-Zones')},
      {pk: 2, title: 'Emergency Evacuation Zones', description: 'Eugene/Springfield emergency evacuation zones', url: new URL('https://www.eugene-or.gov/4732/Emergency-Evacuation-Zones')},
      {pk: 2, title: 'Emergency Evacuation Zones', description: 'Eugene/Springfield emergency evacuation zones', url: new URL('https://www.eugene-or.gov/4732/Emergency-Evacuation-Zones')},
      {pk: 2, title: 'Emergency Evacuation Zones', description: 'Eugene/Springfield emergency evacuation zones', url: new URL('https://www.eugene-or.gov/4732/Emergency-Evacuation-Zones')},
      {pk: 2, title: 'Emergency Evacuation Zones', description: 'Eugene/Springfield emergency evacuation zones', url: new URL('https://www.eugene-or.gov/4732/Emergency-Evacuation-Zones')},
      {pk: 2, title: 'Emergency Evacuation Zones', description: 'Eugene/Springfield emergency evacuation zones', url: new URL('https://www.eugene-or.gov/4732/Emergency-Evacuation-Zones')},
      {pk: 2, title: 'Emergency Evacuation Zones', description: 'Eugene/Springfield emergency evacuation zones', url: new URL('https://www.eugene-or.gov/4732/Emergency-Evacuation-Zones')},
      {pk: 2, title: 'Emergency Evacuation Zones', description: 'Eugene/Springfield emergency evacuation zones', url: new URL('https://www.eugene-or.gov/4732/Emergency-Evacuation-Zones')},
      {pk: 2, title: 'Emergency Evacuation Zones', description: 'Eugene/Springfield emergency evacuation zones', url: new URL('https://www.eugene-or.gov/4732/Emergency-Evacuation-Zones')},
      {pk: 2, title: 'Emergency Evacuation Zones', description: 'Eugene/Springfield emergency evacuation zones', url: new URL('https://www.eugene-or.gov/4732/Emergency-Evacuation-Zones')}
    ]
  }),

  getters: {
    
  },

  actions: {
    setSituation(situation: 'prepare'|'respond'|'recover') {
      this.situation = situation
    }
  }
});

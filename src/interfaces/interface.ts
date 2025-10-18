// src/interfaces/interface.ts
export interface VenueItem {
  _id: string,
  name: string,
  address: string,
  district: string,
  province: string,
  postalcode: string,
  tel: string,
  picture: string,
  dailyrate: number,
  __v : number,
  id: string,
}

export interface VenueResponse {
  success: boolean,
  count: number,
  pagination: Object,
  data: VenueItem[];
}

export interface SingleVenueResponse {
  success: boolean,
  data: VenueItem;
}

export interface BookingItem {
  nameLastname: string;
  tel: string;
  venue: string;
  bookDate: string;
}

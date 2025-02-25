export type ViewVenueOutput = {
  id: number
  name: string
  internalName: string
  description: string
  liveFlag: number
  demoFlag: number
  address1: string
  address2: string
  address3: string
  city: string
  county: string
  postcode: string
  country: string
  timezoneOffset: string
  locale: string
  timeZone: string
  webSettings: WebSettings
  ccy: string
  ccySymbol: string
  currency: string
}

export interface WebSettings {
  id: number
  venueId: number
  bannerImage: string
  backgroundColour: string
  primaryColour: string
  primaryColourHover: string
  navBackgroundColour: string
}

export type ViewMenuOutput = {
  id: number
  name: string
  type: string
  collapse: boolean
  sections: Section[]
}

export interface Section {
  id: number
  name: string
  description: string
  position: number
  visible?: number
  images: Image[]
  items: Item[]
}

export interface Item {
  id: number
  name: string
  description?: string
  alcoholic: number
  price: number
  position: number
  visible?: number
  availabilityType: string
  sku?: string
  images?: Image[]
  available: boolean
  modifiers?: Modifier[]
}

export interface Modifier {
  id: number
  name: string
  minChoices: number
  maxChoices: number
  items: ModifierItem[]
}

export interface ModifierItem {
  id: number
  name: string
  price: number
  maxChoices: number
  position: number
  visible: number
  availabilityType: string
  available: boolean
  qty?: number
}

export interface Image {
  id: number
  image: string
}

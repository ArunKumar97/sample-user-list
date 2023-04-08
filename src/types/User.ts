export interface UserInfo {
    name: string;
    email: string;
    id: string;
    thumbnailUrl: string;
}

export interface UserListResponse {
  results: UserData[];
  info: ApiInfo;
}

export interface UserData {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: BirthdayInfo;
  registered: Registered;
  phone: string;
  cell: string;
  id: Identifier;
  picture: Avatar;
  nat: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

interface Street {
  number: number;
  name: string;
}

interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Timezone {
  offset: string;
  description: string;
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface BirthdayInfo {
  date: string;
  age: number;
}

interface Registered {
  date: string;
  age: number;
}

interface Identifier {
  name: string;
  value: string;
}

interface Avatar {
  large: string;
  medium: string;
  thumbnail: string;
}

interface ApiInfo {
  seed: string;
  results: number;
  page: number;
  version: string;
}

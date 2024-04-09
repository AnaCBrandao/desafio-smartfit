import { Location } from "./location";

export interface UnitsResponse {
    current_country_id: number,
    locations: Location[]
}

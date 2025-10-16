import { VenueResponse } from '../interfaces/interface';

export default async function getVenues(): Promise<VenueResponse> {
    const response = await fetch('https://a08-venue-explorer-backend-2.vercel.app/api/v1/venues');
    if (!response.ok) {
        throw new Error('Failed to fetch venues');
    }
    return await response.json();
}

    
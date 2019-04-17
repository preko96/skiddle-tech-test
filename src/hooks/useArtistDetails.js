import { useEffect } from 'react';
import API from '../networking';
import useFetch from './useFetch';

export default function useArtistDetails(id) {
    const [result, start] = useFetch(API.artist);
    useEffect(() => start(id), [id]);
    const { data } = result || {};
    const { results } = data || {};
    return results || {};
}

import { useEffect } from 'react';
import API from '../networking';
import useFetch from './useFetch';

export default function useEventDetails(id) {
    const [result, start] = useFetch(API.event);
    useEffect(() => start(id), [id]);
    const { data } = result || {};
    const { results } = data || {};
    return results || {};
}

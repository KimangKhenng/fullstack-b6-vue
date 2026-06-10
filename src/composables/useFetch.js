// composables/useFetch.js
import { reactive, ref } from 'vue';
import axios from 'axios';

export function useFetch(url) {
    const data = reactive([]);
    const error = ref(null);
    const loading = ref(false);

    const fetchData = async () => {
        loading.value = true;
        error.value = null;

        try {
            const response = await axios.get(url);
            data.value = response.data;
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    };

    return { data, error, loading, fetchData };
}
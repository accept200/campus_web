import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTokensStore = defineStore(
    'tokens',
    () => {
        const token = ref<string | null>(null);
        const uid = ref<number | null>(null);

        return { token, uid };
    }
);
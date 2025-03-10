const isServer = typeof window === 'undefined';
const API_URL = isServer
  ? process.env.API_URL // Server-side URL
  : process.env.NEXT_PUBLIC_API_URL; // Client-side URL

  export default {
    BASE_URL: `${API_URL}`,

    //────────────────────────────────────────────
    //? API: ---- Work
    //────────────────────────────────────────────
    GET_WORK_LIST : '/work',
    GET_WORK_BY_ID : '/work/',
    CREATE_WORK : '/work',
    UPDATE_WORK : '/work/',
    DELETE_WORK : '/work/',
}
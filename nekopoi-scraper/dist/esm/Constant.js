const BASE_URL = "https://cu8auck2lc.3z094n2681i06q8k14w31cu4q80d5p.com";
const router = {
    first: "330cceade91a6a9cd30fb8042222ed56",
    second: "71b8acf33b508c7543592acd9d9eb70d",
};
const route = router.first + "/" + router.second;
const Token = "XbGSFkQsJYbFC6pcUMCFL4oNHULvHU7WdDAXYgpmq" +
    "Ylh7p5ZCQ4QZ13GDgowiOGvAejz9X5H6DYvEQBMrc3A17SO3qwLwVkbn6YY";
const appBuildCode = "25025";
const appSignature = "pOplm8IDEDGXN55IaYohQ8CzJFvWsfXyhGvwPRD9kW" +
    "gzYSRuuvAOPfsE0AJbHVbAJyWGsGCNUIuQLJ7HbMbuFLMWwDgHNwxOrYMH";
export const URL_RECENT = `${BASE_URL}/${route}/recent`;
export const URL_LIST = (query, page) => {
    return `${BASE_URL}/${route}/listall?letter=0-9&type=${query.toLowerCase() === "jav"
        ? "jav"
        : query.toLowerCase() === "hentai"
            ? "hentai"
            : "hentai"}&page=${page ? page : 1}`;
};
export const URL_SEARCH = (query) => `${BASE_URL}/${route}/search?q=${query}&page=1`;
export const URL_POST = (id) => `${BASE_URL}/${route}/post?id=${id}`;
export const URL_SERIES = (id) => `${BASE_URL}/${route}/series?id=${id}`;
export const axiosConfig = {
    headers: {
        ["token"]: Token,
        ["accept"]: "application/json",
        ["appbuildcode"]: appBuildCode,
        ["appsignature"]: appSignature,
        ["accept-encoding"]: "deflate",
        ["user-agent"]: "okhttp/4.9.0",
    },
};

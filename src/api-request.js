const axios = require('axios').default;

const BASE_URL = 'https://eodhistoricaldata.com/api';
const PATH_REGEX = /^(\/[^/]+)*$/;


async function request(path = "", data = {}){
    return new Promise((resolve, reject) => {
        if(PATH_REGEX.test(path)){
            const url = BASE_URL + path;
            const config = {
                method: 'get',
                url: url,
                data
            };
            axios(config).then(response => resolve(response.data)).catch(reject);
        }
        else{
            reject("Invalid path!\n Must be like '[/param1[/param2[param3[...]]]]'");
        }
    });
}
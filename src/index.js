
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

/**
 * @typedef {"AS" | "AT" | "BA" | "BE" | "BK" | "BOND" | "BR" | "BSE" | "BUD" | "CC" | "CO" | "COMM" | "DU" | "EUFUND" | "F" | "FOREX" | "HA" | "HE" | "HK" | "HM" | "IC" | "IL" | "INDX" | "IR" | "JK" | "JSE" | "KAR" | "KLSE" | "KO" | "KQ" | "LS" | "LSE" | "LU" | "MC" | "MI" | "MU" | "MX" | "NB" | "NFN" | "NSE" | "OL" | "PA" | "PSE" | "RUFUND" | "SA" | "SG" | "SHE" | "SHG" | "SN" | "SR" | "ST" | "STU" | "SW" | "TA" | "TO" | "TSE" | "TW" | "TWO" | "US" | "V" | "VI" | "VN" | "VX" | "WAR" | "XETRA"} ExgSuffix
 */

class EODData {
    /**
    * Sets up the the request
    * @param {{apiToken: String, exchangeSuffix: ExgSuffix}} config - Configuration object
    */
    setup(config){
        if(!config) throw "You must provide config";
        if(!config.apiToken) throw "You must provide your API token";
        this.apiToken = config.apiToken;
        this.exchangeSuffix = config.exchangeSuffix || "";
        return this;
    }
}

module.exports = new EODData();
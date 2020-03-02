import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = 'https://eodhistoricaldata.com/api';
const PATH_REGEX = /^(\/[^/]+)*$/;


async function request(path: string, data: any): Promise<any>{
    return new Promise((resolve, reject) => {
        if(PATH_REGEX.test(path)){
            const url = BASE_URL + path;
            const config: AxiosRequestConfig = {
                method: 'get',
                url: url,
                data
            };
            axios(config).then((value: AxiosResponse<any>) => resolve(value.data)).catch(reject);
        }
        else{
            reject("Invalid path!\n Must be like '[/param1[/param2[param3[...]]]]'");
        }
    });
}

type ExgCode = "AS" | "AT" | "BA" | "BE" | "BK" | "BOND" | "BR" | "BSE" | "BUD" | "CC" | "CO" | "COMM" | "DU" | "EUFUND" | "F" | "FOREX" | "HA" | "HE" | "HK" | "HM" | "IC" | "IL" | "INDX" | "IR" | "JK" | "JSE" | "KAR" | "KLSE" | "KO" | "KQ" | "LS" | "LSE" | "LU" | "MC" | "MI" | "MU" | "MX" | "NB" | "NFN" | "NSE" | "OL" | "PA" | "PSE" | "RUFUND" | "SA" | "SG" | "SHE" | "SHG" | "SN" | "SR" | "ST" | "STU" | "SW" | "TA" | "TO" | "TSE" | "TW" | "TWO" | "US" | "V" | "VI" | "VN" | "VX" | "WAR" | "XETRA";

class EODData {

    apiToken: String = "";
    exchangeCode?: String;

    setup(config: {apiToken: string, exchangeCode?: ExgCode}){
        if(!config) throw new Error("You must provide config");
        if(!config.apiToken) throw new Error("You must provide your API token");

        this.apiToken = config.apiToken;
        this.exchangeCode = config.exchangeCode;
        return this;
    }
}

export const eodData = new EODData();
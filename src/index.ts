import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = 'https://eodhistoricaldata.com/api';
const PATH_REGEX = /^(\/[^/]+)*$/;
const SYMBOL_REGEX = /(\w+)(\.)(\w+)/;


async function request(path: string, data: any): Promise<any>{
    return new Promise((resolve, reject) => {
        if(PATH_REGEX.test(path)){
            const url = BASE_URL + path;
            const config: AxiosRequestConfig = {
                method: 'get',
                url: url,
                data: data || {}
            };
            axios(config).then((value: AxiosResponse<any>) => resolve(value.data)).catch(reject);
        }
        else{
            reject("Invalid path!\n Must be like '[/param1[/param2[param3[...]]]]'");
        }
    });
}

type ExgCode = "AS" | "AT" | "BA" | "BE" | "BK" | "BOND" | "BR" | "BSE" | "BUD" | "CC" | "CO" | "COMM" | "DU" | "EUFUND" | "F" | "FOREX" | "HA" | "HE" | "HK" | "HM" | "IC" | "IL" | "INDX" | "IR" | "JK" | "JSE" | "KAR" | "KLSE" | "KO" | "KQ" | "LS" | "LSE" | "LU" | "MC" | "MI" | "MU" | "MX" | "NB" | "NFN" | "NSE" | "OL" | "PA" | "PSE" | "RUFUND" | "SA" | "SG" | "SHE" | "SHG" | "SN" | "SR" | "ST" | "STU" | "SW" | "TA" | "TO" | "TSE" | "TW" | "TWO" | "US" | "V" | "VI" | "VN" | "VX" | "WAR" | "XETRA";
type Fmt = "json" | "csv";
type Period = "d" | "w" | "m";
type Options = {api_token?: string, from?: string, to?: string, period?: Period, filter?: string, fmt?: Fmt}

class EODApi {

    apiToken: string = "";
    exchangeCode: string = "";
    
    setup(config: {apiToken: string, exchangeCode?: ExgCode}){
        if(!config) throw new Error("You must provide config");
        if(!config.apiToken) throw new Error("You must provide your API token");
        if(!config.apiToken.length) throw new Error("You must provide a valid API token")
        this.apiToken = config.apiToken;
        this.exchangeCode = config.exchangeCode?`.${config.exchangeCode}`:"";
        return this;
    }
       
    // End-Of-Day Historical Data
    async eod(symbols: string[] | string, options?: Options){
        if(this.apiToken.length === 0) throw new Error("You need to use the setup funcion before call any function");

        if(options)
            options.api_token = this.apiToken;
        else
            options = {api_token: this.apiToken};

        let path = "/eod"
        if(typeof symbols === "string"){
            path += `/${symbols}`
            path += this.exchangeCode;
            return await request(path, options);
        }
    }
}

export default new EODApi();
const axios = require('axios');
const cheerio = require('cheerio');

export default class DataService {

    constructor() {

    }

    retrievePageData(srcUrl) {
        axios.get(srcUrl)
        .then(response => {

            let getData = html => {
                
                const $ = cheerio.load(html);
                $('#header_quick_menu li').each((i, elem) => {
                    data.push({
                    title : $(elem).find('a').text(),
                    link : $(elem).find('a').attr('href')
                    });
                });
            }
            getData(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }
}

module.exports = DataService;
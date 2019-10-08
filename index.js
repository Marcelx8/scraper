import DataService from './data-service';

const SPC_URL = 'https://www.spincasino.com';

class Index {

    data = [];

    constructor(DataService) {
        this.dataService = DataService;
    }

    init() {
        this.retrievePageData();
    }

    async retrievePageData() {
        await this.dataService.retrievePageData(SPC_URL).then((response) => {
            this.data = response;
        });

        console.log('MS INDEX >> DATA >>', this.data);
    }
    
}
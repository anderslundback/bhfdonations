import request from './request.js';

function fetchDonations(apiKey, charityId) {
    return request({
        url: `/${apiKey}/v1/charity/${charityId}/donations`,
        method: 'GET'
    });
}

const DonationHandler = {
    fetchDonations
}

export default DonationHandler;
  
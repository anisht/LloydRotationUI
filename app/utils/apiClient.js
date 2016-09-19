import axios from 'axios';

const production = false;

let baseURL;

if (production) {
    baseURL = "http://lloyd.caltech.edu";
} else {
    baseURL = "http://localhost:5000";
}

const apiClient = {
    getFroshList: function() {
        return axios.get(baseURL + "/rotation/api/prefrosh")
            .then(function(info) {
                return info.data.prefroshList;
            })
            .catch(function (err) {
                console.warn('Error in getFroshList', err);
            });
    },
    getFrosh: function(prefrosh_id) {
        return axios.get(baseURL + "/rotation/api/prefrosh/" + prefrosh_id)
            .then(function(info) {
                return info.data;
            })
            .catch(function (err) {
                console.warn('Error in getFrosh', err);
            });
    },
    getComments: function(prefrosh_id) {
        return axios.get(baseURL + "/rotation/api/feedback/" + prefrosh_id)
            .then(function(info) {
                return info.data.comments;
            })
            .catch(function (err) {
                console.warn('Error in getComments', err);
            });
    },
    postComment: function(prefrosh_id, comment) {
        return axios.post(baseURL + "/rotation/api/feedback/" + prefrosh_id, {
            comment: comment
        })
            .then(function (response) {
                return response
            })
            .catch(function (err) {
                console.warn('Error in postComment', err);
            });
    },
    deleteComment: function(comment_id) {
        return axios.delete(baseURL + "/rotation/api/comments/" + comment_id)
            .catch(function (err) {
                console.warn('Error in deleteComment', err);
            });
    },
}

export default apiClient;
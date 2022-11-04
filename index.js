const base_URL = 'http://localhost:7777';
const videoRequest = '/video-request';

const sendVideoRequest = (videoForm) => {
    const formData = new FormData(videoForm)
    return fetch(`${base_URL}${videoRequest}`, {
        method: 'POST',
        body: formData
    }).then(res => res.json());
}

document.addEventListener('DOMContentLoaded', () => {
    const videoForm = document.querySelector('#videoFormReq');

    videoForm.addEventListener('submit', async(e) => {
        e.preventDefault();
        try {
            const res = await sendVideoRequest(videoForm);
            console.log({ res });
        } catch(error) {
            console.log({ error });
        }
    });
});
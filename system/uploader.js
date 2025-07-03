const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const { fromBuffer } = require('file-type');

/**
 * Upload image to telegra.ph
 * Supported mimetype:
 * - `image/jpeg`
 * - `image/jpg`
 * - `image/png`
 * @param {Buffer|string} buffer Image Buffer/path
 * @returns {Promise<string>}
 */
const TelegraPh = async (buffer) => {
    return new Promise(async (resolve, reject) => {
        if (!Buffer.isBuffer(buffer)) buffer = fs.readFileSync(buffer)
        const { ext } = await fromBuffer(buffer);
        const form = new FormData();
        form.append('file', buffer, 'tmp.' + ext);
        
        try {
            const { data } = await axios.post('https://telegra.ph/upload', form, {
                headers: form.getHeaders(),
            });

            if (data.error) reject(data.error);
            resolve('https://telegra.ph' + data[0].src);
        } catch (error) {
            reject(error.message);
        }
    });
};

/**
 * Upload file to uguu.se
 * @param {Buffer|string} buffer File Buffer/path
 * @returns {Promise<string>}
 */
const UploadFileUgu = async (buffer) => {
    return new Promise(async (resolve, reject) => {
        if (!Buffer.isBuffer(buffer)) buffer = fs.readFileSync(buffer)
        const { ext } = await fromBuffer(buffer);
        const form = new FormData();
        form.append('files[]', buffer, 'tmp.' + ext);

        try {
            const { data } = await axios.post('https://uguu.se/upload.php', form, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
                    ...form.getHeaders(),
                },
            });

            resolve(data.files[0].url);
        } catch (error) {
            reject(error.message);
        }
    });
};

/**
 * Convert webp to mp4
 * @param {string} url
 * @returns {Promise<string>}
 */
const webp2mp4 = async (url) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await axios.get(`https://api.lolhuman.xyz/api/webp_to_mp4?apikey=GataDios&url=${url}`);
            resolve(data.result);
        } catch (error) {
            reject(error.message);
        }
    });
};

module.exports = {
    TelegraPh,
    UploadFileUgu,
    webp2mp4
};
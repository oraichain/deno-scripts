import _ from "https://deno.land/std@0.120.0/node/module.ts";

const httpPost = async (hash) => {
    const url = "https://100api.orai.dev/cv010";
    // Build formData object.
    let formData = new FormData();
    formData.append('input_source_hash', hash);

    const data = await fetch(url, {
        method: 'POST',
        body: formData
    }).then(data => data.json());
    return data;
}

const main = async (imageHash) => {
    const responses = [];
    const listImgHashes = JSON.parse(imageHash);
    for (let i = 0; i < listImgHashes.length; i++) {
        try {
            let result = await httpPost(listImgHashes[i]);
            console.log("result data: ", result);
            if (result.data && result.data.length > 0) {
                result.data = result.data.map(data => ({ ...data, score: Math.floor(data.score) }))
                responses.push(result);
            }
        } catch (error) {
            continue;
        }
    }
    console.log(JSON.stringify(responses))
};

main(...process.argv.slice(2))
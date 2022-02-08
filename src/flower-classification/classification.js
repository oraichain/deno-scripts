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

const main = async (data) => {
    const params = JSON.parse(data);
    const responses = [];
    for (let i = 0; i < params.length; i++) {
        try {
            let result = await httpPost(params[i]);
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
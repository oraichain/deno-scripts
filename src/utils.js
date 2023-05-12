import { decode } from "https://deno.land/std@0.183.0/encoding/base64.ts";

// this function assumes that the data is in base64 format, and after decoding it is a JSON string
export function decodeScriptInput(data) {
    const textDecoder = new TextDecoder();
    const symbolsBytes = decode(data);
    return JSON.parse(textDecoder.decode(symbolsBytes));
}
import {TEL_MASK} from "../masks";
import {internationalMasks} from "./internationalMasks";

export const getTelMask = (input) => {
    const defaultMask = {
        countryName: "unknown",
        countryCode: "000",
        ISOCode: "unknown",
        mask: "[+]00000000000000000",
        image: "unknown.webp",
    };
    if (!input) return defaultMask;
    let mostRelevantMask = defaultMask;

    const string = input.toString();
    const number = string.replace(/\D/g,'');

    if (number.length < 1) return defaultMask;

    const [firstNumber, secondNumber, thirdNumber, fourthNumber] = number.split('');

    if (firstNumber !== "0") {
        mostRelevantMask = internationalMasks[firstNumber].value;
        if (secondNumber && internationalMasks[firstNumber][secondNumber]) {
            mostRelevantMask = internationalMasks[firstNumber][secondNumber].value;
            if (thirdNumber && internationalMasks[firstNumber][secondNumber][thirdNumber]) {
                mostRelevantMask = internationalMasks[firstNumber][secondNumber][thirdNumber].value;
                if (fourthNumber && internationalMasks[firstNumber][secondNumber][thirdNumber][fourthNumber]) {
                    mostRelevantMask = internationalMasks[firstNumber][secondNumber][thirdNumber][fourthNumber].value;
                }
            }
        }
    }

    return mostRelevantMask;
}

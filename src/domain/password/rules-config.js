import {RULE} from "@/domain/password/rules";

export const BASE_RULES = [
    {
        name: RULE.OneLetter,
        condition: /[a-zA-Z]/
    },
    {
        name: RULE.UpperAndLower,
        condition: /(?=.*[a-z])(?=.*[A-Z])/
    },
    {
        name: RULE.OneNumber,
        condition: /\d/
    },
    {
        name: RULE.SpecialSymbol,
        condition: /[!@#$%^&*()_+\-\s]/
    },
    {
        name: RULE.LongerThan4,
        condition: /.{5,}/
    },
    {
        name: RULE.LongerThan8,
        condition: /.{9,}/
    },
    {
        name: RULE.LongerThan12,
        condition: /.{13,}/
    },
]
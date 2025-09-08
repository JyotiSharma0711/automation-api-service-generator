import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from "../types/test-config";

export default function on_cancel(input: validationInput): validationOutput {
    let totalResults = on_cancelValidations(input);

    if (input.config._debug === false) {
        totalResults.forEach((r) => {
            delete r._debugInfo;
        });
    }
    if (input.config.hideParentErrors === true) {
        // delete results with valid false and no description
        totalResults = totalResults.filter(
            (r) => !(r.valid === false && !r.description),
        );
    }
    if (input.config.onlyInvalid === true) {
        const res = totalResults.filter((r) => r.valid === false);
        if (res.length === 0) {
            const targetSuccess = totalResults.find(
                (r) => r.testName === "on_cancelValidations",
            );
            if (!targetSuccess) {
                throw new Error("Critical: Overall test result not found");
            }
            return [targetSuccess];
        }
        return res;
    }

    return totalResults;
}

function on_cancelValidations(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, "$");
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        testObj._EXTERNAL = input.externalData;

        function ON_CANCEL_CONTEXT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_cancel"];
                const domain = ["ONDC:TRV13"];
                const version = ["2.0.0"];

                function REQUIRED_ON_UPDATE_CONTEXT(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_CONTEXT_DOMAIN(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.domain",
                                );
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_CONTEXT_DOMAIN",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_CONTEXT_DOMAIN**: $.context.domain must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_DOMAIN",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_ACTION(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.action",
                                );
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_CONTEXT_ACTION",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_ACTION",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_VERSION(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.version",
                                );
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_VERSION",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_CONTEXT_VERSION**: $.context.version must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_VERSION",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_MESSAGE_ID(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.message_id",
                                );
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_MESSAGE_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_MESSAGE_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_TRANSACTION_ID(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.transaction_id",
                                );
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_TRANSACTION_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_TRANSACTION_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REGEX_CONTEXT_TIMESTAMP(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.timestamp",
                                );
                                const reg = [
                                    "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$",
                                ];
                                const action = ["on_cancel"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.followRegex(
                                    attr,
                                    reg,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REGEX_CONTEXT_TIMESTAMP",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REGEX_CONTEXT_TIMESTAMP**: all elements of $.context.timestamp must follow every regex in ["^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REGEX_CONTEXT_TIMESTAMP",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_CONTEXT_DOMAIN,
                            REQUIRED_CONTEXT_ACTION,
                            REQUIRED_CONTEXT_VERSION,
                            REQUIRED_CONTEXT_MESSAGE_ID,
                            REQUIRED_CONTEXT_TRANSACTION_ID,
                            REGEX_CONTEXT_TIMESTAMP,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ON_UPDATE_CONTEXT",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ON_UPDATE_CONTEXT","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_ON_UPDATE_CONTEXT,
                ];

                let allResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    allResults = [...allResults, ...subResult];
                }
                subResults = allResults;
                valid = subResults.every((r) => r.valid);

                delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: "ON_CANCEL_CONTEXT",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_CANCEL_CONTEXT","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"REQUIRED_ON_UPDATE_CONTEXT","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_CANCEL_MESSAGE_1(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_cancel"];

                function REQUIRED_ORDER_ID(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.id",
                        );
                        const action = ["on_cancel"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ORDER_ID",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_ORDER_ID**: $.message.order.id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ID","attr":"$.message.order.id","_RETURN_":"attr are present","action":["on_cancel"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ORDER_ID",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ID","attr":"$.message.order.id","_RETURN_":"attr are present","action":["on_cancel"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ORDER_STATUS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.status",
                        );
                        const action = ["on_cancel"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ORDER_STATUS",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_ORDER_STATUS**: $.message.order.status must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_STATUS","attr":"$.message.order.status","_RETURN_":"attr are present","action":["on_cancel"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ORDER_STATUS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_STATUS","attr":"$.message.order.status","_RETURN_":"attr are present","action":["on_cancel"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function VALID_ORDER_STATUS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.status",
                        );
                        const enumList = ["CANCELLED"];
                        const action = ["on_cancel"];

                        const validate = validations.anyIn(attr, enumList);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "VALID_ORDER_STATUS",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition VALID_ORDER_STATUS**: at least one element of $.message.order.status must be in ["CANCELLED"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_ORDER_STATUS","attr":"$.message.order.status","enumList":["CANCELLED"],"_RETURN_":"attr any in enumList","action":["on_cancel"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "VALID_ORDER_STATUS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"VALID_ORDER_STATUS","attr":"$.message.order.status","enumList":["CANCELLED"],"_RETURN_":"attr any in enumList","action":["on_cancel"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_CANCELLED_BY(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.cancellation.cancelled_by",
                        );
                        const action = ["on_cancel"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_CANCELLED_BY",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_CANCELLED_BY**: $.message.order.cancellation.cancelled_by must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CANCELLED_BY","attr":"$.message.order.cancellation.cancelled_by","_RETURN_":"attr are present","action":["on_cancel"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_CANCELLED_BY",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_CANCELLED_BY","attr":"$.message.order.cancellation.cancelled_by","_RETURN_":"attr are present","action":["on_cancel"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_CANCELLATION_REASON_ID(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.cancellation.reason.id",
                        );
                        const action = ["on_cancel"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_CANCELLATION_REASON_ID",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_CANCELLATION_REASON_ID**: $.message.order.cancellation.reason.id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CANCELLATION_REASON_ID","attr":"$.message.order.cancellation.reason.id","_RETURN_":"attr are present","action":["on_cancel"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_CANCELLATION_REASON_ID",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_CANCELLATION_REASON_ID","attr":"$.message.order.cancellation.reason.id","_RETURN_":"attr are present","action":["on_cancel"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_UPDATED_AT(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.updated_at",
                        );
                        const action = ["on_cancel"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_UPDATED_AT",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_UPDATED_AT**: $.message.order.updated_at must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_UPDATED_AT","attr":"$.message.order.updated_at","_RETURN_":"attr are present","action":["on_cancel"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_UPDATED_AT",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_UPDATED_AT","attr":"$.message.order.updated_at","_RETURN_":"attr are present","action":["on_cancel"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function VALID_CANCELLATION_REASON_ID(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.cancellation.reason.id",
                        );
                        const enumList = [
                            "000",
                            "001",
                            "002",
                            "003",
                            "004",
                            "005",
                            "011",
                            "012",
                            "013",
                            "014",
                        ];
                        const action = ["on_cancel"];

                        const validate = validations.anyIn(attr, enumList);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "VALID_CANCELLATION_REASON_ID",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition VALID_CANCELLATION_REASON_ID**: at least one element of $.message.order.cancellation.reason.id must be in ["000", "001", "002", "003", "004", "005", "011", "012", "013", "014"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_CANCELLATION_REASON_ID","attr":"$.message.order.cancellation.reason.id","enumList":["000","001","002","003","004","005","011","012","013","014"],"_RETURN_":"attr any in enumList","action":["on_cancel"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "VALID_CANCELLATION_REASON_ID",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"VALID_CANCELLATION_REASON_ID","attr":"$.message.order.cancellation.reason.id","enumList":["000","001","002","003","004","005","011","012","013","014"],"_RETURN_":"attr any in enumList","action":["on_cancel"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_ORDER_ID,
                    REQUIRED_ORDER_STATUS,
                    VALID_ORDER_STATUS,
                    REQUIRED_CANCELLED_BY,
                    REQUIRED_CANCELLATION_REASON_ID,
                    REQUIRED_UPDATED_AT,
                    VALID_CANCELLATION_REASON_ID,
                ];

                let allResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    allResults = [...allResults, ...subResult];
                }
                subResults = allResults;
                valid = subResults.every((r) => r.valid);

                delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: "ON_CANCEL_MESSAGE_1",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_CANCEL_MESSAGE_1","action":["on_cancel"],"_RETURN_":[{"_NAME_":"REQUIRED_ORDER_ID","attr":"$.message.order.id","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"REQUIRED_ORDER_STATUS","attr":"$.message.order.status","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"VALID_ORDER_STATUS","attr":"$.message.order.status","enumList":["CANCELLED"],"_RETURN_":"attr any in enumList","action":["on_cancel"]},{"_NAME_":"REQUIRED_CANCELLED_BY","attr":"$.message.order.cancellation.cancelled_by","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"REQUIRED_CANCELLATION_REASON_ID","attr":"$.message.order.cancellation.reason.id","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"REQUIRED_UPDATED_AT","attr":"$.message.order.updated_at","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"VALID_CANCELLATION_REASON_ID","attr":"$.message.order.cancellation.reason.id","enumList":["000","001","002","003","004","005","011","012","013","014"],"_RETURN_":"attr any in enumList","action":["on_cancel"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }

        const testFunctions: testFunctionArray = [
            ON_CANCEL_CONTEXT,
            ON_CANCEL_MESSAGE_1,
        ];

        let allResults: validationOutput = [];
        for (const fn of testFunctions) {
            const subResult = fn(input);
            allResults = [...allResults, ...subResult];
        }
        subResults = allResults;
        valid = subResults.every((r) => r.valid);

        delete testObj._EXTERNAL;
    }
    return [
        {
            testName: "on_cancelValidations",
            valid: valid,
            code: valid ? 200 : 30000,
            _debugInfo: {
                fedConfig: `
{"_NAME_":"on_cancelValidations","_RETURN_":[{"_NAME_":"ON_CANCEL_CONTEXT","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"REQUIRED_ON_UPDATE_CONTEXT","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_cancel"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}]},{"_NAME_":"ON_CANCEL_MESSAGE_1","action":["on_cancel"],"_RETURN_":[{"_NAME_":"REQUIRED_ORDER_ID","attr":"$.message.order.id","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"REQUIRED_ORDER_STATUS","attr":"$.message.order.status","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"VALID_ORDER_STATUS","attr":"$.message.order.status","enumList":["CANCELLED"],"_RETURN_":"attr any in enumList","action":["on_cancel"]},{"_NAME_":"REQUIRED_CANCELLED_BY","attr":"$.message.order.cancellation.cancelled_by","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"REQUIRED_CANCELLATION_REASON_ID","attr":"$.message.order.cancellation.reason.id","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"REQUIRED_UPDATED_AT","attr":"$.message.order.updated_at","_RETURN_":"attr are present","action":["on_cancel"]},{"_NAME_":"VALID_CANCELLATION_REASON_ID","attr":"$.message.order.cancellation.reason.id","enumList":["000","001","002","003","004","005","011","012","013","014"],"_RETURN_":"attr any in enumList","action":["on_cancel"]}]}]}
`,
            },
        },
        ...subResults,
    ];
}

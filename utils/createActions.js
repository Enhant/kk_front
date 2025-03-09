export default function createActions(
    namespace,
    callPayload,
    successPayload,
    failPayload
) {
    return {
        call: (...args) => {
            return {
                type: namespace.CALL,
                payload: callPayload.apply(null, args),
            }
        },
        success: (...args) => ({
            type: namespace.SUCCESS,
            payload: successPayload.apply(null, args),
        }),
        fail: (...args) => ({
            type: namespace.FAIL,
            payload: failPayload.apply(null, args),
        })
    }
}

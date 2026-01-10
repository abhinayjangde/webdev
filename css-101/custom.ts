
// there are 3 states of promise: pending, fulfilled, rejected
enum PromiseState {
    PENDING = "pending",
    FULFILLED = "fulfilled",
    REJECTED = "rejected"

}
type TPromiseResolve<T> = (value: T) => void;
type TPromiseReject<K> = (value: K) => void;

type TPromiseExecutor<T, K> = (resolve: TPromiseResolve<T>, reject: TPromiseReject<K>) => void;
type TPromiseThenCallback<T> = (value: T) => void;
type TPromiseCatchCallback<K> = (reason: K) => void;

class MyPromise<T, K> {
    private _state: PromiseState = PromiseState.PENDING;

    private _successCallbackHandler: TPromiseThenCallback<T>[] = [];
    private _failureCallbackHandler: TPromiseCatchCallback<K>[] = [];
    constructor(executor: TPromiseExecutor<T, K>) {
        executor(
            this._promiseResolver,
            this._promiseCather
        );
    }

    public then(handlerFn: TPromiseThenCallback<T>) {
        this._successCallbackHandler.push(handlerFn)
    }
    private _promiseResolver(value: T) {
        if (this._state === PromiseState.FULFILLED) return;
        this._state = PromiseState.FULFILLED;
        this._successCallbackHandler.forEach(cb => cb(value))
    }

    private _promiseCather(reason: K) {
        if (this._state === PromiseState.REJECTED) return;
        this._state = PromiseState.REJECTED;
        this._failureCallbackHandler.forEach(cb => cb(reason))
    }
}


new MyPromise((resolve, reject) => {
    let err = false;
    if (!err) {
        resolve("done")
    }
    else {
        reject("error")
    }
})
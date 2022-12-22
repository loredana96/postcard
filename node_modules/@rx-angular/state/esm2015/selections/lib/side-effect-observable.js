import { merge, queueScheduler, Subject } from 'rxjs';
import { mergeAll, observeOn } from 'rxjs/operators';
export function createSideEffectObservable(stateObservables = new Subject()) {
    const effects$ = merge(stateObservables.pipe(mergeAll(), observeOn(queueScheduler)));
    function nextEffectObservable(effect$) {
        stateObservables.next(effect$);
    }
    function subscribe() {
        return effects$.subscribe();
    }
    return {
        effects$,
        nextEffectObservable,
        subscribe
    };
}
//# sourceMappingURL=side-effect-observable.js.map
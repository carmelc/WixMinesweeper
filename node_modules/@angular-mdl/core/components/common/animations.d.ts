export interface AnimationPlayer {
    onDone(fn: () => void): void;
    play(): void;
}
export declare class NativeWebAnimationPlayer implements AnimationPlayer {
    private element;
    private keyframes;
    private duration;
    private easing;
    private onDoneCallback;
    constructor(element: any, keyframes: {
        [key: string]: string | number;
    }[], duration: number, easing: string);
    onDone(fn: () => void): void;
    play(): void;
}
export declare class NoopAnimationPlayer implements AnimationPlayer {
    private element;
    private keyframes;
    private duration;
    private easing;
    private onDoneCallback;
    constructor(element: any, keyframes: {
        [key: string]: string | number;
    }[], duration: number, easing: string);
    onDone(fn: () => void): void;
    play(): void;
}
export declare abstract class Animations {
    abstract animate(element: any, keyframes: {
        [key: string]: string | number;
    }[], duration: number, easing: string): AnimationPlayer;
}
export declare class NativeWebAnimations implements Animations {
    animate(element: any, keyframes: {
        [key: string]: string | number;
    }[], duration: number, easing: string): AnimationPlayer;
}
export declare class NoopWebAnimations implements Animations {
    animate(element: any, keyframes: {
        [key: string]: string | number;
    }[], duration: number, easing: string): AnimationPlayer;
}

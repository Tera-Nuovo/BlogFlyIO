import { createEffect, onCleanup, createSignal } from 'solid-js';
import p5 from 'p5';

type P5SketchProps = {
    sketch: (p5: p5) => void;
};

export default function P5Sketch({ sketch }: P5SketchProps) {
    const [canvasContainer, setCanvasContainer] = createSignal<HTMLDivElement>();

    createEffect(() => {
        const p5Instance = new p5(sketch, canvasContainer());

        onCleanup(() => {
            p5Instance.remove();
        });
    });

    return (
        <div
            ref={setCanvasContainer}
        ></div>
    );
}

import p5 from 'p5';
import P5Sketch from '../../components/P5Sketch';
import { nihonSketch } from '~/P5Sketches/nihon/nihon';

export const title = 'My p5.js Sketch';
export const date = 'November 14, 2022';
export const description = 'A simple p5.js sketch';
// random image
export const thumbnailUrl = 'https://source.unsplash.com/random/800x600';


function App() {
    return (
        <div>
            <h1>Gocha Gocha!</h1>
            <P5Sketch sketch={nihonSketch} />
        </div>
    );
}

export default App;
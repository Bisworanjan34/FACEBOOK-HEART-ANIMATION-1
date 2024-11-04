// pages/index.js
 // Adjust the import path as needed

import Animation from "./components/Animation";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // This line ensures styles are imported
config.autoAddCss = false; 

export default function Home() {
    return (
        <div>
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Animation />
            </main>
        </div>
    );
}

import { useState } from "react";

function Counter() {
    // Membuat variable result
    let [result, setResult] = useState(0);

    /**
     * Membuat fungsi handleClick.
     * Dijalankan ketika button diklik.
     */
    function handleClick() {
        // Mengupdate state dengan fungsi setter
        setResult(result + 1);
        // Log state untuk pembelajaran
        console.log("Current result:", result);
    }

    // Menambahkan event click pada button
    return (
        <div>
            <p>Result: {result}</p>
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

export default Counter;
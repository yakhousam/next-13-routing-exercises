import React from "react";
import Link from "next/link";

function ScreenSaverExercise() {
  const COLORS = [
    "red",
    "blue",
    "green",
    "silver",
    "yellow",
    "orange",
    "white",
  ].sort();
  return (
    <main>
      <p>Choose your color:</p>
      <ul>
        {COLORS.map((color) => (
          <li key={color}>
            <Link href={`/exercises/01-screensaver/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ScreenSaverExercise;

"use client";
import { useState, useEffect } from "react";

export default function NotesPage() {
  const [notes, setNotes] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) setNotes(JSON.parse(saved));
  }, []);

  function addNote() {
    if (!input.trim()) return;
    const updated = [...notes, input.trim()];
    setNotes(updated);
    localStorage.setItem("notes", JSON.stringify(updated));
    setInput("");
  }

  function deleteNote(index: number) {
    const updated = notes.filter((_, i) => i !== index);
    setNotes(updated);
    localStorage.setItem("notes", JSON.stringify(updated));
  }



  return (
    <main style={{ padding: 24, fontFamily: "system-ui", color: "#111" }}>
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>Build Notes</h1>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a build note..."
          style={{
            padding: 10,
            width: 360,
            border: "1px solid #999",
            borderRadius: 8,
            background: "#fff",
            color: "#111",
          }}
        />

        <button
          onClick={addNote}
          style={{
            padding: "10px 14px",
            border: "1px solid #333",
            borderRadius: 8,
            background: "#111",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Add Note
        </button>
      </div>

      <p style={{ marginBottom: 8, opacity: 0.8 }}>
        Notes saved: <strong>{notes.length}</strong>
      </p>

      <ul>
        {notes.map((note, i) => (
          <li
            key={i}
            style={{
                marginBottom: 6,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
                paddingBottom: 4,
            }}
            >
            <span>{note}</span>

            <button
                onClick={() => deleteNote(i)}
                style={{
                marginLeft: 12,
                background: "#e74c3c",
                color: "white",
                border: "none",
                padding: "4px 8px",
                borderRadius: 4,
                cursor: "pointer",
                }}
            >
                Delete
            </button>
            </li>

        ))}
      </ul>
    </main>
  );
}

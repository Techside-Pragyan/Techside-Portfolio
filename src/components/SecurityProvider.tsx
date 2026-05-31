"use client";
import { useEffect } from "react";

export default function SecurityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // ─── 1. Disable Right-Click Context Menu ───────────────────────────────
    const disableContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", disableContextMenu);

    // ─── 2. Disable Image Dragging ─────────────────────────────────────────
    const disableImgDrag = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === "IMG") {
        e.preventDefault();
      }
    };
    document.addEventListener("dragstart", disableImgDrag);

    // ─── 3. Block DevTools Keyboard Shortcuts ──────────────────────────────
    const blockDevTools = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
      }
      // Ctrl+Shift+I (Inspect Element)
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
      }
      // Ctrl+Shift+C (Inspect cursor)
      if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault();
      }
      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
      }
      // Ctrl+U (View Source)
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
      }
      // Ctrl+S (Save Page)
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", blockDevTools);

    // ─── 4. Console Warning Message ───────────────────────────────────────
    const style = [
      "color: #ff4444",
      "font-size: 20px",
      "font-weight: bold",
      "padding: 8px 12px",
      "background: #111",
      "border-radius: 4px",
    ].join(";");
    const msgStyle = [
      "color: #ffffff",
      "font-size: 14px",
      "padding: 4px 12px",
    ].join(";");

    console.log("%c⚠️  STOP!", style);
    console.log(
      "%cThis browser feature is intended for developers. If someone told you to copy-paste something here, it may be a scam to steal your information.",
      msgStyle
    );

    // ─── Cleanup on unmount ────────────────────────────────────────────────
    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("dragstart", disableImgDrag);
      document.removeEventListener("keydown", blockDevTools);
    };
  }, []);

  return <>{children}</>;
}

"use client";
import { useEffect, useState } from "react";

interface Cell {
  text: string;
  style: React.CSSProperties;
}

export default function IphonePriceTable() {
  const [rows, setRows] = useState<Cell[][]>([]);

  useEffect(() => {
    const fetchSheet = async () => {

      const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;
      const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}?includeGridData=true&key=${API_KEY}`;

      const res = await fetch(url);
      const data = await res.json();

      const rowData = data.sheets[0].data[0].rowData;
      const parsed: Cell[][] = rowData.map((row: any) =>
        (row.values || []).map((cell: any) => {
          const text = cell.formattedValue || "";
          const fmt = cell.effectiveFormat || {};
          const textFmt = fmt.textFormat || {};
          const bg = fmt.backgroundColor || {};
          const fg = textFmt.foregroundColor || {};

          const style: React.CSSProperties = {
            backgroundColor: bg.red !== undefined ? `rgba(${(bg.red || 0) * 255}, ${(bg.green || 0) * 255}, ${(bg.blue || 0) * 255}, ${bg.alpha ?? 1})` : undefined,
            color: fg.red !== undefined ? `rgba(${(fg.red || 0) * 255}, ${(fg.green || 0) * 255}, ${(fg.blue || 0) * 255}, ${fg.alpha ?? 1})` : undefined,
            fontWeight: textFmt.bold ? "bold" : "normal",
            fontStyle: textFmt.italic ? "italic" : "normal",
            fontSize: textFmt.fontSize ? `${textFmt.fontSize}px` : "14px",
            textDecoration: textFmt.strikethrough ? "line-through" : textFmt.underline ? "underline" : "none",
            padding: "6px 12px",
            border: "1px solid #ddd",
          };

          return { text, style };
        })
      );

      setRows(parsed);
    };

    fetchSheet();
  }, []);
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-GB');


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">{`📱 Báo giá iPhone 17 Pro tại iConMobile Ngày ${formattedDate}`}</h2>
      <table className="border-collapse w-full text-center max-w-screen-xl m-auto">
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} style={cell.style}>
                  {cell.text}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

     
    </div>
  );
}

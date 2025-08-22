"use client";

import React, { useEffect, useState } from "react";

type CellData = {
  value: string;
  backgroundColor?: string;
  textColor?: string;
};

export default function IphonePriceTable() {
  const [data, setData] = useState<CellData[][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const SHEET_ID = "YOUR_SHEET_ID"; // thay bằng ID sheet
      const API_KEY = "YOUR_API_KEY"; // thay bằng Google API key

      const res = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}?fields=sheets.data.rowData.values.formattedValue,sheets.data.rowData.values.userEnteredFormat.backgroundColor,sheets.data.rowData.values.userEnteredFormat.textFormat.foregroundColor&key=${API_KEY}`
      );
      const json = await res.json();

      const rows = json.sheets[0].data[0].rowData || [];
      const tableData: CellData[][] = rows.map((row: any) =>
        (row.values || []).map((cell: any) => {
          const bg = cell.userEnteredFormat?.backgroundColor;
          const fg = cell.userEnteredFormat?.textFormat?.foregroundColor;

          const backgroundColor = bg
            ? `rgba(${Math.floor((bg.red || 0) * 255)},${Math.floor(
                (bg.green || 0) * 255
              )},${Math.floor((bg.blue || 0) * 255)},${bg.alpha || 1})`
            : "#ffffff";

          const textColor = fg
            ? `rgba(${Math.floor((fg.red || 0) * 255)},${Math.floor(
                (fg.green || 0) * 255
              )},${Math.floor((fg.blue || 0) * 255)},${fg.alpha || 1})`
            : "#000000";

          return {
            value: cell.formattedValue || "",
            backgroundColor,
            textColor,
          };
        })
      );

      setData(tableData);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Báo giá iPhone tại iConMobile
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-center">
          <tbody>
            {data?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-4 py-2 border border-gray-300"
                    style={{
                      backgroundColor: cell.backgroundColor,
                      color: cell.textColor,
                    }}
                  >
                    {cell.value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

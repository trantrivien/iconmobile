"use client";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface Cell {
  text: string;
  style: React.CSSProperties;
}

interface IphonePriceTableProps{
  data: any,
  productId: string,
  sheetTitle: any
}

export default function IphonePriceTable({data , productId, sheetTitle}:IphonePriceTableProps) {
  const [loading, setIsloading] = useState(true);

  const [rows, setRows] = useState<Cell[][]>([]);

  if (!data) return <></>;

  useEffect(() => {
    try {
      const fetchSheet = async () => {

       

        const rowData = data?.sheets?.[0]?.data[0]?.rowData;
        const parsed: Cell[][] = (rowData || [])
        .map((row: any) => {
          const cleanRow = (row.values || [])
            .map((cell: any) => {
              if (!cell) return null;  // ⭐ bỏ cell null ngay từ đầu
      
              const rawText = cell.formattedValue ?? "";
              const trimmedText = rawText.trim();
      
              if (!trimmedText) return null; // ⭐ bỏ cell rỗng
      
              const fmt = cell.effectiveFormat || {};
              const textFmt = fmt.textFormat || {};
              const bg = fmt.backgroundColor || {};
              const fg = textFmt.foregroundColor || {};
      
              const style: React.CSSProperties = {
                backgroundColor:
                  bg.red !== undefined
                    ? `rgba(${(bg.red || 0) * 255}, ${(bg.green || 0) * 255}, ${
                        (bg.blue || 0) * 255
                      }, ${bg.alpha ?? 1})`
                    : undefined,
                color:
                  fg.red !== undefined
                    ? `rgba(${(fg.red || 0) * 255}, ${(fg.green || 0) * 255}, ${
                        (fg.blue || 0) * 255
                      }, ${fg.alpha ?? 1})`
                    : undefined,
                fontWeight: textFmt.bold ? "bold" : "normal",
                fontStyle: textFmt.italic ? "italic" : "normal",
                fontSize: textFmt.fontSize ? `${textFmt.fontSize}px` : "14px",
                textDecoration: textFmt.strikethrough
                  ? "line-through"
                  : textFmt.underline
                  ? "underline"
                  : "none",
                padding: "6px 12px",
                border: "1px solid #ddd",
              };
      
              return { text: trimmedText, style };
            })
            .filter((cell:any): cell is Cell => cell !== null);
      
          return cleanRow; 
        })
        .filter((row: Cell[]) => row.length > 0);
      

        setRows(parsed);
        setIsloading(false);
      };
      fetchSheet();
    } catch (error) {
      setIsloading(false);
    }
  }, [data]);
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB");

  if (loading) {
    return (
      <div className="flex items-center absolute top-0 bg-white justify-center h-screen w-full flex-col gap-3">
        <Loader2 className="animate-spin text-xl" size={50} />
        <p>Loading..</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">{`📱 Báo giá ${sheetTitle} tại iConMobile Ngày ${formattedDate}`}</h2>
      <div className="w-full overflow-x-auto">
      <table className="price-table border-collapse w-full text-center max-w-screen-xl m-auto">
        <tbody>
          {rows?.map((row, i) => (
            <tr key={i} className="">
              {row.map((cell, j) => (
                <td key={j}>
                  {cell?.text}
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

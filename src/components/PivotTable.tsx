"use client";

import { useEffect, useRef } from 'react';
import WebDataRocks from '@webdatarocks/webdatarocks';

interface PivotTableProps {
  data: any;
  width?: string;
  height?: string;
}

export default function PivotTable({ data, width = "100%", height = "400px" }: PivotTableProps) {
  const pivotRef = useRef<HTMLDivElement>(null);
  const pivotInstance = useRef<any>(null);

  useEffect(() => {
    if (pivotRef.current && !pivotInstance.current) {
      pivotInstance.current = new WebDataRocks({
        container: pivotRef.current,
        toolbar: true,
        report: {
          dataSource: {
            data: data
          },
          slice: {
            rows: [
              { uniqueName: "region" }
            ],
            columns: [
              { uniqueName: "category" }
            ],
            measures: [
              { uniqueName: "sales", aggregation: "sum" },
              { uniqueName: "profit", aggregation: "sum" }
            ]
          }
        },
        width: width,
        height: height
      });
    }

    return () => {
      if (pivotInstance.current) {
        pivotInstance.current.dispose();
        pivotInstance.current = null;
      }
    };
  }, [data, width, height]);

  return (
    <div className="pivot-table-container">
      <div ref={pivotRef} />
    </div>
  );
} 
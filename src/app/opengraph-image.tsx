import { ImageResponse } from "next/og";

export const alt = "Freshroots Malawi — integrated agribusiness";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#F6F1DF",
          color: "#253C2D",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              border: "2px solid #687C4C",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#687C4C",
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            F
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-1px" }}>freshroots</span>
            <span style={{ fontSize: "12px", letterSpacing: "5px", marginTop: "4px" }}>MALAWI</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "850px" }}>
          <span style={{ color: "#56683E", fontSize: "18px", letterSpacing: "4px", textTransform: "uppercase" }}>
            Integrated agribusiness · Malawi
          </span>
          <span style={{ fontSize: "76px", lineHeight: 1.05, fontWeight: 600, letterSpacing: "-4px", marginTop: "22px" }}>
            Quality rice and maize.
          </span>
          <span style={{ fontSize: "26px", color: "#5B5F56", marginTop: "22px" }}>
            Focused on producing quality crops.
          </span>
        </div>
        <div style={{ height: "7px", width: "100%", background: "#687C4C" }} />
      </div>
    ),
    size,
  );
}

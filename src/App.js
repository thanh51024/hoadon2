import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ReceiptForm from "./ReceiptForm";
import ReceiptGenerator from "./ReceiptGenerator";

function App() {
  const [receiptData, setReceiptData] = useState(null);

  const handleGenerate = (data) => {
    setReceiptData(data); // Cập nhật dữ liệu biên lai
  };

  const handleReset = () => {
    setReceiptData(null); // Reset dữ liệu biên lai, form vẫn hiển thị
  };

  return (
    <Router>
      <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
        {/* Form luôn hiển thị */}

        {/* Điều hướng và hiển thị biên lai nếu có dữ liệu */}
        <Routes>
          <Route
            path="/"
            element={<ReceiptForm onGenerate={handleGenerate} />}
          />

          <Route
            path="/hoadon2"
            element={
              receiptData ? (
                <ReceiptGenerator data={receiptData} onReset={handleReset} />
              ) : (
                <div>Vui lòng tạo biên lai.</div>
              )
            }
          />
          {/* Thêm các route khác nếu cần */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

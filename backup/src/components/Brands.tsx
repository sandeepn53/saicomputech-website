export default function Brands() {
  const brands = [
    "HP",
    "Dell",
    "Lenovo",
    "ASUS",
    "Acer",
    "Canon",
    "Epson",
    "Intel",
    "AMD",
    "Microsoft",
    "Cisco",
    "D-Link",
    "TP-Link",
    "Matrix",
    "Sophos",
  ];

  return (
    <section
      style={{
        padding: "90px 20px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "15px",
          }}
        >
          Our Brand Partners
        </h2>

        <p
          style={{
            color: "#666",
            marginBottom: "50px",
          }}
        >
          We supply genuine products from the world's leading technology brands.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "25px",
          }}
        >
          {brands.map((brand) => (
            <div
              key={brand}
              style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "14px",
                boxShadow: "0 10px 25px rgba(0,0,0,.08)",
                fontWeight: "bold",
                fontSize: "22px",
                transition: ".3s",
              }}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
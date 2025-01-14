import React from "react";

const EquipmentPage = () => {
  const machines = [
    { id: 1, description: "CNC Turning Center", make: "FG-400", spec: "Ø 400 X 600 Length", qty: 2 },
    { id: 2, description: "CNC Turning Center", make: "ACE", spec: "Ø 250 X 700 Length", qty: 1 },
    { id: 3, description: "VMC", make: "Pinnacle", spec: "2500 X 600 X 700", qty: 1 },
    { id: 4, description: "VMC", make: "Jyoti", spec: "1200 X 400 X 600", qty: 1 },
    { id: 5, description: "Center Lathe", make: "BECO", spec: "Ø 520 X 3000 Length", qty: 2 },
    { id: 6, description: "Milling (Universal)", make: "USSR", spec: "300 X 300 X 1000 mm", qty: 1 },
    { id: 7, description: "Milling (Vertical)", make: "Sweden", spec: "400 X 500 X 1000 mm", qty: 2 },
    { id: 8, description: "Radial Drilling", make: "Z-J (Japan)", spec: "Ø 63 (2 ½\") mm", qty: 1 },
    { id: 9, description: "Gear Hobbing", make: "Copper-futer", spec: "4 Module X Ø 650 mm", qty: 1 },
    { id: 10, description: "Surface Grinding", make: "HMT", spec: "300 X 1000 mm", qty: 1 },
    { id: 11, description: "Band Saw", make: "Automatic", spec: "Ø 250 mm", qty: 1 },
    { id: 12, description: "Slotting Machine", make: "Mahalaxmi", spec: "300/500 Stroke", qty: 1 },
    { id: 13, description: "Welding Rectifier", make: "Indusind", spec: "400P", qty: 1 },
  ];

  const instruments = [
    { id: 1, description: "Vernier Caliper", make: "Mitutoyo", spec: "Up to 2000 mm" },
    { id: 2, description: "Bore Gauge", make: "Mitutoyo", spec: "Up to 500 mm" },
    { id: 3, description: "Dial gauge & Stand", make: "Baker Dial", spec: "10 mm / 25 mm" },
    { id: 4, description: "Height Gauge", make: "Mitutoyo", spec: "0-300, 0-600" },
    { id: 5, description: "Slip Gauge Box", make: "Imported", spec: "1 Set" },
    { id: 6, description: "Granite Surface Plate", make: "Kirloskar", spec: "600 X 600 mm" },
    { id: 7, description: "Gear Tooth Vernier", make: "Accurate", spec: "Up to 150 mm" },
    { id: 8, description: "Tangent Micrometers", make: "Mitutoyo", spec: "Up to 200 mm" },
    { id: 9, description: "Internal Micrometers", make: "French", spec: "0 to 500 mm" },
    { id: 10, description: "CMM", make: "Accurate", spec: "X-1000, Y-600, Z-500" },
  ];

  return (
    <div className="bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Our Equipment & Capabilities</h1>
          <p className="text-md text-gray-600 mt-2">
            Explore the machines and instruments that power our operations.
          </p>
        </header>

        {/* Machines Table */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4">List of Machines</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Sr. No.</th>
                  <th className="border border-gray-300 px-4 py-2">M/C Description</th>
                  <th className="border border-gray-300 px-4 py-2">Make</th>
                  <th className="border border-gray-300 px-4 py-2">Specification</th>
                  <th className="border border-gray-300 px-4 py-2">Qty</th>
                </tr>
              </thead>
              <tbody>
                {machines.map((machine) => (
                  <tr key={machine.id}>
                    <td className="border border-gray-300 px-4 py-2 text-center">{machine.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{machine.description}</td>
                    <td className="border border-gray-300 px-4 py-2">{machine.make}</td>
                    <td className="border border-gray-300 px-4 py-2">{machine.spec}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{machine.qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Instruments Table */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Range of Instruments</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Sr. No.</th>
                  <th className="border border-gray-300 px-4 py-2">Description</th>
                  <th className="border border-gray-300 px-4 py-2">Make</th>
                  <th className="border border-gray-300 px-4 py-2">Specification</th>
                </tr>
              </thead>
              <tbody>
                {instruments.map((instrument) => (
                  <tr key={instrument.id}>
                    <td className="border border-gray-300 px-4 py-2 text-center">{instrument.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{instrument.description}</td>
                    <td className="border border-gray-300 px-4 py-2">{instrument.make}</td>
                    <td className="border border-gray-300 px-4 py-2">{instrument.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EquipmentPage;
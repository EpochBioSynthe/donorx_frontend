import React from "react";

const mock = [
  {id:1, donor:"John Doe", organ:"Kidney", date:"2024-01-03"},
  {id:2, donor:"Jane Smith", organ:"Liver", date:"2024-02-12"}
];

export default function DonationRecord(){
  return (
    <div>
      <h2>Donation Records</h2>
      <div style={{display:'grid', gap:12, marginTop:12}}>
        {mock.map(r => (
          <div key={r.id} className="card">
            <strong>{r.donor}</strong>
            <div style={{fontSize:13, color:'#666'}}>{r.organ} • {r.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

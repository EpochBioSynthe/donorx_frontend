import React, {useState} from "react";

export default function OrganSearch(){
  const [q, setQ] = useState("");
  function handleSearch(e){
    e.preventDefault();
    alert(`Searching for ${q} (demo)`);
  }

  return (
    <div className="form-box">
      <h2>Organ Search</h2>
      <form onSubmit={handleSearch}>
        <label>Organ</label>
        <input placeholder="e.g. Kidney" value={q} onChange={e=>setQ(e.target.value)} />
        <button className="btn" type="submit">Search</button>
      </form>
    </div>
  );
}

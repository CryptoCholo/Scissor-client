import { useState } from "react";

export default function InputComp() {
  const [url, setUrl] = useState("");
  const [shortLink, setShortLink] = useState(false);

  const onChange = ({ target }) => setUrl(target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(localStorage)
      let token = localStorage.getItem("token");

      if (!token) {
        console.log("User is not authenticated");
        window.location.href = "/login";
        return;
      }     
       const response = await fetch("https://cezor.onrender.com/urls", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({ url }),
      });
      if (!response.ok) {
        let log = await response.json()
        console.log(log)
        console.error("Request failed:", response.statusText);
        return;
      }
      const data = await response.json();
      console.log(data);
      setShortLink(data.short)
      
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="relative flex gap-px items-center p-5 justify-between w-full">
        <input type="text" placeholder="https://" value={url} onChange={onChange} className="pr-20 w-full rounded-l-xl py-3 px-6 text-xl font-bold border border-gray-800"/>
          <button type="submit" className="w-1/4 text-xl rounded-r-xl rounded-l-none font-bold bg-green-800 text-green-100">
            Create
          </button>
      </form>
      { shortLink && <input type="text"  value={shortLink} readOnly onChange={onChange} className="pr-20 w-full rounded-l-xl py-3 px-6 text-xl font-bold border border-gray-800"/>}
    </div>
  );
}

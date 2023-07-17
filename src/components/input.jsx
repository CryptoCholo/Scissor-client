import { useState } from "react";
import QRCodeImage from "./qrcode"

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
       const response = await fetch("http://localhost:5000/urls", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ url }),
      });
      if (!response.ok) {
       await response.json()
       
        console.error("Request failed:", response.statusText);
        return;
      }
      const data = await response.json();
      console.log(typeof data.url.qrcode)
      setShortLink(data.url)
      
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="relative flex gap-px shortLinks-center p-5 justify-between w-full">
        <input type="text" placeholder="https://" value={url} onChange={onChange} className="pr-20 w-full rounded-l-xl py-3 px-6 text-xl font-bold border border-gray-800"/>
          <button type="submit" className="w-1/4 text-xl rounded-r-xl rounded-l-none font-bold bg-green-800 text-green-100">
            Create
          </button>
      </form>
      { shortLink && 
          <table className="w-3/4 divide-y divide-green-200 mt-8 text-sm p-5">
            <thead className="divide-y divide-stone-200 w-full">
                <tr key={shortLink._id} className="w-full">
                  <td className="whitespace-nowrap font-bold px-4 py-4 text-green-700">
                    {shortLink.short}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-green-700">
                    <QRCodeImage imageUrl={shortLink.qrcode} className="h-3/4 w-3/4"/>
                  </td>
                  {/* <td className="whitespace-nowrap px-4 py-4 text-green-900">
                      {shortLink.clicks}
                  </td> */}
                </tr>
            </thead>
          </table>
}
    </div>
  );
}

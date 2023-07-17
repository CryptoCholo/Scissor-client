import { useState, useEffect } from 'react';
import QRCodeImage from "../components/qrcode"




function Dashboard() {
  const [Urls, setUrls] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/urls",{
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
   
    })
      .then(response => response.json())
      .then(data => {
        setUrls(data.urls)
      })
      .catch(error => {
        console.error('Error fetching urls:', error);
      });
  }, [])

  return (
    <div className='w-screen mt-14 p-5 flex flex-col items-center justify-start'>
        <h2 className='h-6 font-bold' >YOUR URL COLLECTION</h2>
        <table className="w-3/4 divide-y divide-green-200 mt-8 text-sm p-5">
          <thead className="bg-green-50 w-full">
            <tr className="w-full">
            <th className="whitespace-nowrap px-5 py-2 text-left font-bold text-green-900">
                  Number
              </th>
              <th className="whitespace-nowrap px-5 py-2 text-left font-bold text-green-900">
                  LONG FORM
              </th>
              <th className="whitespace-nowrap px-5 py-2 text-left font-bold text-green-900">
                 SHORT FORM
              </th>
              <th className="whitespace-nowrap px-5 py-2 text-left font-bold text-green-900" >
                QR CODE
              </th>
              <th className="whitespace-nowrap px-5 py-2 text-left font-bold text-green-900" >
                CLICKS
              </th>
            </tr>
          </thead>
         
          {Urls != [] && <tbody className="divide-y divide-stone-200 w-full">
             {Urls.map((item)=> (
                <tr key={item._id} className="w-full">
                   <td className="whitespace-nowrap px-4 py-4 font-medium text-green-700">
               
                       {Urls.indexOf(item) +1}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 font-medium text-green-700">
                       {item.full}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-green-700">
                      <a href={`https://cezor.onrender.com/urls/${item.short}`}>{item.short}</a>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-green-700">
                      <QRCodeImage imageUrl={item.qrcode} className="h-3/4 w-3/4"/>
                    </td>
                    {/* <td className="whitespace-nowrap px-4 py-4 text-green-900">
                        {item.clicks}
                    </td> */}
                </tr>
                ))
            }
          </tbody>}
          
        </table>
    </div>
  );
}



export default Dashboard;
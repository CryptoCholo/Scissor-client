import { useState, useEffect } from 'react';



function Dashboard() {
  const [Urls, setUrls] = useState([]);

  useEffect(() => {
    fetch("https://cezor.onrender.com/urls",{
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
   
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)

        setUrls([])
      })
      .catch(error => {
        console.error('Error fetching chart data:', error);
      });
  }, [Urls])

  return (
    <div className='w-screen p-5 flex flex-col items-center justify-start'>
        <h2 className='h-6 font-bold mt-14'>YOUR URL COLLECTION</h2>
        <table className="w-3/4 divide-y divide-indigo-200 mt-8 text-sm p-5">
          <thead className="bg-indigo-50 w-full">
            <tr className="w-full">
            <th className="whitespace-nowrap px-5 py-2 text-left font-bold text-indigo-900">
                  Number
              </th>
              <th className="whitespace-nowrap px-5 py-2 text-left font-bold text-indigo-900">
                  LONG FORM
              </th>
              <th className="whitespace-nowrap px-5 py-2 text-left font-bold text-indigo-900">
                 SHORT FORM
              </th>
              <th className="whitespace-nowrap px-5 py-2 text-left font-bold text-indigo-900" >
                QR CODE
              </th>
              <th className="whitespace-nowrap px-5 py-2 text-left font-bold text-indigo-900" >
                CLICKS
              </th>
            </tr>
          </thead>
         
          <tbody className="divide-y divide-stone-200 w-full">
            {Urls.map((item)=> (
                <tr key={item.Date} className="w-full">
                   <td className="whitespace-nowrap px-4 py-4 font-medium text-indigo-700">
                       {Urls.indexOf(item) +1}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 font-medium text-indigo-700">
                       {item.full}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-indigo-700">
                      {item.short}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-indigo-700">
                        {item.qrcode}
                    </td>
                    {/* <td className="whitespace-nowrap px-4 py-4 text-indigo-900">
                        {item.clicks}
                    </td> */}
                </tr>
                ))
            }
          </tbody>
        </table>
    </div>
  );
}



export default Dashboard;
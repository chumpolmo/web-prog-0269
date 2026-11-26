'use client';

import staff from "../data/users.json";
import MyMenu from "../components/menu";
import MyFooter from "../components/footer";
import Image from "next/image";

export default function Staff(){
   let title = "ทีมงานของเรา";
   let description = "ทีมงานคุณภาพของเรา ดูรายละเอียดโปรไฟล์เพื่อติดต่อ";

   const handleView = (id: any) => {
     alert(`คุณเลือกโปรไฟล์รหัส ${id}?`);
   }

   return (
    <div>
      <MyMenu />
<div className="m-6">
  <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
    {title}
  </h1>
  <p className="mt-2 text-base text-gray-600">
    {description}
  </p>
</div>
      {/*การอ่านข้อมูลจาก Object array ด้วย Map Function */}

{/* Grid Container: 1 col mobile, 2 cols tablet, 3 cols desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-6">
        {staff.map((stfObj, ind) => (
          <div
            key={ind}
            className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            {/* Image Wrapper with fixed aspect ratio */}
            <div className="flex justify-center h-48">
              <img
                src={stfObj.userAvatar}
                alt={stfObj.userFullname}
              />
            </div>

            {/* Card Content */}
            <div className="flex flex-1 flex-col justify-between p-5">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {stfObj.userFullname}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {stfObj.userEmail}
                </p>
              </div>
              <button className="mt-4 w-fit text-sm font-medium text-blue-600 hover:text-blue-500" onClick={()=>handleView(`${stfObj.userId}`)}>
                View profile &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>

      <MyFooter />              
    </div>
  );
}
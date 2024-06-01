import { Select } from "flowbite-react";
import { useState } from "react";

export const ViewOrder = ({ onClick }) => {
    

    return (
      <div className="w-full fixed inset-0 flex justify-center items-center z-50 bg-gray-800 bg-opacity-75">
        <div className="w-3/4 h-4/5 max-h-screen overflow-y-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold mb-4">View Order Details</h3>
            <div onClick={onClick} className="hover:cursor-pointer flex flex-col items-center w-7 h-7 border-2 border-red-500 rounded-full text-black">x</div>
          </div>
          
          <div className="flex justify-around">
            <div className="p-5 bg-slate-200 border-1 shadow-lg rounded-lg">
                <div className="flex flex-col items-center font-bold">
                    User Details
                </div>

                <div>
                    <div>
                        ID : 9
                    </div>

                    <div>
                        Customer ID : 11908
                    </div>

                    <div>
                        Name : Ram
                    </div>

                    <div>
                        Email : jesus_christ@church.com
                    </div>

                    <div>
                        pincode : Mumbai
                    </div>

                    <div>
                        Location Name : Mumbai, Maharashtra, India
                    </div>

                    <div>
                        Type : C
                    </div>

                    <div>
                        Profile Pic : null
                    </div>

                    <div>
                        GST : 
                    </div>

                </div>
            </div>

            <div className="p-5 bg-slate-200 border-1 shadow-lg rounded-lg">
                <div className="flex flex-col items-center font-bold">
                    Order Details
                </div>

                <div>
                    ID : 209
                </div>

                <div>
                    Display ID : 8
                </div>

                <div>
                    Owner : 1079
                </div>

                <div>
                    Name : New Product
                </div>

                <div>
                    Category : The God of War
                </div>

                <div>
                    Characteristics : New Product Characteristics
                </div>

                <div>
                    Features : 
                </div>

                <div>
                    Brand : New Product Brand
                </div>

            </div>
          </div>
        </div>
      </div>
    );
}
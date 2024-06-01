import { Select } from "flowbite-react";
import { useState } from "react";

const PopUpContent = ({ onClick, addOrder, orderCount }) => {
  const [productOptions, setProductOptions] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const [price, setPrice] = useState(0); // State to hold the selling rate

  const handleSelectChange = (e) => {
    const selectedOption = e.target.value;
    if (selectedOption) {
      const newOrder = {
        id: orderCount,
        name: selectedOption,
        price: `$${price}`, // Set the price based on the selling rate
        quantity: inputValues[selectedOption]?.quantity || 0,
        date: new Date().toLocaleString(),
      };
      addOrder(newOrder);
      setSelectedOptions([...selectedOptions, selectedOption]);
      setProductOptions(null); // Reset the selected option after adding
    }
  };

  const handleInputChange = (selectedOption, field, value) => {
    const updatedValues = { ...inputValues };
    if (!updatedValues[selectedOption]) {
      updatedValues[selectedOption] = { quantity: "" };
    }
    updatedValues[selectedOption][field] = value;
    setInputValues(updatedValues);
  };

  return (
    <div className="w-full fixed inset-0 flex justify-center items-center z-50 bg-gray-800 bg-opacity-75">
      <div className="w-3/4 h-4/5 max-h-screen overflow-y-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold mb-4">All Products *</h3>
          <div
            onClick={onClick}
            className="hover:cursor-pointer flex flex-col items-center w-7 h-7 border-2 border-red-500 rounded-full text-black"
          >
            x
          </div>
        </div>
        <div className="mb-5 w-full hover:cursor-pointer">
          <Select
            className="w-full border-1 shadow-lg hover:cursor-pointer"
            value={productOptions || ""}
            onChange={handleSelectChange}
          >
            <option value="">Select option</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </Select>
        </div>

        <div className="border-1 border-solid border-black rounded-lg shadow-lg p-4">
          <div className="mb-2">
            <h4>Selected Options:</h4>
          </div>
          <ul>
            {selectedOptions.map((option, index) => (
              <div
                className="transition duration-700 ease-in-out transform hover:scale-105 border-2 border-solid border-black rounded-lg shadow-md p-4 m-4 bg-slate-100"
                key={index}
              >
                <div className="flex justify-between">
                  <div>
                    <li>
                      <span>{index + 1}. </span>
                      {option}
                    </li>
                  </div>
                  <div className="bg-slate-200 text-black rounded-2xl px-4">
                    {`$${price}`}
                  </div>
                </div>
                <div className="-ml-18">
                  <div className="-ml-40 mt-10 flex justify-around mr-20">
                    <div className="-ml-10">
                      <label htmlFor="">Selling rate : </label>
                    </div>
                    <div className="-ml-28">
                      <label htmlFor="">Total Items : </label>
                    </div>
                  </div>
                  <div className="flex justify-around mt-2">
                    <div>
                      <input
                        className="p-3 w-96 hover:cursor-pointer border-2 shadow-lg rounded-lg"
                        type="text"
                        placeholder="Enter selling rate"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        className="p-3 w-96 hover:cursor-pointer border-2 shadow-lg rounded-lg"
                        type="text"
                        placeholder="Enter quantity"
                        value={inputValues[option]?.quantity || ""}
                        onChange={(e) =>
                          handleInputChange(option, "quantity", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="flex mt-4 flex-col items-end">
                    <div className="bg-green-200 rounded-2xl px-4 text-green-900">
                      {inputValues[option]?.quantity
                        ? `${inputValues[option].quantity} Item(s) Remaining`
                        : "Item(s) Remaining"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopUpContent;

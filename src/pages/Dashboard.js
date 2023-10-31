import { Link } from "react-router-dom";
import { useState } from "react";
export default function Dashboard() {
  const [username, setUsername] = useState("");
  const [pickup, setPickup] = useState("");
  const [delivery, setDelivery] = useState("");
  const [submitStatus, setSubmitStatus] = useState(false);

  const handleSubmit = () => {
    // You can implement your login logic here
    // For simplicity, let's just check if both fields are non-empty
    if (username && pickup && delivery) {
      setSubmitStatus(true);
    }
  };
  return (
    <>
      {submitStatus ? (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-12 w-auto"
              src="https://toolmate.co.in/assets/logo/ToolmateLight.png"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Hey!! {username}, Delivery information has been submitted
            </h2>
            <h3 className="mt-10 text-center text-lg">
              📍 Pickup Location: <span>{pickup}</span>
            </h3>
            <h3 className="mt-10 text-center text-lg">
              📍 Delivery Location: <span>{delivery}</span>
            </h3>
            <Link to="/" className="">
              <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 mt-4 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-12 w-auto"
              src="https://toolmate.co.in/assets/logo/ToolmateLight.png"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Delivery Pickup Information
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="pickup"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Pickup Location
              </label>
              <div className="mt-2">
                <input
                  id="pickup"
                  name="pickup"
                  type="text"
                  required
                  onChange={(e) => setPickup(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="delivery"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Delivery Location
              </label>
              <div className="mt-2">
                <input
                  id="delivery"
                  name="delivery"
                  type="text"
                  required
                  onChange={(e) => setDelivery(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

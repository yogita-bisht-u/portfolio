import Image from "next/image";

async function submitForm(formData){
  "use server";
  const formFields ={
    email: formData.get("email"),
    message: formData.get("message")
  };
  console.log("formFields", formFields);
  console.log(
    "Todo: send this data to your email or store it in a database"
  );
  return formFields;
}
export default function Home () {
  return (
<main className="text-center p-4 bg-white max-w-md mx-auto p-10 shadow-md rounded-md" >


<h1 className="text-4xl font-bold mb-6 text-center " >Contact me </h1>
<form className="max-w-md mx-auto mt-8 space-y-4" action={submitForm}>
  <div>
    <label htmlFor="email">Email:</label>
    <input 
    id="email"
    name="email"
    type="text"
    className="border border-gray-300 rounded p-2 w-full"
    required/>

  </div>
  <div>
    <label htmlFor="message">Message:</label>
    <input 
    id="message"
    name="message"
    type="text"
    className="border border-gray-300 rounded p-2 w-full focused:border-blue-500"
    required/>
  </div>
  <div>
    <button 
    type="submit"
    className="bg-blue-500 text-white rounded p-2 mt-2">
      Submit
    </button>
  </div>
  </form>



</main>

  )}

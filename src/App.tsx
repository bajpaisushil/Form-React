import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import sigma from './assets/sigma.png';
import ListIcon from "@mui/icons-material/List";

function App() {
  return (
    <div className="bg-[#ebf0f4] p-2 px-4 lg:px-8">
      <div className="flex justify-between m-[1rem] items-center">
        <h1 className="text-[1.5rem] font-extrabold">Magnabox Private Limited</h1>
        <img src={sigma} alt="3sigma" className="w-[8rem] h-[2rem]" />
      </div>

      <div className="flex justify-between items-center m-[1rem]">
        <h1 className="text-[1.3rem] font-bold">Add new lead form</h1>
        <button className="text-[1rem] text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white rounded-md p-1 px-2">
          Cancel
        </button>
      </div>

      <form className="flex flex-col p-4 my-10">
        <div className="lg:px-10 my-2">
          <label className="text-[1rem] my-2 font-semibold">Lead name</label>
          <div className="flex items-center mb-2">
            <PersonIcon
              style={{ fontSize: "2.5rem", color: "blue" }}
              className="rounded-md p-2 bg-white "
            />
            <input
              type="text"
              className="w-full h-10 p-2 rounded-md"
              required
              placeholder="Enter lead name"
            />
          </div>
        </div>
        <div className="lg:px-10 my-2">
          <label className="text-[1rem] my-2 font-semibold">Email ID</label>
          <div className="flex items-center mb-2">
            <EmailIcon
              style={{ fontSize: "2.5rem", color: "blue" }}
              className="rounded-md p-2 bg-white "
            />
            <input
              type="text"
              className="w-full h-10 p-2 rounded-md"
              required
              placeholder="Example . anyemail.com"
            />
          </div>
        </div>
        <div className="lg:px-10 my-2">
          <label className="text-[1rem] my-2 font-semibold">Phone number</label>
          <div className="flex items-center mb-2">
            <LocalPhoneIcon
              style={{ fontSize: "2.5rem", color: "blue" }}
              className="rounded-md p-2 bg-white "
            />
            <input
              type="number"
              className="w-full h-10 p-2 rounded-md"
              required
              placeholder="+91 7827160996"
            />
          </div>
        </div>
        <div className="lg:px-10 my-2">
          <label className="text-[1rem] my-2 font-semibold">Address</label>
          <div className="flex items-center mb-2">
            <LanguageIcon
              style={{ fontSize: "2.5rem", color: "blue" }}
              className="rounded-md p-2 bg-white "
            />
            <input
              type="text"
              className="w-full h-10 p-2 rounded-md"
              required
              placeholder="Gurugram, India"
            />
          </div>
        </div>
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.970363493323!2d77.0338381752246!3d28.60066588552763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bde33a821cf%3A0x7845fdcde318dd08!2sISKCON%20Temple%20Dwarka%20Delhi!5e0!3m2!1sen!2sin!4v1700629688098!5m2!1sen!2sin"
            className="w-[95%] h-[20rem] justify-center m-auto my-10"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="lg:px-10 my-2">
          <label className="text-[1rem] my-2 font-semibold">Sale Value</label>
          <div className="flex items-center mb-2">
            <CurrencyRupeeIcon
              style={{ fontSize: "2.5rem", color: "blue" }}
              className="rounded-md p-2 bg-white "
            />
            <input
              type="number"
              className="w-full h-10 p-2 rounded-md"
              required
              placeholder="50,00,000"
            />
          </div>
        </div>
        <div className="lg:px-10 my-2">
          <label className="text-[1rem] my-2 font-semibold">Date</label>
          <div className="flex items-center mb-2">
            <DateRangeIcon
              style={{ fontSize: "2.5rem", color: "blue" }}
              className="rounded-md p-2 bg-white "
            />
            <input
              type="date"
              className="w-full h-10 p-2 rounded-md"
              required
              placeholder="20:21 pm"
            />
          </div>
        </div>
        <div className="lg:px-10 my-2">
          <label className="text-[1rem] my-2 font-semibold">Time</label>
          <div className="flex items-center mb-2">
            <AccessTimeFilledIcon
              style={{ fontSize: "2.5rem", color: "blue" }}
              className="rounded-md p-2 bg-white "
            />
            <input
              type="time"
              className="w-full h-10 p-2 rounded-md"
              required
              placeholder="20:21 pm"
            />
          </div>
        </div>
        <div className="lg:px-10 my-2">
          <label className="text-[1rem] my-2 font-semibold">Options</label>
          <div className="flex items-center mb-2">
            <ListIcon
              style={{ fontSize: "2.5rem", color: "blue" }}
              className="rounded-md p-2 bg-white "
            />
            <select
              className="w-full h-10 p-2 rounded-md"
              value="Select Value"
            >
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
            </select>
          </div>
        </div>
        <div className="lg:px-10 my-2">
          <label className="text-[1rem] my-2 font-semibold">Products</label>
          <div className="flex items-center mb-2">
            <ListIcon
              style={{ fontSize: "2.5rem", color: "blue" }}
              className="rounded-md p-2 bg-white "
            />
            <select
              className="w-full h-10 p-2 rounded-md"
              value="Select Value"
            >
              <option value="Product 1">Product 1</option>
              <option value="Product 2">Product 2</option>
              <option value="Product 3">Product 3</option>
              <option value="Product 4">Product 4</option>
            </select>
          </div>
        </div>
        <div className="lg:px-10 my-2">
          <label className="text-[1rem] my-2 font-semiibold">Note</label>
          <div className="flex items-center mb-2">
            <textarea
              className="w-full h-[14rem] p-2 rounded-md"
              placeholder="Enter note"
            />
          </div>
        </div>
        <button className="mt-[5rem] w-[95%] m-auto h-[3rem] rounded-lg text-white text-center bg-[#3A4B86]">Add lead</button>
      </form>
    </div>
  );
}

export default App;

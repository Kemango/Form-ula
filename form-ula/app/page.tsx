"use client";
import Image from "next/image";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Save';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header NavBar */}
      <div className="flex boder-b shadow-md border-gray-200">
        <div className="max-w-6xl w-full mx-auto flex items-center justify-between py-4 px-8">
          {/* Logo and CompanyName */}
          <div className="flex gap-3 items-center">
            <Image
              src="/NavLogo.jpeg"
              alt="GreatFrontEnd Logo"
              width={35}
              height={35}
            />
            <h1 className="font-bold items-center text-3xl">Form Builder</h1>
          </div>
          {/* Save and Preview Button */}
          <div className="flex items-center gap-4">
            <Button variant="outlined" startIcon={<SendIcon/>} color="black">
              <h1>Save</h1>
            </Button>
            <Button variant="outlined" color="black">
              Preview Form
            </Button>
          </div>
        </div>
      </div>
      {/* Body */}
      {/* <div
        className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">

      </div> */}
    </main>
  );
}

export default Home;
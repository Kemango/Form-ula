"use client";
import Card from '@mui/material/Card';
import { useRouter } from 'next/navigation';


// Component
import { NavBar } from "@/components/navbar";
import { LeftSidebar } from "@/components/leftSidebar";


const Home = () => {
  const router = useRouter(); 
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header NavBar */}
      <NavBar />
      {/* Body */}
      <div
        className="grid md:grid-cols-[30%_70%]">
        {/* Left Sidebar */}
        <LeftSidebar />
        {/* Right Sidebar */}
        <div className="p-8">
          <Card>
            {/* Header */}
            <div className="p-8 items-center bg-purple-100">
              <h2 className="text-2xl font-bold">Form Title</h2>
              <p>Form Description.</p>
            </div>
            {/* Body */}
            <div className="h-64 flex items-center justify-center">
              <p className="text-gray-500">No form fields added yet. Use the panel on the left to add form elemets</p>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default Home;
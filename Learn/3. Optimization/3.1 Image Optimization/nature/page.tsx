import Image from "next/image";
import React from "react";
import image from "../../public/image.png";

const Nature: React.FC = () => {
  return (
    <div>
      {/* Internal Way */}
      <Image src={image} alt="Nature Image" width={500} height={400} />

      {/* External Way *Have to set next.config* */}
      <Image
        src="https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Nature Image"
        width={500}
        height={400}
      />
    </div>
  );
};

export default Nature;

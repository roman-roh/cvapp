import { Rnd } from "react-rnd";
import { useMediaQuery } from 'react-responsive';

const Window: React.FC<CardContentProps> = ({ children, className }) => {
  const isSmall = useMediaQuery({ maxWidth: 1199 });
  return (
    <Rnd
      default={{
        x: isSmall ? 0 : 700,
        y: isSmall ? 600 : 65,
        width: 800,
        height: 1240,
      }}
      minWidth={200}
      minHeight={100}
	  cancel=".no-drag"
      className="bg-white shadow-lg border rounded-lg overflow-hidden"
	  style={{ 
		  zIndex: 100, 	  
		  border: "2px solid #1E3A8A", 
	      borderRadius: "12px",
	      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
		  backgroundColor: '#ffffff',  
	  }}
	  >
      <div className="px-4 py-2">	  
        {children}
      </div>
    </Rnd>
  );
};

export default Window;
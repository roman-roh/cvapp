import { Rnd } from "react-rnd";

const Window: React.FC<CardContentProps> = ({ children, className }) => {
  return (
    <Rnd
      default={{
        x: 860,
        y: 100,
        width: 800,
        height: 1140,
      }}
      minWidth={200}
      minHeight={100}
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